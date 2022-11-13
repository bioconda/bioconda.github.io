:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genproseq'
.. highlight: bash

bioconductor-genproseq
======================

.. conda:recipe:: bioconductor-genproseq
   :replaces_section_title:
   :noindex:

   Generating Protein Sequences with Deep Generative Models

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/GenProSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genproseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genproseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genproseq/meta.yaml>`_

   Generative modeling for protein engineering is key to solving fundamental problems in synthetic biology\, medicine\, and material science. Machine learning has enabled us to generate useful protein sequences on a variety of scales. Generative models are machine learning methods which seek to model the distribution underlying the data\, allowing for the generation of novel samples with similar properties to those on which the model was trained. Generative models of proteins can learn biologically meaningful representations helpful for a variety of downstream tasks. Furthermore\, they can learn to generate protein sequences that have not been observed before and to assign higher probability to protein sequences that satisfy desired criteria. In this package\, common deep generative models for protein sequences\, such as variational autoencoder \(VAE\)\, generative adversarial networks \(GAN\)\, and autoregressive models are available. In the VAE and GAN\, the Word2vec is used for embedding. The transformer encoder is applied to protein sequences for the autoregressive model.


.. conda:package:: bioconductor-genproseq

   |downloads_bioconductor-genproseq| |docker_bioconductor-genproseq|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-deeppincs: ``>=1.6.0,<1.7.0``
   :depends bioconductor-ttgsea: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-catencoders: 
   :depends r-keras: 
   :depends r-mclust: 
   :depends r-reticulate: 
   :depends r-tensorflow: 
   :depends r-word2vec: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genproseq

   and update with::

      conda update bioconductor-genproseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genproseq:<tag>

   (see `bioconductor-genproseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genproseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genproseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genproseq
   :alt:   (downloads)
.. |docker_bioconductor-genproseq| image:: https://quay.io/repository/biocontainers/bioconductor-genproseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genproseq
.. _`bioconductor-genproseq/tags`: https://quay.io/repository/biocontainers/bioconductor-genproseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genproseq";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genproseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genproseq/README.html