:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inetgrate'
.. highlight: bash

bioconductor-inetgrate
======================

.. conda:recipe:: bioconductor-inetgrate
   :replaces_section_title:
   :noindex:

   Integrates DNA methylation data with gene expression in a single gene network

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iNETgrate.html
   :license: GPL-3
   :recipe: /`bioconductor-inetgrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inetgrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inetgrate/meta.yaml>`_

   The iNETgrate package provides functions to build a correlation network in which nodes are genes. DNA methylation and gene expression data are integrated to define the connections between genes. This network is used to identify modules \(clusters\) of genes. The biological information in each of the resulting modules is represented by an eigengene. These biological signatures can be used as features e.g.\, for classification of patients into risk categories. The resulting biological signatures are very robust and give a holistic view of the underlying molecular changes.


.. conda:package:: bioconductor-inetgrate

   |downloads_bioconductor-inetgrate| |docker_bioconductor-inetgrate|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-pigengene: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-caret: 
   :depends on r-glmnet: 
   :depends on r-gplots: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-rfast: 
   :depends on r-survival: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-inetgrate

to add into an existing workspace instead, run::

    pixi add bioconductor-inetgrate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-inetgrate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-inetgrate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-inetgrate:<tag>

(see `bioconductor-inetgrate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-inetgrate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inetgrate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inetgrate
   :alt:   (downloads)
.. |docker_bioconductor-inetgrate| image:: https://quay.io/repository/biocontainers/bioconductor-inetgrate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inetgrate
.. _`bioconductor-inetgrate/tags`: https://quay.io/repository/biocontainers/bioconductor-inetgrate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inetgrate";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inetgrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inetgrate/README.html