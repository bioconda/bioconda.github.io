:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationhubdata'
.. highlight: bash

bioconductor-annotationhubdata
==============================

.. conda:recipe:: bioconductor-annotationhubdata
   :replaces_section_title:
   :noindex:

   Transform public data resources into Bioconductor Data Structures

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/AnnotationHubData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationhubdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhubdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhubdata/meta.yaml>`_
   :links: biotools: :biotools:`annotationhubdata`, doi: :doi:`10.1038/nmeth.3252`

   These recipes convert a wide variety and a growing number of public bioinformatic data sets into easily\-used standard Bioconductor data structures.


.. conda:package:: bioconductor-annotationhubdata

   |downloads_bioconductor-annotationhubdata| |docker_bioconductor-annotationhubdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.3-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationforge: ``>=1.36.0,<1.37.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-bioccheck: ``>=1.30.0,<1.31.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocviews: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-organismdbi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-dbi: 
   :depends r-futile.logger: ``>=1.3.0``
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationhubdata

   and update with::

      conda update bioconductor-annotationhubdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationhubdata:<tag>

   (see `bioconductor-annotationhubdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationhubdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationhubdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationhubdata
   :alt:   (downloads)
.. |docker_bioconductor-annotationhubdata| image:: https://quay.io/repository/biocontainers/bioconductor-annotationhubdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationhubdata
.. _`bioconductor-annotationhubdata/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationhubdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationhubdata";
        var versions = ["1.24.0","1.22.0","1.20.1","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationhubdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationhubdata/README.html