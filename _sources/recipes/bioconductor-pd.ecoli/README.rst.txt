:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.ecoli'
.. highlight: bash

bioconductor-pd.ecoli
=====================

.. conda:recipe:: bioconductor-pd.ecoli
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name Ecoli

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/pd.ecoli.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.ecoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ecoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ecoli/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name Ecoli


.. conda:package:: bioconductor-pd.ecoli

   |downloads_bioconductor-pd.ecoli| |docker_bioconductor-pd.ecoli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  </span></summary>
      

      ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-oligo: ``>=1.64.0,<1.65.0``
   :depends bioconductor-oligoclasses: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.ecoli

   and update with::

      conda update bioconductor-pd.ecoli

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.ecoli:<tag>

   (see `bioconductor-pd.ecoli/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.ecoli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.ecoli.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.ecoli
   :alt:   (downloads)
.. |docker_bioconductor-pd.ecoli| image:: https://quay.io/repository/biocontainers/bioconductor-pd.ecoli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.ecoli
.. _`bioconductor-pd.ecoli/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.ecoli?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.ecoli";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.ecoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.ecoli/README.html