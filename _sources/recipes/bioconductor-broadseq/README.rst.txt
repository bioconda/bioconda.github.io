:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-broadseq'
.. highlight: bash

bioconductor-broadseq
=====================

.. conda:recipe:: bioconductor-broadseq
   :replaces_section_title:
   :noindex:

   broadSeq \: for streamlined exploration of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/broadSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-broadseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-broadseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-broadseq/meta.yaml>`_

   This package helps user to do easily RNA\-seq data analysis with multiple methods \(usually which needs many different input formats\). Here the user will provid the expression data as a SummarizedExperiment object and will get results from different methods. It will help user to quickly evaluate different methods.


.. conda:package:: bioconductor-broadseq

   |downloads_bioconductor-broadseq| |docker_bioconductor-broadseq|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends on bioconductor-delocal: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-ebseq: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-noiseq: ``>=2.50.0,<2.51.0``
   :depends on bioconductor-sechm: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-forcats: ``>=1.0.0``
   :depends on r-ggplot2: 
   :depends on r-ggplotify: 
   :depends on r-ggpubr: 
   :depends on r-pheatmap: 
   :depends on r-plyr: 
   :depends on r-purrr: ``>=0.3.5``
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

    pixi global install bioconductor-broadseq

to add into an existing workspace instead, run::

    pixi add bioconductor-broadseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-broadseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-broadseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-broadseq:<tag>

(see `bioconductor-broadseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-broadseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-broadseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-broadseq
   :alt:   (downloads)
.. |docker_bioconductor-broadseq| image:: https://quay.io/repository/biocontainers/bioconductor-broadseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-broadseq
.. _`bioconductor-broadseq/tags`: https://quay.io/repository/biocontainers/bioconductor-broadseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-broadseq";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-broadseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-broadseq/README.html