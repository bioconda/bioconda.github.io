:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-outsplice'
.. highlight: bash

bioconductor-outsplice
======================

.. conda:recipe:: bioconductor-outsplice
   :replaces_section_title:
   :noindex:

   Comparison of Splicing Events between Tumor and Normal Samples

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OutSplice.html
   :license: GPL-2
   :recipe: /`bioconductor-outsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outsplice/meta.yaml>`_

   An easy to use tool that can compare splicing events in tumor and normal tissue samples using either a user generated matrix\, or data from The Cancer Genome Atlas \(TCGA\). This package generates a matrix of splicing outliers that are significantly over or underexpressed in tumors samples compared to normal denoted by chromosome location. The package also will calculate the splicing burden in each tumor and characterize the types of splicing events that occur.


.. conda:package:: bioconductor-outsplice

   |downloads_bioconductor-outsplice| |docker_bioconductor-outsplice|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-outsplice

to add into an existing workspace instead, run::

    pixi add bioconductor-outsplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-outsplice

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-outsplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-outsplice:<tag>

(see `bioconductor-outsplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-outsplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-outsplice
   :alt:   (downloads)
.. |docker_bioconductor-outsplice| image:: https://quay.io/repository/biocontainers/bioconductor-outsplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outsplice
.. _`bioconductor-outsplice/tags`: https://quay.io/repository/biocontainers/bioconductor-outsplice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-outsplice";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outsplice/README.html