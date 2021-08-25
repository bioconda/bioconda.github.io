:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.pcr.db'
.. highlight: bash

bioconductor-mesh.pcr.db
========================

.. conda:recipe:: bioconductor-mesh.pcr.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire MeSH

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/MeSH.PCR.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.pcr.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.pcr.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.pcr.db/meta.yaml>`_

   A set of PCR \(parent\-child relationship\) in MeSH.


.. conda:package:: bioconductor-mesh.pcr.db

   |downloads_bioconductor-mesh.pcr.db| |docker_bioconductor-mesh.pcr.db|

   :versions:
      
      

      ``1.15.0-0``,  ``1.13.0-3``,  ``1.13.0-2``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.11.0-0``

      

   
   :depends bioconductor-meshdbi: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.pcr.db

   and update with::

      conda update bioconductor-mesh.pcr.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.pcr.db:<tag>

   (see `bioconductor-mesh.pcr.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.pcr.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.pcr.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.pcr.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.pcr.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.pcr.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.pcr.db
.. _`bioconductor-mesh.pcr.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.pcr.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mesh.pcr.db";
        var versions = ["1.15.0","1.13.0","1.13.0","1.13.0","1.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.pcr.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.pcr.db/README.html