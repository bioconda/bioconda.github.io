:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vaexprs'
.. highlight: bash

bioconductor-vaexprs
====================

.. conda:recipe:: bioconductor-vaexprs
   :replaces_section_title:
   :noindex:

   Generating Samples of Gene Expression Data with Variational Autoencoders

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VAExprs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vaexprs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vaexprs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vaexprs/meta.yaml>`_

   A fundamental problem in biomedical research is the low number of observations\, mostly due to a lack of available biosamples\, prohibitive costs\, or ethical reasons. By augmenting a few real observations with artificially generated samples\, their analysis could lead to more robust and higher reproducible. One possible solution to the problem is the use of generative models\, which are statistical models of data that attempt to capture the entire probability distribution from the observations. Using the variational autoencoder \(VAE\)\, a well\-known deep generative model\, this package is aimed to generate samples with gene expression data\, especially for single\-cell RNA\-seq data. Furthermore\, the VAE can use conditioning to produce specific cell types or subpopulations. The conditional VAE \(CVAE\) allows us to create targeted samples rather than completely random ones.


.. conda:package:: bioconductor-vaexprs

   |downloads_bioconductor-vaexprs| |docker_bioconductor-vaexprs|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deeppincs: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-catencoders: 
   :depends on r-diagrammer: 
   :depends on r-keras: 
   :depends on r-mclust: 
   :depends on r-purrr: 
   :depends on r-tensorflow: 

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

    pixi global install bioconductor-vaexprs

to add into an existing workspace instead, run::

    pixi add bioconductor-vaexprs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vaexprs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vaexprs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vaexprs:<tag>

(see `bioconductor-vaexprs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vaexprs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vaexprs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vaexprs
   :alt:   (downloads)
.. |docker_bioconductor-vaexprs| image:: https://quay.io/repository/biocontainers/bioconductor-vaexprs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vaexprs
.. _`bioconductor-vaexprs/tags`: https://quay.io/repository/biocontainers/bioconductor-vaexprs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vaexprs";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vaexprs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vaexprs/README.html