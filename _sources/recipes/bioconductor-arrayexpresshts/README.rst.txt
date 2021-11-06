:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayexpresshts'
.. highlight: bash

bioconductor-arrayexpresshts
============================

.. conda:recipe:: bioconductor-arrayexpresshts
   :replaces_section_title:
   :noindex:

   ArrayExpress High Throughput Sequencing Processing Pipeline

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ArrayExpressHTS.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-arrayexpresshts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts/meta.yaml>`_

   RNA\-Seq processing pipeline for public ArrayExpress experiments or local datasets


.. conda:package:: bioconductor-arrayexpresshts

   |downloads_bioconductor-arrayexpresshts| |docker_bioconductor-arrayexpresshts|

   :versions:
      
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.36.0-0``,  ``1.34.2-0``,  ``1.32.1-0``,  ``1.32.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-shortread: ``>=1.52.0,<1.53.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bitops: 
   :depends r-hmisc: 
   :depends r-r2html: 
   :depends r-rcolorbrewer: 
   :depends r-rjava: 
   :depends r-sampling: 
   :depends r-sendmailr: 
   :depends r-snow: 
   :depends r-svmisc: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayexpresshts

   and update with::

      conda update bioconductor-arrayexpresshts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayexpresshts:<tag>

   (see `bioconductor-arrayexpresshts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayexpresshts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayexpresshts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayexpresshts
   :alt:   (downloads)
.. |docker_bioconductor-arrayexpresshts| image:: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts
.. _`bioconductor-arrayexpresshts/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayexpresshts";
        var versions = ["1.44.0","1.42.0","1.36.0","1.34.2","1.32.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html