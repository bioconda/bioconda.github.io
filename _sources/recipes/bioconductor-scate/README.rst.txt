:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scate'
.. highlight: bash

bioconductor-scate
==================

.. conda:recipe:: bioconductor-scate
   :replaces_section_title:
   :noindex:

   SCATE\: Single\-cell ATAC\-seq Signal Extraction and Enhancement

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCATE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate/meta.yaml>`_

   SCATE is a software tool for extracting and enhancing the sparse and discrete Single\-cell ATAC\-seq Signal. Single\-cell sequencing assay for transposase\-accessible chromatin \(scATAC\-seq\) is the state\-of\-the\-art technology for analyzing genome\-wide regulatory landscapes in single cells. Single\-cell ATAC\-seq data are sparse and noisy\, and analyzing such data is challenging. Existing computational methods cannot accurately reconstruct activities of individual cis\-regulatory elements \(CREs\) in individual cells or rare cell subpopulations. SCATE was developed to adaptively integrate information from co\-activated CREs\, similar cells\, and publicly available regulome data and substantially increase the accuracy for estimating activities of individual CREs. We demonstrate that SCATE can be used to better reconstruct the regulatory landscape of a heterogeneous sample.


.. conda:package:: bioconductor-scate

   |downloads_bioconductor-scate| |docker_bioconductor-scate|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-scatedata: ``>=1.10.0,<1.11.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-mclust: 
   :depends on r-rtsne: 
   :depends on r-splines2: 
   :depends on r-xgboost: 

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

    pixi global install bioconductor-scate

to add into an existing workspace instead, run::

    pixi add bioconductor-scate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scate:<tag>

(see `bioconductor-scate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scate
   :alt:   (downloads)
.. |docker_bioconductor-scate| image:: https://quay.io/repository/biocontainers/bioconductor-scate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scate
.. _`bioconductor-scate/tags`: https://quay.io/repository/biocontainers/bioconductor-scate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scate";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scate/README.html