:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensembldb'
.. highlight: bash

bioconductor-ensembldb
======================

.. conda:recipe:: bioconductor-ensembldb
   :replaces_section_title:
   :noindex:

   Utilities to create and use Ensembl\-based annotation databases

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ensembldb.html
   :license: LGPL
   :recipe: /`bioconductor-ensembldb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensembldb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensembldb/meta.yaml>`_
   :links: biotools: :biotools:`ensembldb`, doi: :doi:`10.1038/nmeth.3252`

   The package provides functions to create and use transcript centric annotation databases\/packages. The annotation for the databases are directly fetched from Ensembl using their Perl API. The functionality and data is similar to that of the TxDb packages from the GenomicFeatures package\, but\, in addition to retrieve all gene\/transcript models and annotations from the database\, ensembldb provides a filter framework allowing to retrieve annotations for specific entries like genes encoded on a chromosome region or transcript models of lincRNA genes. EnsDb databases built with ensembldb contain also protein annotations and mappings between proteins and their encoding transcripts. Finally\, ensembldb provides functions to map between genomic\, transcript and protein coordinates.


.. conda:package:: bioconductor-ensembldb

   |downloads_bioconductor-ensembldb| |docker_bioconductor-ensembldb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.1-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.1-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.6.3-0</code>,  <code>2.4.1-0</code>,  </span></summary>
      

      ``2.18.1-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.1-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.3-0``,  ``2.4.1-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.0.4-0``,  ``1.6.2-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationfilter: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-protgenerics: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-rsqlite: ``>=1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ensembldb

   and update with::

      conda update bioconductor-ensembldb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensembldb:<tag>

   (see `bioconductor-ensembldb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensembldb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensembldb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensembldb
   :alt:   (downloads)
.. |docker_bioconductor-ensembldb| image:: https://quay.io/repository/biocontainers/bioconductor-ensembldb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensembldb
.. _`bioconductor-ensembldb/tags`: https://quay.io/repository/biocontainers/bioconductor-ensembldb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensembldb";
        var versions = ["2.18.1","2.16.0","2.14.0","2.14.0","2.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html