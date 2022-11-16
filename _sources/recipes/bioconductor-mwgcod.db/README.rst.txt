:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mwgcod.db'
.. highlight: bash

bioconductor-mwgcod.db
======================

.. conda:recipe:: bioconductor-mwgcod.db
   :replaces_section_title:
   :noindex:

   Codelink Mouse Whole Genome Bioarray \(\~36 000 mouse gene targets\) annotation data \(chip mwgcod\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/mwgcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mwgcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwgcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwgcod.db/meta.yaml>`_

   Codelink Mouse Whole Genome Bioarray \(\~36 000 mouse gene targets\) annotation data \(chip mwgcod\) assembled using data from public repositories


.. conda:package:: bioconductor-mwgcod.db

   |downloads_bioconductor-mwgcod.db| |docker_bioconductor-mwgcod.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  <code>3.4.0-3</code>,  <code>3.4.0-2</code>,  </span></summary>
      

      ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
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

      conda install bioconductor-mwgcod.db

   and update with::

      conda update bioconductor-mwgcod.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mwgcod.db:<tag>

   (see `bioconductor-mwgcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mwgcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwgcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mwgcod.db
   :alt:   (downloads)
.. |docker_bioconductor-mwgcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-mwgcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwgcod.db
.. _`bioconductor-mwgcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mwgcod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mwgcod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwgcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwgcod.db/README.html