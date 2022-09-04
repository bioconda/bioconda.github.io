:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminamousev2.db'
.. highlight: bash

bioconductor-illuminamousev2.db
===============================

.. conda:recipe:: bioconductor-illuminamousev2.db
   :replaces_section_title:
   :noindex:

   Illumina MouseWG6v2 annotation data \(chip illuminaMousev2\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/illuminaMousev2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminamousev2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminamousev2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminamousev2.db/meta.yaml>`_

   Illumina MouseWG6v2 annotation data \(chip illuminaMousev2\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminamousev2.db

   |downloads_bioconductor-illuminamousev2.db| |docker_bioconductor-illuminamousev2.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-14</code>,  <code>1.26.0-13</code>,  <code>1.26.0-12</code>,  <code>1.26.0-11</code>,  <code>1.26.0-10</code>,  <code>1.26.0-9</code>,  <code>1.26.0-8</code>,  <code>1.26.0-7</code>,  <code>1.26.0-5</code>,  </span></summary>
      

      ``1.26.0-14``,  ``1.26.0-13``,  ``1.26.0-12``,  ``1.26.0-11``,  ``1.26.0-10``,  ``1.26.0-9``,  ``1.26.0-8``,  ``1.26.0-7``,  ``1.26.0-5``,  ``1.26.0-4``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminamousev2.db

   and update with::

      conda update bioconductor-illuminamousev2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminamousev2.db:<tag>

   (see `bioconductor-illuminamousev2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminamousev2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminamousev2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminamousev2.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminamousev2.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminamousev2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminamousev2.db
.. _`bioconductor-illuminamousev2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminamousev2.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminamousev2.db";
        var versions = ["1.26.0","1.26.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminamousev2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminamousev2.db/README.html