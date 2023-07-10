:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast.data'
.. highlight: bash

bioconductor-geneplast.data
===========================

.. conda:recipe:: bioconductor-geneplast.data
   :replaces_section_title:
   :noindex:

   Input data for the geneplast package via AnnotationHub

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/geneplast.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplast.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data/meta.yaml>`_

   The package geneplast.data provides datasets from different sources via AnnotationHub to use in geneplast pipelines. The datasets have species\, phylogenetic trees\, and orthology relationships among eukaryotes from different orthologs databases.


.. conda:package:: bioconductor-geneplast.data

   |downloads_bioconductor-geneplast.data| |docker_bioconductor-geneplast.data|

   :versions:
      
      

      ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.4-0``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneplast.data

   and update with::

      conda update bioconductor-geneplast.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplast.data:<tag>

   (see `bioconductor-geneplast.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplast.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast.data
   :alt:   (downloads)
.. |docker_bioconductor-geneplast.data| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast.data
.. _`bioconductor-geneplast.data/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplast.data";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.4","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html