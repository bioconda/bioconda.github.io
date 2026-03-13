:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vdjdive'
.. highlight: bash

bioconductor-vdjdive
====================

.. conda:recipe:: bioconductor-vdjdive
   :replaces_section_title:
   :noindex:

   Analysis Tools for 10X V\(D\)J Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VDJdive.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vdjdive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive/meta.yaml>`_

   This package provides functions for handling and analyzing immune receptor repertoire data\, such as produced by the CellRanger V\(D\)J pipeline. This includes reading the data into R\, merging it with paired single\-cell data\, quantifying clonotype abundances\, calculating diversity metrics\, and producing common plots. It implements the E\-M Algorithm for clonotype assignment\, along with other methods\, which makes use of ambiguous cells for improved quantification.


.. conda:package:: bioconductor-vdjdive

   |downloads_bioconductor-vdjdive| |docker_bioconductor-vdjdive|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-matrix: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-vdjdive

to add into an existing workspace instead, run::

    pixi add bioconductor-vdjdive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vdjdive

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vdjdive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vdjdive:<tag>

(see `bioconductor-vdjdive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vdjdive| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vdjdive.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vdjdive
   :alt:   (downloads)
.. |docker_bioconductor-vdjdive| image:: https://quay.io/repository/biocontainers/bioconductor-vdjdive/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vdjdive
.. _`bioconductor-vdjdive/tags`: https://quay.io/repository/biocontainers/bioconductor-vdjdive?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vdjdive";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html