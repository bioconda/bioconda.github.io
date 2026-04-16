:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crbhits'
.. highlight: bash

r-crbhits
=========

.. conda:recipe:: r-crbhits
   :replaces_section_title:
   :noindex:

   CRBHits\: From Conditional Reciprocal Best Hits to Codon Alignments and Ka\/Ks in R.

   :homepage: https://github.com/kullrich/CRBHits
   :license: MIT / MIT
   :recipe: /`r-crbhits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crbhits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crbhits/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02424`

   CRBHits is a reimplementation of the Conditional Reciprocal Best Hit \(CRBH\) algorithm crb\-blast in R. It covers all necessary steps from CRBHit pair calculation to Codon Alignments and Ka\/Ks. \(see \[Ullrich \(2020\) \<https\:\/\/doi.org\/10.21105\/joss.02424\>\]\)


.. conda:package:: r-crbhits

   |downloads_r-crbhits| |docker_r-crbhits|

   :versions:
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-msa2dist: ``>=1.10.0,<1.11.0a0``
   :depends on dagchainer: ``>=0r.120920``
   :depends on kakscalculator2: ``>=2.0.1,<3.0a0``
   :depends on last: ``>=1608``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-curl: 
   :depends on r-devtools: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-seqinr: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-testthat: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install r-crbhits

to add into an existing workspace instead, run::

    pixi add r-crbhits

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-crbhits

Alternatively, to install into a new environment, run::

    conda create -n envname r-crbhits

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-crbhits:<tag>

(see `r-crbhits/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-crbhits| image:: https://img.shields.io/conda/dn/bioconda/r-crbhits.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crbhits
   :alt:   (downloads)
.. |docker_r-crbhits| image:: https://quay.io/repository/biocontainers/r-crbhits/status
   :target: https://quay.io/repository/biocontainers/r-crbhits
.. _`r-crbhits/tags`: https://quay.io/repository/biocontainers/r-crbhits?tab=tags


.. raw:: html

    <script>
        var package = "r-crbhits";
        var versions = ["0.0.7","0.0.7","0.0.5","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crbhits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crbhits/README.html