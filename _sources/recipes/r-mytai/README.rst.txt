:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mytai'
.. highlight: bash

r-mytai
=======

.. conda:recipe:: r-mytai
   :replaces_section_title:
   :noindex:

   Investigate the evolution of biological processes by capturing evolutionary signatures in transcriptomes. This package aims to provide a transcriptome analysis environment to quantify the average evolutionary age of genes contributing to a transcriptome of interest.

   :homepage: https://github.com/drostlab/myTAI
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-mytai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx835`

   


.. conda:package:: r-mytai

   |downloads_r-mytai| |docker_r-mytai|

   :versions:
      
      

      ``2.3.5-0``,  ``2.3.4-0``,  ``0.9.3-1``,  ``0.9.3-0``

      

   
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends on fribidi: ``>=1.0.16,<2.0a0``
   :depends on harfbuzz: ``>=9.0.0,<10.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-doparallel: ``>=1.0.8``
   :depends on r-dplyr: ``>=0.3.0``
   :depends on r-fitdistrplus: ``>=1.0_2``
   :depends on r-foreach: ``>=1.4.2``
   :depends on r-ggforce: 
   :depends on r-ggplot2: ``>=1.0.1``
   :depends on r-ggplotify: 
   :depends on r-ggrepel: 
   :depends on r-ggridges: 
   :depends on r-ggtext: 
   :depends on r-gridextra: 
   :depends on r-nortest: ``>=1.0_2``
   :depends on r-patchwork: 
   :depends on r-pheatmap: 
   :depends on r-r.utils: ``>=2.12.2``
   :depends on r-rcolorbrewer: ``>=1.1_2``
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcpparmadillo: 
   :depends on r-rcppthread: 
   :depends on r-readr: ``>=0.2.2``
   :depends on r-reshape2: ``>=1.4.1``
   :depends on r-scales: 
   :depends on r-taxize: ``>=0.6.0``
   :depends on r-textshaping: 
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

    pixi global install r-mytai

to add into an existing workspace instead, run::

    pixi add r-mytai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mytai

Alternatively, to install into a new environment, run::

    conda create -n envname r-mytai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mytai:<tag>

(see `r-mytai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mytai| image:: https://img.shields.io/conda/dn/bioconda/r-mytai.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mytai
   :alt:   (downloads)
.. |docker_r-mytai| image:: https://quay.io/repository/biocontainers/r-mytai/status
   :target: https://quay.io/repository/biocontainers/r-mytai
.. _`r-mytai/tags`: https://quay.io/repository/biocontainers/r-mytai?tab=tags


.. raw:: html

    <script>
        var package = "r-mytai";
        var versions = ["2.3.5","2.3.4","0.9.3","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mytai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mytai/README.html