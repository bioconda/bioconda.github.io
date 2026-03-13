:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogena'
.. highlight: bash

bioconductor-cogena
===================

.. conda:recipe:: bioconductor-cogena
   :replaces_section_title:
   :noindex:

   co\-expressed gene\-set enrichment analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cogena.html
   :license: LGPL-3
   :recipe: /`bioconductor-cogena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena/meta.yaml>`_
   :links: biotools: :biotools:`cogena`, doi: :doi:`10.1186/s12864-016-2737-8`

   cogena is a workflow for co\-expressed gene\-set enrichment analysis. It aims to discovery smaller scale\, but highly correlated cellular events that may be of great biological relevance. A novel pipeline for drug discovery and drug repositioning based on the cogena workflow is proposed. Particularly\, candidate drugs can be predicted based on the gene expression of disease\-related data\, or other similar drugs can be identified based on the gene expression of drug\-related data. Moreover\, the drug mode of action can be disclosed by the associated pathway analysis. In summary\, cogena is a flexible workflow for various gene set enrichment analysis for co\-expressed genes\, with a focus on pathway\/GO analysis and drug repositioning.


.. conda:package:: bioconductor-cogena

   |downloads_bioconductor-cogena| |docker_bioconductor-cogena|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-amap: 
   :depends on r-apcluster: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biwt: 
   :depends on r-class: 
   :depends on r-cluster: 
   :depends on r-corrplot: 
   :depends on r-devtools: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-fastcluster: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-kohonen: 
   :depends on r-mclust: 
   :depends on r-reshape2: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-cogena

to add into an existing workspace instead, run::

    pixi add bioconductor-cogena

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cogena

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cogena

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cogena:<tag>

(see `bioconductor-cogena/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cogena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogena
   :alt:   (downloads)
.. |docker_bioconductor-cogena| image:: https://quay.io/repository/biocontainers/bioconductor-cogena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogena
.. _`bioconductor-cogena/tags`: https://quay.io/repository/biocontainers/bioconductor-cogena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogena";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogena/README.html