:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbea'
.. highlight: bash

bioconductor-cbea
=================

.. conda:recipe:: bioconductor-cbea
   :replaces_section_title:
   :noindex:

   Competitive Balances for Taxonomic Enrichment Analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CBEA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cbea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbea/meta.yaml>`_

   This package implements CBEA\, a method to perform set\-based analysis for microbiome relative abundance data. This approach constructs a competitive balance between taxa within the set and remainder taxa per sample. More details can be found in the Nguyen et al. 2021\+ manuscript. Additionally\, this package adds support functions to help users perform taxa\-set enrichment analyses using existing gene set analysis methods. In the future we hope to also provide curated knowledge driven taxa sets.


.. conda:package:: bioconductor-cbea

   |downloads_bioconductor-cbea| |docker_bioconductor-cbea|

   :versions:
      
      

      ``1.6.0-0``,  ``1.3.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-biocset: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-biocset: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-fitdistrplus: 
   :depends on r-generics: 
   :depends on r-glue: 
   :depends on r-goftest: 
   :depends on r-lmom: 
   :depends on r-magrittr: 
   :depends on r-mixtools: 
   :depends on r-rcpp: ``>=1.0.7``
   :depends on r-rlang: 
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

    pixi global install bioconductor-cbea

to add into an existing workspace instead, run::

    pixi add bioconductor-cbea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cbea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cbea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cbea:<tag>

(see `bioconductor-cbea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cbea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbea
   :alt:   (downloads)
.. |docker_bioconductor-cbea| image:: https://quay.io/repository/biocontainers/bioconductor-cbea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbea
.. _`bioconductor-cbea/tags`: https://quay.io/repository/biocontainers/bioconductor-cbea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbea";
        var versions = ["1.6.0","1.3.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbea/README.html