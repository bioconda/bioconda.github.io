:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgnifyr'
.. highlight: bash

bioconductor-mgnifyr
====================

.. conda:recipe:: bioconductor-mgnifyr
   :replaces_section_title:
   :noindex:

   R interface to EBI MGnify metagenomics resource

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MGnifyR.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-mgnifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgnifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgnifyr/meta.yaml>`_

   Utility package to facilitate integration and analysis of EBI MGnify data in R. The package can be used to import microbial data for instance into TreeSummarizedExperiment \(TreeSE\). In TreeSE format\, the data is directly compatible with miaverse framework.


.. conda:package:: bioconductor-mgnifyr

   |downloads_bioconductor-mgnifyr| |docker_bioconductor-mgnifyr|

   :versions:
      
      

      ``1.6.1-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-mia: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-httr: 
   :depends on r-plyr: 
   :depends on r-reshape2: 
   :depends on r-urltools: 

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

    pixi global install bioconductor-mgnifyr

to add into an existing workspace instead, run::

    pixi add bioconductor-mgnifyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mgnifyr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mgnifyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mgnifyr:<tag>

(see `bioconductor-mgnifyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mgnifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgnifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgnifyr
   :alt:   (downloads)
.. |docker_bioconductor-mgnifyr| image:: https://quay.io/repository/biocontainers/bioconductor-mgnifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgnifyr
.. _`bioconductor-mgnifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-mgnifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgnifyr";
        var versions = ["1.6.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgnifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgnifyr/README.html