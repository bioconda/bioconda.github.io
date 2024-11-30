:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feelnc'
.. highlight: bash

feelnc
======

.. conda:recipe:: feelnc
   :replaces_section_title:
   :noindex:

   FlExible Extraction of LncRNA

   :homepage: https://github.com/tderrien/FEELnc
   :license: GNU General Public License v3.0
   :recipe: /`feelnc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc/meta.yaml>`_

   


.. conda:package:: feelnc

   |downloads_feelnc| |docker_feelnc|

   :versions:
      
      

      ``0.2-0``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends fasta_ushuffle: 
   :depends kmerinshort: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bio-featureio: 
   :depends perl-bioperl: 
   :depends perl-db-file: 
   :depends perl-parallel-forkmanager: 
   :depends r-base: 
   :depends r-randomforest: 
   :depends r-rocr: 
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

      mamba install feelnc

   and update with::

      mamba update feelnc

  To create a new environment, run::

      mamba create --name myenvname feelnc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/feelnc:<tag>

   (see `feelnc/tags`_ for valid values for ``<tag>``)


.. |downloads_feelnc| image:: https://img.shields.io/conda/dn/bioconda/feelnc.svg?style=flat
   :target: https://anaconda.org/bioconda/feelnc
   :alt:   (downloads)
.. |docker_feelnc| image:: https://quay.io/repository/biocontainers/feelnc/status
   :target: https://quay.io/repository/biocontainers/feelnc
.. _`feelnc/tags`: https://quay.io/repository/biocontainers/feelnc?tab=tags


.. raw:: html

    <script>
        var package = "feelnc";
        var versions = ["0.2","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feelnc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feelnc/README.html