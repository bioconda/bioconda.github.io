:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bloodcancermultiomics2017'
.. highlight: bash

bioconductor-bloodcancermultiomics2017
======================================

.. conda:recipe:: bioconductor-bloodcancermultiomics2017
   :replaces_section_title:
   :noindex:

   \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al. \- experimental data and complete analysis

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/BloodCancerMultiOmics2017.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-bloodcancermultiomics2017 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017/meta.yaml>`_

   The package contains data of the Primary Blood Cancer Encyclopedia \(PACE\) project together with a complete executable transcript of the statistical analysis and reproduces figures presented in the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) 128\(1\)\:427\-445. doi\:10.1172\/JCI93801.


.. conda:package:: bioconductor-bloodcancermultiomics2017

   |downloads_bioconductor-bloodcancermultiomics2017| |docker_bioconductor-bloodcancermultiomics2017|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-beeswarm: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gtable: 
   :depends r-ipflasso: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-survival: 
   :depends r-tibble: 
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

      mamba install bioconductor-bloodcancermultiomics2017

   and update with::

      mamba update bioconductor-bloodcancermultiomics2017

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bloodcancermultiomics2017

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bloodcancermultiomics2017:<tag>

   (see `bioconductor-bloodcancermultiomics2017/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bloodcancermultiomics2017| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bloodcancermultiomics2017.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bloodcancermultiomics2017
   :alt:   (downloads)
.. |docker_bioconductor-bloodcancermultiomics2017| image:: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017
.. _`bioconductor-bloodcancermultiomics2017/tags`: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bloodcancermultiomics2017";
        var versions = ["1.20.0","1.18.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html