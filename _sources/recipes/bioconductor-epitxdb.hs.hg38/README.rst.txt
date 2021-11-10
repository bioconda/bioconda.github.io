:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb.hs.hg38'
.. highlight: bash

bioconductor-epitxdb.hs.hg38
============================

.. conda:recipe:: bioconductor-epitxdb.hs.hg38
   :replaces_section_title:
   :noindex:

   Annotation package for EpiTxDb objects

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/EpiTxDb.Hs.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb.hs.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.hs.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.hs.hg38/meta.yaml>`_

   Exposes an annotation databases generated from several sources by exposing these as EpiTxDb object. Generated for Homo sapiens\/hg38.


.. conda:package:: bioconductor-epitxdb.hs.hg38

   |downloads_bioconductor-epitxdb.hs.hg38| |docker_bioconductor-epitxdb.hs.hg38|

   :versions:
      
      

      ``0.99.7-3``,  ``0.99.7-2``,  ``0.99.7-1``,  ``0.99.7-0``,  ``0.99.3-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-epitxdb: ``>=1.6.0,<1.7.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epitxdb.hs.hg38

   and update with::

      conda update bioconductor-epitxdb.hs.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epitxdb.hs.hg38:<tag>

   (see `bioconductor-epitxdb.hs.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epitxdb.hs.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.hs.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb.hs.hg38
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb.hs.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38
.. _`bioconductor-epitxdb.hs.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb.hs.hg38";
        var versions = ["0.99.7","0.99.7","0.99.7","0.99.7","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb.hs.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb.hs.hg38/README.html