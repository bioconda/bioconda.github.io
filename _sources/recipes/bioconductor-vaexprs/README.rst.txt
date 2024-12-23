:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vaexprs'
.. highlight: bash

bioconductor-vaexprs
====================

.. conda:recipe:: bioconductor-vaexprs
   :replaces_section_title:
   :noindex:

   Generating Samples of Gene Expression Data with Variational Autoencoders

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/VAExprs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vaexprs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vaexprs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vaexprs/meta.yaml>`_

   A fundamental problem in biomedical research is the low number of observations\, mostly due to a lack of available biosamples\, prohibitive costs\, or ethical reasons. By augmenting a few real observations with artificially generated samples\, their analysis could lead to more robust and higher reproducible. One possible solution to the problem is the use of generative models\, which are statistical models of data that attempt to capture the entire probability distribution from the observations. Using the variational autoencoder \(VAE\)\, a well\-known deep generative model\, this package is aimed to generate samples with gene expression data\, especially for single\-cell RNA\-seq data. Furthermore\, the VAE can use conditioning to produce specific cell types or subpopulations. The conditional VAE \(CVAE\) allows us to create targeted samples rather than completely random ones.


.. conda:package:: bioconductor-vaexprs

   |downloads_bioconductor-vaexprs| |docker_bioconductor-vaexprs|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deeppincs: ``>=1.14.0,<1.15.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-catencoders: 
   :depends r-diagrammer: 
   :depends r-keras: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-tensorflow: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-vaexprs

   and update with::

      mamba update bioconductor-vaexprs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vaexprs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vaexprs:<tag>

   (see `bioconductor-vaexprs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vaexprs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vaexprs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vaexprs
   :alt:   (downloads)
.. |docker_bioconductor-vaexprs| image:: https://quay.io/repository/biocontainers/bioconductor-vaexprs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vaexprs
.. _`bioconductor-vaexprs/tags`: https://quay.io/repository/biocontainers/bioconductor-vaexprs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vaexprs";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
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