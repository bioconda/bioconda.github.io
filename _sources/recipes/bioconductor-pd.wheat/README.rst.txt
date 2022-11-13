:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.wheat'
.. highlight: bash

bioconductor-pd.wheat
=====================

.. conda:recipe:: bioconductor-pd.wheat
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name wheat

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/pd.wheat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.wheat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.wheat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.wheat/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name wheat


.. conda:package:: bioconductor-pd.wheat

   |downloads_bioconductor-pd.wheat| |docker_bioconductor-pd.wheat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  </span></summary>
      

      ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-1``,  ``3.12.0-0``

      
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

      conda install bioconductor-pd.wheat

   and update with::

      conda update bioconductor-pd.wheat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.wheat:<tag>

   (see `bioconductor-pd.wheat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.wheat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.wheat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.wheat
   :alt:   (downloads)
.. |docker_bioconductor-pd.wheat| image:: https://quay.io/repository/biocontainers/bioconductor-pd.wheat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.wheat
.. _`bioconductor-pd.wheat/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.wheat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.wheat";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.wheat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.wheat/README.html