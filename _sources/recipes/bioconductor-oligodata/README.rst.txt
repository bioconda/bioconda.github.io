:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oligodata'
.. highlight: bash

bioconductor-oligodata
======================

.. conda:recipe:: bioconductor-oligodata
   :replaces_section_title:
   :noindex:

   Dataset samples for the oligo package

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/oligoData.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-oligodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata/meta.yaml>`_

   Dataset samples \(Affymetrix\: Expression\, Gene\, Exon\, SNP\; NimbleGen\: Expression\, Tiling\) to be used with the oligo package.


.. conda:package:: bioconductor-oligodata

   |downloads_bioconductor-oligodata| |docker_bioconductor-oligodata|

   :versions:
      
      

      ``1.8.0-9``,  ``1.8.0-8``,  ``1.8.0-7``,  ``1.8.0-6``,  ``1.8.0-5``,  ``1.8.0-4``,  ``1.8.0-3``,  ``1.8.0-2``,  ``1.8.0-0``

      

   
   :depends bioconductor-oligo: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oligodata

   and update with::

      conda update bioconductor-oligodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oligodata:<tag>

   (see `bioconductor-oligodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oligodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oligodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oligodata
   :alt:   (downloads)
.. |docker_bioconductor-oligodata| image:: https://quay.io/repository/biocontainers/bioconductor-oligodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oligodata
.. _`bioconductor-oligodata/tags`: https://quay.io/repository/biocontainers/bioconductor-oligodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oligodata";
        var versions = ["1.8.0","1.8.0","1.8.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oligodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oligodata/README.html