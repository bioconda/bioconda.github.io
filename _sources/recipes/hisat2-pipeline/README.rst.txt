:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat2-pipeline'
.. highlight: bash

hisat2-pipeline
===============

.. conda:recipe:: hisat2-pipeline
   :replaces_section_title:
   :noindex:

   A pipeline to automatically run an RNA\-seq analysis using HISAT2\/Stringtie using default settings.

   :homepage: https://github.com/mcamagna/HISAT2-pipeline
   :license: GPL / GPL-3.0-or-later
   :recipe: /`hisat2-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2-pipeline/meta.yaml>`_
   :links: https: :https:`//doi.org/10.5281/zenodo.10389729`

   


.. conda:package:: hisat2-pipeline

   |downloads_hisat2-pipeline| |docker_hisat2-pipeline|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends hisat2: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends samtools: ``>=1.9``
   :depends stringtie: 
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

      mamba install hisat2-pipeline

   and update with::

      mamba update hisat2-pipeline

  To create a new environment, run::

      mamba create --name myenvname hisat2-pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hisat2-pipeline:<tag>

   (see `hisat2-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_hisat2-pipeline| image:: https://img.shields.io/conda/dn/bioconda/hisat2-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat2-pipeline
   :alt:   (downloads)
.. |docker_hisat2-pipeline| image:: https://quay.io/repository/biocontainers/hisat2-pipeline/status
   :target: https://quay.io/repository/biocontainers/hisat2-pipeline
.. _`hisat2-pipeline/tags`: https://quay.io/repository/biocontainers/hisat2-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "hisat2-pipeline";
        var versions = ["1.1.0","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat2-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat2-pipeline/README.html