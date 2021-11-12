:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilda'
.. highlight: bash

bioconductor-hilda
==================

.. conda:recipe:: bioconductor-hilda
   :replaces_section_title:
   :noindex:

   Conducting statistical inference on comparing the mutational exposures of mutational signatures by using hierarchical latent Dirichlet allocation

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/HiLDA.html
   :license: GPL-3
   :recipe: /`bioconductor-hilda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilda/meta.yaml>`_

   A package built under the Bayesian framework of applying hierarchical latent Dirichlet allocation. It statistically tests whether the mutational exposures of mutational signatures \(Shiraishi\-model signatures\) are different between two groups. The package also provides inference and visualization.


.. conda:package:: bioconductor-hilda

   |downloads_bioconductor-hilda| |docker_bioconductor-hilda|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-xvector: ``>=0.34.0,<0.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-r2jags: 
   :depends r-rcpp: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hilda

   and update with::

      conda update bioconductor-hilda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilda:<tag>

   (see `bioconductor-hilda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilda
   :alt:   (downloads)
.. |docker_bioconductor-hilda| image:: https://quay.io/repository/biocontainers/bioconductor-hilda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilda
.. _`bioconductor-hilda/tags`: https://quay.io/repository/biocontainers/bioconductor-hilda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilda";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilda/README.html