:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgu74c.db'
.. highlight: bash

bioconductor-mgu74c.db
======================

.. conda:recipe:: bioconductor-mgu74c.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix MG\_U74C Array annotation data \(chip mgu74c\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/mgu74c.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mgu74c.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgu74c.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgu74c.db/meta.yaml>`_

   Affymetrix Affymetrix MG\_U74C Array annotation data \(chip mgu74c\) assembled using data from public repositories


.. conda:package:: bioconductor-mgu74c.db

   |downloads_bioconductor-mgu74c.db| |docker_bioconductor-mgu74c.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-2</code>,  </span></summary>
      

      ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
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

      conda install bioconductor-mgu74c.db

   and update with::

      conda update bioconductor-mgu74c.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgu74c.db:<tag>

   (see `bioconductor-mgu74c.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgu74c.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgu74c.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgu74c.db
   :alt:   (downloads)
.. |docker_bioconductor-mgu74c.db| image:: https://quay.io/repository/biocontainers/bioconductor-mgu74c.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgu74c.db
.. _`bioconductor-mgu74c.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mgu74c.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgu74c.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgu74c.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgu74c.db/README.html