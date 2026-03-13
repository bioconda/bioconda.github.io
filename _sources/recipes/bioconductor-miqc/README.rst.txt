:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miqc'
.. highlight: bash

bioconductor-miqc
=================

.. conda:recipe:: bioconductor-miqc
   :replaces_section_title:
   :noindex:

   Flexible\, probabilistic metrics for quality control of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miQC.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-miqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miqc/meta.yaml>`_

   Single\-cell RNA\-sequencing \(scRNA\-seq\) has made it possible to profile gene expression in tissues at high resolution.  An important preprocessing step prior to performing downstream analyses is to identify and remove cells with poor or degraded sample quality using quality control \(QC\) metrics.  Two widely used QC metrics to identify a ‘low\-quality’ cell are \(i\) if the cell includes a high proportion of reads that map to mitochondrial DNA encoded genes \(mtDNA\) and \(ii\) if a small number of genes are detected. miQC is data\-driven QC metric that jointly models both the proportion of reads mapping to mtDNA and the number of detected genes with mixture models in a probabilistic framework to predict the low\-quality cells in a given dataset.


.. conda:package:: bioconductor-miqc

   |downloads_bioconductor-miqc| |docker_bioconductor-miqc|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-flexmix: 
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-miqc

to add into an existing workspace instead, run::

    pixi add bioconductor-miqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-miqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-miqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-miqc:<tag>

(see `bioconductor-miqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-miqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miqc
   :alt:   (downloads)
.. |docker_bioconductor-miqc| image:: https://quay.io/repository/biocontainers/bioconductor-miqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miqc
.. _`bioconductor-miqc/tags`: https://quay.io/repository/biocontainers/bioconductor-miqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miqc";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miqc/README.html