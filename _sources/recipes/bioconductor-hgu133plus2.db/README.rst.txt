:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2.db'
.. highlight: bash

bioconductor-hgu133plus2.db
===========================

.. conda:recipe:: bioconductor-hgu133plus2.db
   :replaces_section_title:
   :noindex:

   Affymetrix Human Genome U133 Plus 2.0 Array annotation data \(chip hgu133plus2\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/hgu133plus2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu133plus2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2.db/meta.yaml>`_

   Affymetrix Human Genome U133 Plus 2.0 Array annotation data \(chip hgu133plus2\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu133plus2.db

   |downloads_bioconductor-hgu133plus2.db| |docker_bioconductor-hgu133plus2.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-1</code>,  </span></summary>
      

      ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133plus2.db

   and update with::

      conda update bioconductor-hgu133plus2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133plus2.db:<tag>

   (see `bioconductor-hgu133plus2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133plus2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2.db
.. _`bioconductor-hgu133plus2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2.db/README.html