:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dearseq'
.. highlight: bash

bioconductor-dearseq
====================

.. conda:recipe:: bioconductor-dearseq
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis for RNA\-seq data through a robust variance component test

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dearseq.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-dearseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq/meta.yaml>`_

   Differential Expression Analysis RNA\-seq data with variance component score test accounting for data heteroscedasticity through precision weights. Perform both gene\-wise and gene set analyses\, and can deal with repeated or longitudinal data. Methods are detailed in\: i\) Agniel D \& Hejblum BP \(2017\) Variance component score test for time\-course gene set analysis of longitudinal RNA\-seq data\, Biostatistics\, 18\(4\)\:589\-604 \; and ii\) Gauthier M\, Agniel D\, Thiébaut R \& Hejblum BP \(2020\) dearseq\: a variance component score test for RNA\-Seq differential analysis that effectively controls the false discovery rate\, NAR Genomics and Bioinformatics\, 2\(4\)\:lqaa093.


.. conda:package:: bioconductor-dearseq

   |downloads_bioconductor-dearseq| |docker_bioconductor-dearseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-compquadform: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-kernsmooth: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-patchwork: 
   :depends on r-pbapply: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scattermore: 
   :depends on r-statmod: 
   :depends on r-survey: 
   :depends on r-tibble: 
   :depends on r-viridislite: 

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

    pixi global install bioconductor-dearseq

to add into an existing workspace instead, run::

    pixi add bioconductor-dearseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dearseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dearseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dearseq:<tag>

(see `bioconductor-dearseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dearseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dearseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dearseq
   :alt:   (downloads)
.. |docker_bioconductor-dearseq| image:: https://quay.io/repository/biocontainers/bioconductor-dearseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dearseq
.. _`bioconductor-dearseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dearseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dearseq";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.1","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dearseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dearseq/README.html