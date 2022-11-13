:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.soybean'
.. highlight: bash

bioconductor-pd.soybean
=======================

.. conda:recipe:: bioconductor-pd.soybean
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name Soybean

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/pd.soybean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.soybean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.soybean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.soybean/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name Soybean


.. conda:package:: bioconductor-pd.soybean

   |downloads_bioconductor-pd.soybean| |docker_bioconductor-pd.soybean|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  <code>3.12.0-2</code>,  </span></summary>
      

      ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-oligo: ``>=1.62.0,<1.63.0``
   :depends bioconductor-oligoclasses: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.soybean

   and update with::

      conda update bioconductor-pd.soybean

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.soybean:<tag>

   (see `bioconductor-pd.soybean/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.soybean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.soybean.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.soybean
   :alt:   (downloads)
.. |docker_bioconductor-pd.soybean| image:: https://quay.io/repository/biocontainers/bioconductor-pd.soybean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.soybean
.. _`bioconductor-pd.soybean/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.soybean?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.soybean";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.soybean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.soybean/README.html