:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirna102xgaincdf'
.. highlight: bash

bioconductor-mirna102xgaincdf
=============================

.. conda:recipe:: bioconductor-mirna102xgaincdf
   :replaces_section_title:
   :noindex:

   mirna102xgaincdf

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/mirna102xgaincdf.html
   :license: LGPL
   :recipe: /`bioconductor-mirna102xgaincdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna102xgaincdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna102xgaincdf/meta.yaml>`_

   A package containing an environment representing the miRNA\-1\_0\_2Xgain.CDF file.


.. conda:package:: bioconductor-mirna102xgaincdf

   |downloads_bioconductor-mirna102xgaincdf| |docker_bioconductor-mirna102xgaincdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirna102xgaincdf

   and update with::

      conda update bioconductor-mirna102xgaincdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirna102xgaincdf:<tag>

   (see `bioconductor-mirna102xgaincdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirna102xgaincdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirna102xgaincdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirna102xgaincdf
   :alt:   (downloads)
.. |docker_bioconductor-mirna102xgaincdf| image:: https://quay.io/repository/biocontainers/bioconductor-mirna102xgaincdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirna102xgaincdf
.. _`bioconductor-mirna102xgaincdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mirna102xgaincdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirna102xgaincdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirna102xgaincdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirna102xgaincdf/README.html