:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpgenie'
.. highlight: bash

snpgenie
========

.. conda:recipe:: snpgenie
   :replaces_section_title:
   :noindex:

   Program for estimating πN\/πS\, dN\/dS\, and other diversity measures from next\-generation sequencing data

   :homepage: https://github.com/chasewnelson/SNPGenie
   :license: GPL / GPL-3.0
   :recipe: /`snpgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie/meta.yaml>`_

   


.. conda:package:: snpgenie

   |downloads_snpgenie| |docker_snpgenie|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends perl: 
   :depends perl-data-dumper: 
   :depends perl-file-temp: 
   :depends perl-io-handle: 
   :depends perl-list-util: 
   :depends perl-parallel-forkmanager: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snpgenie

   and update with::

      mamba update snpgenie

  To create a new environment, run::

      mamba create --name myenvname snpgenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpgenie:<tag>

   (see `snpgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_snpgenie| image:: https://img.shields.io/conda/dn/bioconda/snpgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/snpgenie
   :alt:   (downloads)
.. |docker_snpgenie| image:: https://quay.io/repository/biocontainers/snpgenie/status
   :target: https://quay.io/repository/biocontainers/snpgenie
.. _`snpgenie/tags`: https://quay.io/repository/biocontainers/snpgenie?tab=tags


.. raw:: html

    <script>
        var package = "snpgenie";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpgenie/README.html