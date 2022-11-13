:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-operonhumanv3.db'
.. highlight: bash

bioconductor-operonhumanv3.db
=============================

.. conda:recipe:: bioconductor-operonhumanv3.db
   :replaces_section_title:
   :noindex:

   FHCRC Nelson Lab OperonHumanV3 Annotation Data \(OperonHumanV3\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/OperonHumanV3.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-operonhumanv3.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-operonhumanv3.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-operonhumanv3.db/meta.yaml>`_

   FHCRC Nelson Lab OperonHumanV3 Annotation Data \(OperonHumanV3\) assembled using data from public repositories


.. conda:package:: bioconductor-operonhumanv3.db

   |downloads_bioconductor-operonhumanv3.db| |docker_bioconductor-operonhumanv3.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-2</code>,  </span></summary>
      

      ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-operonhumanv3.db

   and update with::

      conda update bioconductor-operonhumanv3.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-operonhumanv3.db:<tag>

   (see `bioconductor-operonhumanv3.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-operonhumanv3.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-operonhumanv3.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-operonhumanv3.db
   :alt:   (downloads)
.. |docker_bioconductor-operonhumanv3.db| image:: https://quay.io/repository/biocontainers/bioconductor-operonhumanv3.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-operonhumanv3.db
.. _`bioconductor-operonhumanv3.db/tags`: https://quay.io/repository/biocontainers/bioconductor-operonhumanv3.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-operonhumanv3.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-operonhumanv3.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-operonhumanv3.db/README.html