:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathwaytmb'
.. highlight: bash

r-pathwaytmb
============

.. conda:recipe:: r-pathwaytmb
   :replaces_section_title:
   :noindex:

   A systematic bioinformatics tool to develop a new pathway\-based gene panel for tumor mutational burden \(TMB\) assessment \(pathway\-based tumor mutational burden\, PTMB\)\, using somatic mutations files in an efficient manner from either The Cancer Genome Atlas sources or any in\-house studies as long as the data is in mutation annotation file \(MAF\) format. Besides\, we develop a multiple machine learning method using the sample\'s PTMB profiles to identify cancer\-specific dysfunction pathways\, which can be a biomarker of prognostic and predictive for cancer immunotherapy.

   :homepage: https://CRAN.R-project.org/package=pathwayTMB
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-pathwaytmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathwaytmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathwaytmb/meta.yaml>`_

   


.. conda:package:: r-pathwaytmb

   |downloads_r-pathwaytmb| |docker_r-pathwaytmb|

   :versions:
      
      

      ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-maftools: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-data.table: 
   :depends r-glmnet: 
   :depends r-proc: 
   :depends r-purrr: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :depends r-survminer: 
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

      mamba install r-pathwaytmb

   and update with::

      mamba update r-pathwaytmb

  To create a new environment, run::

      mamba create --name myenvname r-pathwaytmb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pathwaytmb:<tag>

   (see `r-pathwaytmb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pathwaytmb| image:: https://img.shields.io/conda/dn/bioconda/r-pathwaytmb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathwaytmb
   :alt:   (downloads)
.. |docker_r-pathwaytmb| image:: https://quay.io/repository/biocontainers/r-pathwaytmb/status
   :target: https://quay.io/repository/biocontainers/r-pathwaytmb
.. _`r-pathwaytmb/tags`: https://quay.io/repository/biocontainers/r-pathwaytmb?tab=tags


.. raw:: html

    <script>
        var package = "r-pathwaytmb";
        var versions = ["0.1.3","0.1.3","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathwaytmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathwaytmb/README.html