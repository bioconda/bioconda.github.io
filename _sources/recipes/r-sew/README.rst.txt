:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sew'
.. highlight: bash

r-sew
=====

.. conda:recipe:: r-sew
   :replaces_section_title:
   :noindex:

   SEW

   :homepage: https://github.com/Genomicsplc/SEW
   :license: BSD / BSD3
   :recipe: /`r-sew <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sew>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sew/meta.yaml>`_

   


.. conda:package:: r-sew

   |downloads_r-sew| |docker_r-sew|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends coreutils: 
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-stitch: ``>=1.6.6``
   :depends r-testthat: ``>=2.0.0``
   :depends rsync: 
   :depends samtools: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sew

   and update with::

      conda update r-sew

   or use the docker container::

      docker pull quay.io/biocontainers/r-sew:<tag>

   (see `r-sew/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sew| image:: https://img.shields.io/conda/dn/bioconda/r-sew.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sew
   :alt:   (downloads)
.. |docker_r-sew| image:: https://quay.io/repository/biocontainers/r-sew/status
   :target: https://quay.io/repository/biocontainers/r-sew
.. _`r-sew/tags`: https://quay.io/repository/biocontainers/r-sew?tab=tags


.. raw:: html

    <script>
        var package = "r-sew";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sew/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sew/README.html