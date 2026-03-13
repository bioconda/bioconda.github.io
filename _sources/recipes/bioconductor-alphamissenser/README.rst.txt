:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphamissenser'
.. highlight: bash

bioconductor-alphamissenser
===========================

.. conda:recipe:: bioconductor-alphamissenser
   :replaces_section_title:
   :noindex:

   Accessing AlphaMissense Data Resources in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AlphaMissenseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-alphamissenser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissenser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissenser/meta.yaml>`_

   The AlphaMissense publication \<https\:\/\/www.science.org\/doi\/epdf\/10.1126\/science.adg7492\> outlines how a variant of AlphaFold \/ DeepMind was used to predict missense variant pathogenicity. Supporting data on Zenodo \<https\:\/\/zenodo.org\/record\/10813168\> include\, for instance\, 71M variants across hg19 and hg38 genome builds. The \'AlphaMissenseR\' package allows ready access to the data\, downloading individual files to DuckDB databases for exploration and integration into \*R\* and \*Bioconductor\* workflows.


.. conda:package:: bioconductor-alphamissenser

   |downloads_bioconductor-alphamissenser| |docker_bioconductor-alphamissenser|

   :versions:
      
      

      ``1.6.1-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-dbi: 
   :depends on r-dplyr: 
   :depends on r-duckdb: ``>=1.3.1``
   :depends on r-ggplot2: 
   :depends on r-memoise: 
   :depends on r-rjsoncons: ``>=1.0.1``
   :depends on r-rlang: 
   :depends on r-spdl: 
   :depends on r-whisker: 

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

    pixi global install bioconductor-alphamissenser

to add into an existing workspace instead, run::

    pixi add bioconductor-alphamissenser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alphamissenser

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alphamissenser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alphamissenser:<tag>

(see `bioconductor-alphamissenser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alphamissenser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphamissenser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphamissenser
   :alt:   (downloads)
.. |docker_bioconductor-alphamissenser| image:: https://quay.io/repository/biocontainers/bioconductor-alphamissenser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphamissenser
.. _`bioconductor-alphamissenser/tags`: https://quay.io/repository/biocontainers/bioconductor-alphamissenser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphamissenser";
        var versions = ["1.6.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphamissenser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphamissenser/README.html