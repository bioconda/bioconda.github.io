:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-densvis'
.. highlight: bash

bioconductor-densvis
====================

.. conda:recipe:: bioconductor-densvis
   :replaces_section_title:
   :noindex:

   Density\-Preserving Data Visualization via Non\-Linear Dimensionality Reduction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/densvis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-densvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-densvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-densvis/meta.yaml>`_

   Implements the density\-preserving modification to t\-SNE and UMAP described by Narayan et al. \(2020\) \<doi\:10.1101\/2020.05.12.077776\>. The non\-linear dimensionality reduction techniques t\-SNE and UMAP enable users to summarise complex high\-dimensional sequencing data such as single cell RNAseq using lower dimensional representations. These lower dimensional representations enable the visualisation of discrete transcriptional states\, as well as continuous trajectory \(for example\, in early development\). However\, these methods focus on the local neighbourhood structure of the data. In some cases\, this results in misleading visualisations\, where the density of cells in the low\-dimensional embedding does not represent the transcriptional heterogeneity of data in the original high\-dimensional space. den\-SNE and densMAP aim to enable more accurate visual interpretation of high\-dimensional datasets by producing lower\-dimensional embeddings that accurately represent the heterogeneity of the original high\-dimensional space\, enabling the identification of homogeneous and heterogeneous cell states. This accuracy is accomplished by including in the optimisation process a term which considers the local density of points in the original high\-dimensional space. This can help to create visualisations that are more representative of heterogeneity in the original high\-dimensional space.


.. conda:package:: bioconductor-densvis

   |downloads_bioconductor-densvis| |docker_bioconductor-densvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.6-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-irlba: 
   :depends on r-rcpp: 
   :depends on r-reticulate: 
   :depends on r-rtsne: 

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

    pixi global install bioconductor-densvis

to add into an existing workspace instead, run::

    pixi add bioconductor-densvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-densvis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-densvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-densvis:<tag>

(see `bioconductor-densvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-densvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-densvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-densvis
   :alt:   (downloads)
.. |docker_bioconductor-densvis| image:: https://quay.io/repository/biocontainers/bioconductor-densvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-densvis
.. _`bioconductor-densvis/tags`: https://quay.io/repository/biocontainers/bioconductor-densvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-densvis";
        var versions = ["1.20.1","1.16.0","1.12.0","1.10.2","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-densvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-densvis/README.html