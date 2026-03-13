:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aggregatebiovar'
.. highlight: bash

bioconductor-aggregatebiovar
============================

.. conda:recipe:: bioconductor-aggregatebiovar
   :replaces_section_title:
   :noindex:

   Differential Gene Expression Analysis for Multi\-subject scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/aggregateBioVar.html
   :license: GPL-3
   :recipe: /`bioconductor-aggregatebiovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar/meta.yaml>`_

   For single cell RNA\-seq data collected from more than one subject \(e.g. biological sample or technical replicates\)\, this package contains tools to summarize single cell gene expression profiles at the level of subject. A SingleCellExperiment object is taken as input and converted to a list of SummarizedExperiment objects\, where each list element corresponds to an assigned cell type. The SummarizedExperiment objects contain aggregate gene\-by\-subject count matrices and inter\-subject column metadata for individual subjects that can be processed using downstream bulk RNA\-seq tools.


.. conda:package:: bioconductor-aggregatebiovar

   |downloads_bioconductor-aggregatebiovar| |docker_bioconductor-aggregatebiovar|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-3``,  ``1.0.0-2``

      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-rlang: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-aggregatebiovar

to add into an existing workspace instead, run::

    pixi add bioconductor-aggregatebiovar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-aggregatebiovar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-aggregatebiovar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-aggregatebiovar:<tag>

(see `bioconductor-aggregatebiovar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-aggregatebiovar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aggregatebiovar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aggregatebiovar
   :alt:   (downloads)
.. |docker_bioconductor-aggregatebiovar| image:: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar
.. _`bioconductor-aggregatebiovar/tags`: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aggregatebiovar";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html