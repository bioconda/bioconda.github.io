:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m6aboost'
.. highlight: bash

bioconductor-m6aboost
=====================

.. conda:recipe:: bioconductor-m6aboost
   :replaces_section_title:
   :noindex:

   m6Aboost

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/m6Aboost.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-m6aboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m6aboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m6aboost/meta.yaml>`_

   This package can help user to run the m6Aboost model on their own miCLIP2 data. The package includes functions to assign the read counts and get the features to run the m6Aboost model. The miCLIP2 data should be stored in a GRanges object. More details can be found in the vignette.


.. conda:package:: bioconductor-m6aboost

   |downloads_bioconductor-m6aboost| |docker_bioconductor-m6aboost|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-adabag: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m6aboost

   and update with::

      conda update bioconductor-m6aboost

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m6aboost:<tag>

   (see `bioconductor-m6aboost/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m6aboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m6aboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m6aboost
   :alt:   (downloads)
.. |docker_bioconductor-m6aboost| image:: https://quay.io/repository/biocontainers/bioconductor-m6aboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m6aboost
.. _`bioconductor-m6aboost/tags`: https://quay.io/repository/biocontainers/bioconductor-m6aboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m6aboost";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m6aboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m6aboost/README.html