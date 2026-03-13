:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spicyr'
.. highlight: bash

bioconductor-spicyr
===================

.. conda:recipe:: bioconductor-spicyr
   :replaces_section_title:
   :noindex:

   Spatial analysis of in situ cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spicyR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-spicyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr/meta.yaml>`_

   The spicyR package provides a framework for performing inference on changes in spatial relationships between pairs of cell types for cell\-resolution spatial omics technologies. spicyR consists of three primary steps\: \(i\) summarizing the degree of spatial localization between pairs of cell types for each image\; \(ii\) modelling the variability in localization summary statistics as a function of cell counts and \(iii\) testing for changes in spatial localizations associated with a response variable.


.. conda:package:: bioconductor-spicyr

   |downloads_bioconductor-spicyr| |docker_bioconductor-spicyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.2-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.2-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-classifyr: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-simpleseg: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-concaveman: 
   :depends on r-coxme: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-ggh4x: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-lifecycle: 
   :depends on r-lmertest: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-scam: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
   :depends on r-survival: 
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

    pixi global install bioconductor-spicyr

to add into an existing workspace instead, run::

    pixi add bioconductor-spicyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spicyr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spicyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spicyr:<tag>

(see `bioconductor-spicyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spicyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spicyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spicyr
   :alt:   (downloads)
.. |docker_bioconductor-spicyr| image:: https://quay.io/repository/biocontainers/bioconductor-spicyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spicyr
.. _`bioconductor-spicyr/tags`: https://quay.io/repository/biocontainers/bioconductor-spicyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spicyr";
        var versions = ["1.22.0","1.18.0","1.14.2","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spicyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spicyr/README.html