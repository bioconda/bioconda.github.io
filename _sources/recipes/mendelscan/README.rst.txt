:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mendelscan'
.. highlight: bash

mendelscan
==========

.. conda:recipe:: mendelscan
   :replaces_section_title:
   :noindex:

   Analyze exome data for Mendelian disorders.

   :homepage: https://github.com/genome/mendelscan
   :license: Unknown
   :recipe: /`mendelscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mendelscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mendelscan/meta.yaml>`_

   


.. conda:package:: mendelscan

   |downloads_mendelscan| |docker_mendelscan|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``v1.2.2-1``,  ``v1.2.2-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mendelscan

   and update with::

      mamba update mendelscan

  To create a new environment, run::

      mamba create --name myenvname mendelscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mendelscan:<tag>

   (see `mendelscan/tags`_ for valid values for ``<tag>``)


.. |downloads_mendelscan| image:: https://img.shields.io/conda/dn/bioconda/mendelscan.svg?style=flat
   :target: https://anaconda.org/bioconda/mendelscan
   :alt:   (downloads)
.. |docker_mendelscan| image:: https://quay.io/repository/biocontainers/mendelscan/status
   :target: https://quay.io/repository/biocontainers/mendelscan
.. _`mendelscan/tags`: https://quay.io/repository/biocontainers/mendelscan?tab=tags


.. raw:: html

    <script>
        var package = "mendelscan";
        var versions = ["1.2.2","1.2.2","v1.2.2","v1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mendelscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mendelscan/README.html