:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sccb2'
.. highlight: bash

bioconductor-sccb2
==================

.. conda:recipe:: bioconductor-sccb2
   :replaces_section_title:
   :noindex:

   CB2 improves power of cell detection in droplet\-based single\-cell RNA sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scCB2.html
   :license: GPL-3
   :recipe: /`bioconductor-sccb2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2/meta.yaml>`_

   scCB2 is an R package implementing CB2 for distinguishing real cells from empty droplets in droplet\-based single cell RNA\-seq experiments \(especially for 10x Chromium\). It is based on clustering similar barcodes and calculating Monte\-Carlo p\-value for each cluster to test against background distribution. This cluster\-level test outperforms single\-barcode\-level tests in dealing with low count barcodes and homogeneous sequencing library\, while keeping FDR well controlled.


.. conda:package:: bioconductor-sccb2

   |downloads_bioconductor-sccb2| |docker_bioconductor-sccb2|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-dropletutils: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-iterators: 
   :depends on r-matrix: 
   :depends on r-seurat: 

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

    pixi global install bioconductor-sccb2

to add into an existing workspace instead, run::

    pixi add bioconductor-sccb2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sccb2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sccb2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sccb2:<tag>

(see `bioconductor-sccb2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sccb2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sccb2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sccb2
   :alt:   (downloads)
.. |docker_bioconductor-sccb2| image:: https://quay.io/repository/biocontainers/bioconductor-sccb2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sccb2
.. _`bioconductor-sccb2/tags`: https://quay.io/repository/biocontainers/bioconductor-sccb2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sccb2";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sccb2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sccb2/README.html