:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-depecher'
.. highlight: bash

bioconductor-depecher
=====================

.. conda:recipe:: bioconductor-depecher
   :replaces_section_title:
   :noindex:

   Determination of essential phenotypic elements of clusters in high\-dimensional entities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DepecheR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-depecher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher/meta.yaml>`_

   The purpose of this package is to identify traits in a dataset that can separate groups. This is done on two levels. First\, clustering is performed\, using an implementation of sparse K\-means. Secondly\, the generated clusters are used to predict outcomes of groups of individuals based on their distribution of observations in the different clusters. As certain clusters with separating information will be identified\, and these clusters are defined by a sparse number of variables\, this method can reduce the complexity of data\, to only emphasize the data that actually matters.


.. conda:package:: bioconductor-depecher

   |downloads_bioconductor-depecher| |docker_bioconductor-depecher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mixomics: ``>=6.34.0,<6.35.0``
   :depends on bioconductor-mixomics: ``>=6.34.0,<6.35.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-beanplot: ``>=1.2``
   :depends on r-clusterr: ``>=1.3.2``
   :depends on r-collapse: ``>=1.9.2``
   :depends on r-dosnow: ``>=1.0.16``
   :depends on r-dplyr: ``>=0.7.8``
   :depends on r-fnn: ``>=1.1.3``
   :depends on r-foreach: ``>=1.4.4``
   :depends on r-ggplot2: ``>=3.1.0``
   :depends on r-gmodels: ``>=2.18.1``
   :depends on r-gplots: ``>=3.0.1``
   :depends on r-mass: ``>=7.3.51``
   :depends on r-matrixstats: ``>=0.54.0``
   :depends on r-moments: ``>=0.14``
   :depends on r-rcpp: ``>=1.0.0``
   :depends on r-rcppeigen: 
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-robustbase: ``>=0.93.5``
   :depends on r-viridis: ``>=0.5.1``

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

    pixi global install bioconductor-depecher

to add into an existing workspace instead, run::

    pixi add bioconductor-depecher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-depecher

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-depecher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-depecher:<tag>

(see `bioconductor-depecher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-depecher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-depecher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-depecher
   :alt:   (downloads)
.. |docker_bioconductor-depecher| image:: https://quay.io/repository/biocontainers/bioconductor-depecher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-depecher
.. _`bioconductor-depecher/tags`: https://quay.io/repository/biocontainers/bioconductor-depecher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-depecher";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-depecher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-depecher/README.html