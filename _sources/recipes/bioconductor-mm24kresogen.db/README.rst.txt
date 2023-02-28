:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mm24kresogen.db'
.. highlight: bash

bioconductor-mm24kresogen.db
============================

.. conda:recipe:: bioconductor-mm24kresogen.db
   :replaces_section_title:
   :noindex:

   RNG\_MRC Mouse Pangenomic 24k Set annotation data \(chip mm24kresogen\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/mm24kresogen.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mm24kresogen.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mm24kresogen.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mm24kresogen.db/meta.yaml>`_

   RNG\_MRC Mouse Pangenomic 24k Set annotation data \(chip mm24kresogen\) assembled using data from public repositories


.. conda:package:: bioconductor-mm24kresogen.db

   |downloads_bioconductor-mm24kresogen.db| |docker_bioconductor-mm24kresogen.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-10</code>,  <code>2.5.0-9</code>,  <code>2.5.0-8</code>,  <code>2.5.0-7</code>,  <code>2.5.0-6</code>,  <code>2.5.0-5</code>,  <code>2.5.0-4</code>,  <code>2.5.0-3</code>,  <code>2.5.0-2</code>,  </span></summary>
      

      ``2.5.0-10``,  ``2.5.0-9``,  ``2.5.0-8``,  ``2.5.0-7``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-0``

      
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

      conda install bioconductor-mm24kresogen.db

   and update with::

      conda update bioconductor-mm24kresogen.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mm24kresogen.db:<tag>

   (see `bioconductor-mm24kresogen.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mm24kresogen.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mm24kresogen.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mm24kresogen.db
   :alt:   (downloads)
.. |docker_bioconductor-mm24kresogen.db| image:: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db
.. _`bioconductor-mm24kresogen.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mm24kresogen.db";
        var versions = ["2.5.0","2.5.0","2.5.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mm24kresogen.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mm24kresogen.db/README.html