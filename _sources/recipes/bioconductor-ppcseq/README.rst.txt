:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppcseq'
.. highlight: bash

bioconductor-ppcseq
===================

.. conda:recipe:: bioconductor-ppcseq
   :replaces_section_title:
   :noindex:

   Probabilistic Outlier Identification for RNA Sequencing Generalized Linear Models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ppcseq.html
   :license: GPL-3
   :recipe: /`bioconductor-ppcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq/meta.yaml>`_

   Relative transcript abundance has proven to be a valuable tool for understanding the function of genes in biological systems. For the differential analysis of transcript abundance using RNA sequencing data\, the negative binomial model is by far the most frequently adopted. However\, common methods that are based on a negative binomial model are not robust to extreme outliers\, which we found to be abundant in public datasets. So far\, no rigorous and probabilistic methods for detection of outliers have been developed for RNA sequencing data\, leaving the identification mostly to visual inspection. Recent advances in Bayesian computation allow large\-scale comparison of observed data against its theoretical distribution given in a statistical model. Here we propose ppcseq\, a key quality\-control tool for identifying transcripts that include outlier data points in differential expression analysis\, which do not follow a negative binomial distribution. Applying ppcseq to analyse several publicly available datasets using popular tools\, we show that from 3 to 10 percent of differentially abundant transcripts across algorithms and datasets had statistics inflated by the presence of outliers.


.. conda:package:: bioconductor-ppcseq

   |downloads_bioconductor-ppcseq| |docker_bioconductor-ppcseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-benchmarkme: 
   :depends on r-bh: ``>=1.66.0``
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-rlang: 
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.1.1``
   :depends on r-stanheaders: ``>=2.18.0``
   :depends on r-tibble: 
   :depends on r-tidybayes: 
   :depends on r-tidyr: ``>=0.8.3.9000``
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-ppcseq

to add into an existing workspace instead, run::

    pixi add bioconductor-ppcseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ppcseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ppcseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ppcseq:<tag>

(see `bioconductor-ppcseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ppcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ppcseq
   :alt:   (downloads)
.. |docker_bioconductor-ppcseq| image:: https://quay.io/repository/biocontainers/bioconductor-ppcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppcseq
.. _`bioconductor-ppcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-ppcseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ppcseq";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppcseq/README.html