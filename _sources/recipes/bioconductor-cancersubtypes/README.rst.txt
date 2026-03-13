:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancersubtypes'
.. highlight: bash

bioconductor-cancersubtypes
===========================

.. conda:recipe:: bioconductor-cancersubtypes
   :replaces_section_title:
   :noindex:

   Cancer subtypes identification\, validation and visualization based on multiple genomic data sets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CancerSubtypes.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancersubtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes/meta.yaml>`_
   :links: biotools: :biotools:`cancersubtypes`, doi: :doi:`10.1038/nmeth.3252`

   CancerSubtypes integrates the current common computational biology methods for cancer subtypes identification and provides a standardized framework for cancer subtype analysis based multi\-omics data\, such as gene expression\, miRNA expression\, DNA methylation and others.


.. conda:package:: bioconductor-cancersubtypes

   |downloads_bioconductor-cancersubtypes| |docker_bioconductor-cancersubtypes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cluster: 
   :depends on r-nmf: 
   :depends on r-sigclust: 
   :depends on r-survival: 

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

    pixi global install bioconductor-cancersubtypes

to add into an existing workspace instead, run::

    pixi add bioconductor-cancersubtypes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cancersubtypes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cancersubtypes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cancersubtypes:<tag>

(see `bioconductor-cancersubtypes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cancersubtypes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancersubtypes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancersubtypes
   :alt:   (downloads)
.. |docker_bioconductor-cancersubtypes| image:: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes
.. _`bioconductor-cancersubtypes/tags`: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancersubtypes";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html