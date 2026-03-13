:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hippo'
.. highlight: bash

bioconductor-hippo
==================

.. conda:recipe:: bioconductor-hippo
   :replaces_section_title:
   :noindex:

   Heterogeneity\-Induced Pre\-Processing tOol

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HIPPO.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-hippo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hippo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hippo/meta.yaml>`_

   For scRNA\-seq data\, it selects features and clusters the cells simultaneously for single\-cell UMI data. It has a novel feature selection method using the zero inflation instead of gene variance\, and computationally faster than other existing methods since it only relies on PCA\+Kmeans rather than graph\-clustering or consensus clustering.


.. conda:package:: bioconductor-hippo

   |downloads_bioconductor-hippo| |docker_bioconductor-hippo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-irlba: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rtsne: 
   :depends on r-umap: 

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

    pixi global install bioconductor-hippo

to add into an existing workspace instead, run::

    pixi add bioconductor-hippo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hippo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hippo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hippo:<tag>

(see `bioconductor-hippo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hippo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hippo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hippo
   :alt:   (downloads)
.. |docker_bioconductor-hippo| image:: https://quay.io/repository/biocontainers/bioconductor-hippo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hippo
.. _`bioconductor-hippo/tags`: https://quay.io/repository/biocontainers/bioconductor-hippo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hippo";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hippo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hippo/README.html