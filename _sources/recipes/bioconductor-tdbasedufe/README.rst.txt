:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdbasedufe'
.. highlight: bash

bioconductor-tdbasedufe
=======================

.. conda:recipe:: bioconductor-tdbasedufe
   :replaces_section_title:
   :noindex:

   Tensor Decomposition Based Unsupervised Feature Extraction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TDbasedUFE.html
   :license: GPL-3
   :recipe: /`bioconductor-tdbasedufe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufe/meta.yaml>`_

   This is a comprehensive package to perform Tensor decomposition based unsupervised feature extraction. It can perform unsupervised feature extraction. It uses tensor decomposition. It is applicable to gene expression\, DNA methylation\, and histone modification etc. It can perform multiomics analysis. It is also potentially applicable to single cell omics data sets.


.. conda:package:: bioconductor-tdbasedufe

   |downloads_bioconductor-tdbasedufe| |docker_bioconductor-tdbasedufe|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-mofadata: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-tximport: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-tximportdata: ``>=1.38.0,<1.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: 
   :depends on r-rtensor: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-tdbasedufe

to add into an existing workspace instead, run::

    pixi add bioconductor-tdbasedufe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tdbasedufe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tdbasedufe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tdbasedufe:<tag>

(see `bioconductor-tdbasedufe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tdbasedufe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdbasedufe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdbasedufe
   :alt:   (downloads)
.. |docker_bioconductor-tdbasedufe| image:: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe
.. _`bioconductor-tdbasedufe/tags`: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdbasedufe";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdbasedufe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdbasedufe/README.html