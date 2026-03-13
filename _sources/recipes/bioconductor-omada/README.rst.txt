:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omada'
.. highlight: bash

bioconductor-omada
==================

.. conda:recipe:: bioconductor-omada
   :replaces_section_title:
   :noindex:

   Machine learning tools for automated transcriptome clustering analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omada.html
   :license: GPL-3
   :recipe: /`bioconductor-omada <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada/meta.yaml>`_

   Symptomatic heterogeneity in complex diseases reveals differences in molecular states that need to be investigated. However\, selecting the numerous parameters of an exploratory clustering analysis in RNA profiling studies requires deep understanding of machine learning and extensive computational experimentation. Tools that assist with such decisions without prior field knowledge are nonexistent and further gene association analyses need to be performed independently. We have developed a suite of tools to automate these processes and make robust unsupervised clustering of transcriptomic data more accessible through automated machine learning based functions. The efficiency of each tool was tested with four datasets characterised by different expression signal strengths. Our toolkit’s decisions reflected the real number of stable partitions in datasets where the subgroups are discernible. Even in datasets with less clear biological distinctions\, stable subgroups with different expression profiles and clinical associations were found.


.. conda:package:: bioconductor-omada

   |downloads_bioconductor-omada| |docker_bioconductor-omada|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clvalid: ``>=0.7``
   :depends on r-dicer: ``>=0.6.0``
   :depends on r-dplyr: ``>=1.0.7``
   :depends on r-fpc: ``>=2.2-9``
   :depends on r-genieclust: ``>=1.1.3``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-glmnet: ``>=4.1.3``
   :depends on r-kernlab: ``>=0.9-29``
   :depends on r-pdfcluster: ``>=1.0-3``
   :depends on r-rcpp: ``>=1.0.7``
   :depends on r-reshape: ``>=0.8.8``

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

    pixi global install bioconductor-omada

to add into an existing workspace instead, run::

    pixi add bioconductor-omada

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omada

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omada

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omada:<tag>

(see `bioconductor-omada/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omada| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omada.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omada
   :alt:   (downloads)
.. |docker_bioconductor-omada| image:: https://quay.io/repository/biocontainers/bioconductor-omada/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omada
.. _`bioconductor-omada/tags`: https://quay.io/repository/biocontainers/bioconductor-omada?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omada";
        var versions = ["1.12.0","1.8.0","1.4.0","1.4.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omada/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omada/README.html