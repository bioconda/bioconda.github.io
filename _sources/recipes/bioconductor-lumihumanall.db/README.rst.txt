:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumihumanall.db'
.. highlight: bash

bioconductor-lumihumanall.db
============================

.. conda:recipe:: bioconductor-lumihumanall.db
   :replaces_section_title:
   :noindex:

   Illumina Human Illumina expression annotation data \(chip lumiHumanAll\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/lumiHumanAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumihumanall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db/meta.yaml>`_

   Illumina Human Illumina expression annotation data \(chip lumiHumanAll\) assembled using data from public repositories


.. conda:package:: bioconductor-lumihumanall.db

   |downloads_bioconductor-lumihumanall.db| |docker_bioconductor-lumihumanall.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-13</code>,  <code>1.22.0-12</code>,  <code>1.22.0-11</code>,  <code>1.22.0-10</code>,  <code>1.22.0-9</code>,  <code>1.22.0-8</code>,  <code>1.22.0-7</code>,  <code>1.22.0-6</code>,  <code>1.22.0-5</code>,  </span></summary>
      

      ``1.22.0-13``,  ``1.22.0-12``,  ``1.22.0-11``,  ``1.22.0-10``,  ``1.22.0-9``,  ``1.22.0-8``,  ``1.22.0-7``,  ``1.22.0-6``,  ``1.22.0-5``,  ``1.22.0-3``,  ``1.22.0-2``,  ``1.22.0-0``

      
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

      conda install bioconductor-lumihumanall.db

   and update with::

      conda update bioconductor-lumihumanall.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumihumanall.db:<tag>

   (see `bioconductor-lumihumanall.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumihumanall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanall.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumihumanall.db
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db
.. _`bioconductor-lumihumanall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumihumanall.db";
        var versions = ["1.22.0","1.22.0","1.22.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html