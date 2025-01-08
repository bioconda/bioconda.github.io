:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-camutqc'
.. highlight: bash

bioconductor-camutqc
====================

.. conda:recipe:: bioconductor-camutqc
   :replaces_section_title:
   :noindex:

   An R Package for Comprehensive Filtration and Selection of Cancer Somatic Mutations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CaMutQC.html
   :license: GPL-3
   :recipe: /`bioconductor-camutqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camutqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camutqc/meta.yaml>`_

   CaMutQC is able to filter false positive mutations generated due to technical issues\, as well as to select candidate cancer mutations through a series of well\-structured functions by labeling mutations with various flags. And a detailed and vivid filter report will be offered after completing a whole filtration or selection section. Also\, CaMutQC integrates serveral methods and gene panels for Tumor Mutational Burden \(TMB\) estimation.


.. conda:package:: bioconductor-camutqc

   |downloads_bioconductor-camutqc| |docker_bioconductor-camutqc|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-maftools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-meskit: ``>=1.16.0,<1.17.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-vcfr: 
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

      mamba install bioconductor-camutqc

   and update with::

      mamba update bioconductor-camutqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-camutqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-camutqc:<tag>

   (see `bioconductor-camutqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-camutqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-camutqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-camutqc
   :alt:   (downloads)
.. |docker_bioconductor-camutqc| image:: https://quay.io/repository/biocontainers/bioconductor-camutqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-camutqc
.. _`bioconductor-camutqc/tags`: https://quay.io/repository/biocontainers/bioconductor-camutqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-camutqc";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-camutqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-camutqc/README.html