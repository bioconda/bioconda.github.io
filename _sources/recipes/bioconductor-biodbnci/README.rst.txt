:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbnci'
.. highlight: bash

bioconductor-biodbnci
=====================

.. conda:recipe:: bioconductor-biodbnci
   :replaces_section_title:
   :noindex:

   biodbNci\, a library for connecting to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/biodbNci.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbnci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci/meta.yaml>`_

   The biodbNci library is an extension of the biodb framework package. It provides access to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database. It allows to retrieve entries by their accession number\, and run specific web services.


.. conda:package:: bioconductor-biodbnci

   |downloads_bioconductor-biodbnci| |docker_bioconductor-biodbnci|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.6.0,<1.7.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-chk: 
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodbnci

   and update with::

      conda update bioconductor-biodbnci

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbnci:<tag>

   (see `bioconductor-biodbnci/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbnci| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbnci.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbnci
   :alt:   (downloads)
.. |docker_bioconductor-biodbnci| image:: https://quay.io/repository/biocontainers/bioconductor-biodbnci/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbnci
.. _`bioconductor-biodbnci/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbnci?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbnci";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html