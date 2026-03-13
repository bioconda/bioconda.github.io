:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cordon'
.. highlight: bash

bioconductor-cordon
===================

.. conda:recipe:: bioconductor-cordon
   :replaces_section_title:
   :noindex:

   Codon Usage Analysis and Prediction of Gene Expressivity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/coRdon.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cordon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon/meta.yaml>`_

   Tool for analysis of codon usage in various unannotated or KEGG\/COG annotated DNA sequences. Calculates different measures of CU bias and CU\-based predictors of gene expressivity\, and performs gene set enrichment analysis for annotated sequences. Implements several methods for visualization of CU and enrichment analysis results.


.. conda:package:: bioconductor-cordon

   |downloads_bioconductor-cordon| |docker_bioconductor-cordon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-purrr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-cordon

to add into an existing workspace instead, run::

    pixi add bioconductor-cordon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cordon

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cordon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cordon:<tag>

(see `bioconductor-cordon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cordon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cordon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cordon
   :alt:   (downloads)
.. |docker_bioconductor-cordon| image:: https://quay.io/repository/biocontainers/bioconductor-cordon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cordon
.. _`bioconductor-cordon/tags`: https://quay.io/repository/biocontainers/bioconductor-cordon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cordon";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cordon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cordon/README.html