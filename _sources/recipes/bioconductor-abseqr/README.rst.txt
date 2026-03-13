:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-abseqr'
.. highlight: bash

bioconductor-abseqr
===================

.. conda:recipe:: bioconductor-abseqr
   :replaces_section_title:
   :noindex:

   Reporting and data analysis functionalities for Rep\-Seq datasets of antibody libraries

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/abseqR.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-abseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abseqr/meta.yaml>`_

   AbSeq is a comprehensive bioinformatic pipeline for the analysis of sequencing datasets generated from antibody libraries and abseqR is one of its packages. abseqR empowers the users of abseqPy \(https\:\/\/github.com\/malhamdoosh\/abseqPy\) with plotting and reporting capabilities and allows them to generate interactive HTML reports for the convenience of viewing and sharing with other researchers. Additionally\, abseqR extends abseqPy to compare multiple repertoire analyses and perform further downstream analysis on its output.


.. conda:package:: bioconductor-abseqr

   |downloads_bioconductor-abseqr| |docker_bioconductor-abseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on pandoc: ``>=1.19.2.1``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-flexdashboard: 
   :depends on r-ggcorrplot: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-knitr: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-png: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-stringr: 
   :depends on r-vegan: 
   :depends on r-venndiagram: 

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

    pixi global install bioconductor-abseqr

to add into an existing workspace instead, run::

    pixi add bioconductor-abseqr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-abseqr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-abseqr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-abseqr:<tag>

(see `bioconductor-abseqr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-abseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-abseqr
   :alt:   (downloads)
.. |docker_bioconductor-abseqr| image:: https://quay.io/repository/biocontainers/bioconductor-abseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abseqr
.. _`bioconductor-abseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-abseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-abseqr";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abseqr/README.html