:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.ucsc.trnas'
.. highlight: bash

bioconductor-fdb.ucsc.trnas
===========================

.. conda:recipe:: bioconductor-fdb.ucsc.trnas
   :replaces_section_title:
   :noindex:

   Annotation package for FeatureDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/FDb.UCSC.tRNAs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.trnas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as FeatureDb objects


.. conda:package:: bioconductor-fdb.ucsc.trnas

   |downloads_bioconductor-fdb.ucsc.trnas| |docker_bioconductor-fdb.ucsc.trnas|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.ucsc.trnas

   and update with::

      conda update bioconductor-fdb.ucsc.trnas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.ucsc.trnas:<tag>

   (see `bioconductor-fdb.ucsc.trnas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.ucsc.trnas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.trnas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.ucsc.trnas
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.trnas| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas
.. _`bioconductor-fdb.ucsc.trnas/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.ucsc.trnas";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html