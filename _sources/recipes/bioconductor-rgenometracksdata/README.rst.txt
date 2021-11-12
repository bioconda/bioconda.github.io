:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgenometracksdata'
.. highlight: bash

bioconductor-rgenometracksdata
==============================

.. conda:recipe:: bioconductor-rgenometracksdata
   :replaces_section_title:
   :noindex:

   Demonstration Data from rGenomeTracks Package

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/rGenomeTracksData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rgenometracksdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata/meta.yaml>`_

   rGenomeTracksData is a collection of data from pyGenomeTracks project. The purpose of this data is testing and demonstration of rGenomeTracks. This package include 14 sample file from different genomic and epigenomic file format.


.. conda:package:: bioconductor-rgenometracksdata

   |downloads_bioconductor-rgenometracksdata| |docker_bioconductor-rgenometracksdata|

   :versions:
      
      

      ``0.99.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgenometracksdata

   and update with::

      conda update bioconductor-rgenometracksdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgenometracksdata:<tag>

   (see `bioconductor-rgenometracksdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgenometracksdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgenometracksdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgenometracksdata
   :alt:   (downloads)
.. |docker_bioconductor-rgenometracksdata| image:: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata
.. _`bioconductor-rgenometracksdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgenometracksdata";
        var versions = ["0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html