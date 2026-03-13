:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multirnaflow'
.. highlight: bash

bioconductor-multirnaflow
=========================

.. conda:recipe:: bioconductor-multirnaflow
   :replaces_section_title:
   :noindex:

   An R package for integrated analysis of temporal RNA\-seq data with multiple biological conditions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MultiRNAflow.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-multirnaflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multirnaflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multirnaflow/meta.yaml>`_

   Our R package MultiRNAflow provides an easy to use unified framework allowing to automatically make both unsupervised and supervised \(DE\) analysis for datasets with an arbitrary number of biological conditions and time points.  In particular\, our code makes a deep downstream analysis of DE information\, e.g. identifying temporal patterns across biological conditions and DE genes which are specific to a biological condition for each time.


.. conda:package:: bioconductor-multirnaflow

   |downloads_bioconductor-multirnaflow| |docker_bioconductor-multirnaflow|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-mfuzz: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-factoextra: ``>=1.0.7``
   :depends on r-factominer: ``>=2.11``
   :depends on r-ggalluvial: ``>=0.12.5``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-ggplotify: ``>=0.1.2``
   :depends on r-ggrepel: ``>=0.9.5``
   :depends on r-gprofiler2: ``>=0.2.3``
   :depends on r-plot3d: ``>=1.4.1``
   :depends on r-plot3drgl: ``>=1.0.4``
   :depends on r-reshape2: ``>=1.4.4``
   :depends on r-rlang: ``>=1.1.6``
   :depends on r-upsetr: ``>=1.4.0``

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

    pixi global install bioconductor-multirnaflow

to add into an existing workspace instead, run::

    pixi add bioconductor-multirnaflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multirnaflow

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multirnaflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multirnaflow:<tag>

(see `bioconductor-multirnaflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multirnaflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multirnaflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multirnaflow
   :alt:   (downloads)
.. |docker_bioconductor-multirnaflow| image:: https://quay.io/repository/biocontainers/bioconductor-multirnaflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multirnaflow
.. _`bioconductor-multirnaflow/tags`: https://quay.io/repository/biocontainers/bioconductor-multirnaflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multirnaflow";
        var versions = ["1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multirnaflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multirnaflow/README.html