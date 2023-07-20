:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pedbarrayv10.db'
.. highlight: bash

bioconductor-pedbarrayv10.db
============================

.. conda:recipe:: bioconductor-pedbarrayv10.db
   :replaces_section_title:
   :noindex:

   FHCRC Nelson Lab pedbarrayv10 Annotation Data \(pedbarrayv10\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/pedbarrayv10.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pedbarrayv10.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedbarrayv10.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedbarrayv10.db/meta.yaml>`_

   FHCRC Nelson Lab pedbarrayv10 Annotation Data \(pedbarrayv10\) assembled using data from public repositories


.. conda:package:: bioconductor-pedbarrayv10.db

   |downloads_bioconductor-pedbarrayv10.db| |docker_bioconductor-pedbarrayv10.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  </span></summary>
      

      ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pedbarrayv10.db

   and update with::

      conda update bioconductor-pedbarrayv10.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pedbarrayv10.db:<tag>

   (see `bioconductor-pedbarrayv10.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pedbarrayv10.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pedbarrayv10.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pedbarrayv10.db
   :alt:   (downloads)
.. |docker_bioconductor-pedbarrayv10.db| image:: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db
.. _`bioconductor-pedbarrayv10.db/tags`: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pedbarrayv10.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pedbarrayv10.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pedbarrayv10.db/README.html