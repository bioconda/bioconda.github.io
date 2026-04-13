:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busseq'
.. highlight: bash

bioconductor-busseq
===================

.. conda:recipe:: bioconductor-busseq
   :replaces_section_title:
   :noindex:

   Batch Effect Correction with Unknow Subtypes for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BUSseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-busseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq/meta.yaml>`_

   BUSseq R package fits an interpretable Bayesian hierarchical model\-\-\-the Batch Effects Correction with Unknown Subtypes for scRNA seq Data \(BUSseq\)\-\-\-to correct batch effects in the presence of unknown cell types. BUSseq is able to simultaneously correct batch effects\, clusters cell types\, and takes care of the count data nature\, the overdispersion\, the dropout events\, and the cell\-specific sequencing depth of scRNA\-seq data. After correcting the batch effects with BUSseq\, the corrected value can be used for downstream analysis as if all cells were sequenced in a single batch. BUSseq can integrate read count matrices obtained from different scRNA\-seq platforms and allow cell types to be measured in some but not all of the batches as long as the experimental design fulfills the conditions listed in our manuscript.


.. conda:package:: bioconductor-busseq

   |downloads_bioconductor-busseq| |docker_bioconductor-busseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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
   :depends on r-gplots: 

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

    pixi global install bioconductor-busseq

to add into an existing workspace instead, run::

    pixi add bioconductor-busseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-busseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-busseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-busseq:<tag>

(see `bioconductor-busseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-busseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busseq
   :alt:   (downloads)
.. |docker_bioconductor-busseq| image:: https://quay.io/repository/biocontainers/bioconductor-busseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busseq
.. _`bioconductor-busseq/tags`: https://quay.io/repository/biocontainers/bioconductor-busseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-busseq";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busseq/README.html