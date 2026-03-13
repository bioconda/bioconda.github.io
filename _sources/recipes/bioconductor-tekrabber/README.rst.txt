:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tekrabber'
.. highlight: bash

bioconductor-tekrabber
======================

.. conda:recipe:: bioconductor-tekrabber
   :replaces_section_title:
   :noindex:

   An R package estimates the correlations of orthologs and transposable elements between two species

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TEKRABber.html
   :license: LGPL (>=3)
   :recipe: /`bioconductor-tekrabber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tekrabber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tekrabber/meta.yaml>`_

   TEKRABber is made to provide a user\-friendly pipeline for comparing orthologs and transposable elements \(TEs\) between two species. It considers the orthology confidence between two species from BioMart to normalize expression counts and detect differentially expressed orthologs\/TEs. Then it provides one to one correlation analysis for desired orthologs and TEs. There is also an app function to have a first insight on the result. Users can prepare orthologs\/TEs RNA\-seq expression data by their own preference to run TEKRABber following the data structure mentioned in the vignettes.


.. conda:package:: bioconductor-tekrabber

   |downloads_bioconductor-tekrabber| |docker_bioconductor-tekrabber|

   :versions:
      
      

      ``1.14.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends on bioconductor-apeglm: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-apeglm: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-scbn: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-scbn: ``>=1.28.0,<1.29.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-magrittr: 
   :depends on r-rcpp: ``>=1.0.7``

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

    pixi global install bioconductor-tekrabber

to add into an existing workspace instead, run::

    pixi add bioconductor-tekrabber

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tekrabber

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tekrabber

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tekrabber:<tag>

(see `bioconductor-tekrabber/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tekrabber| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tekrabber.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tekrabber
   :alt:   (downloads)
.. |docker_bioconductor-tekrabber| image:: https://quay.io/repository/biocontainers/bioconductor-tekrabber/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tekrabber
.. _`bioconductor-tekrabber/tags`: https://quay.io/repository/biocontainers/bioconductor-tekrabber?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tekrabber";
        var versions = ["1.14.1","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tekrabber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tekrabber/README.html