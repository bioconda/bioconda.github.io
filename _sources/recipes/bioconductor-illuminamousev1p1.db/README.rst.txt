:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminamousev1p1.db'
.. highlight: bash

bioconductor-illuminamousev1p1.db
=================================

.. conda:recipe:: bioconductor-illuminamousev1p1.db
   :replaces_section_title:
   :noindex:

   Illumina MouseWG6v1p1 annotation data \(chip illuminaMousev1p1\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/illuminaMousev1p1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminamousev1p1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminamousev1p1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminamousev1p1.db/meta.yaml>`_

   Illumina MouseWG6v1p1 annotation data \(chip illuminaMousev1p1\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminamousev1p1.db

   |downloads_bioconductor-illuminamousev1p1.db| |docker_bioconductor-illuminamousev1p1.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-10</code>,  <code>1.26.0-9</code>,  <code>1.26.0-8</code>,  <code>1.26.0-7</code>,  <code>1.26.0-6</code>,  <code>1.26.0-5</code>,  <code>1.26.0-4</code>,  <code>1.26.0-3</code>,  <code>1.26.0-2</code>,  </span></summary>
      

      ``1.26.0-10``,  ``1.26.0-9``,  ``1.26.0-8``,  ``1.26.0-7``,  ``1.26.0-6``,  ``1.26.0-5``,  ``1.26.0-4``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-org.mm.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminamousev1p1.db

   and update with::

      conda update bioconductor-illuminamousev1p1.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminamousev1p1.db:<tag>

   (see `bioconductor-illuminamousev1p1.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminamousev1p1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminamousev1p1.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminamousev1p1.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminamousev1p1.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminamousev1p1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminamousev1p1.db
.. _`bioconductor-illuminamousev1p1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminamousev1p1.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminamousev1p1.db";
        var versions = ["1.26.0","1.26.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminamousev1p1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminamousev1p1.db/README.html