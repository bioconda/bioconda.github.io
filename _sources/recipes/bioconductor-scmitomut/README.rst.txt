:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmitomut'
.. highlight: bash

bioconductor-scmitomut
======================

.. conda:recipe:: bioconductor-scmitomut
   :replaces_section_title:
   :noindex:

   Single\-cell Mitochondrial Mutation Analysis Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scMitoMut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scmitomut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmitomut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmitomut/meta.yaml>`_

   This package is designed for calling lineage\-informative mitochondrial mutations using single\-cell sequencing data\, such as scRNASeq and scATACSeq \(preferably the latter due to RNA editing issues\). It includes functions for mutation calling and visualization. Mutation calling is done using beta\-binomial distribution.


.. conda:package:: bioconductor-scmitomut

   |downloads_bioconductor-scmitomut| |docker_bioconductor-scmitomut|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-readr: 
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

    pixi global install bioconductor-scmitomut

to add into an existing workspace instead, run::

    pixi add bioconductor-scmitomut

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scmitomut

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scmitomut

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scmitomut:<tag>

(see `bioconductor-scmitomut/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scmitomut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmitomut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmitomut
   :alt:   (downloads)
.. |docker_bioconductor-scmitomut| image:: https://quay.io/repository/biocontainers/bioconductor-scmitomut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmitomut
.. _`bioconductor-scmitomut/tags`: https://quay.io/repository/biocontainers/bioconductor-scmitomut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmitomut";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmitomut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmitomut/README.html