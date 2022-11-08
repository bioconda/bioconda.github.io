:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trnascanimport'
.. highlight: bash

bioconductor-trnascanimport
===========================

.. conda:recipe:: bioconductor-trnascanimport
   :replaces_section_title:
   :noindex:

   Importing a tRNAscan\-SE result file as GRanges object

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/tRNAscanImport.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trnascanimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport/meta.yaml>`_

   The package imports the result of tRNAscan\-SE as a GRanges object.


.. conda:package:: bioconductor-trnascanimport

   |downloads_bioconductor-trnascanimport| |docker_bioconductor-trnascanimport|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-structstrings: ``>=1.14.0,<1.15.0``
   :depends bioconductor-trna: ``>=1.16.0,<1.17.0``
   :depends bioconductor-xvector: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trnascanimport

   and update with::

      conda update bioconductor-trnascanimport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trnascanimport:<tag>

   (see `bioconductor-trnascanimport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trnascanimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trnascanimport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trnascanimport
   :alt:   (downloads)
.. |docker_bioconductor-trnascanimport| image:: https://quay.io/repository/biocontainers/bioconductor-trnascanimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trnascanimport
.. _`bioconductor-trnascanimport/tags`: https://quay.io/repository/biocontainers/bioconductor-trnascanimport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trnascanimport";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html