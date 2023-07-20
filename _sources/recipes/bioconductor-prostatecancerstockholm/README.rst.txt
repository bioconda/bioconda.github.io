:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostatecancerstockholm'
.. highlight: bash

bioconductor-prostatecancerstockholm
====================================

.. conda:recipe:: bioconductor-prostatecancerstockholm
   :replaces_section_title:
   :noindex:

   Prostate Cancer Data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/prostateCancerStockholm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancerstockholm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancerstockholm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancerstockholm/meta.yaml>`_

   A Bioconductor data package for the Stockholm dataset


.. conda:package:: bioconductor-prostatecancerstockholm

   |downloads_bioconductor-prostatecancerstockholm| |docker_bioconductor-prostatecancerstockholm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancerstockholm

   and update with::

      conda update bioconductor-prostatecancerstockholm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostatecancerstockholm:<tag>

   (see `bioconductor-prostatecancerstockholm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostatecancerstockholm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancerstockholm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostatecancerstockholm
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancerstockholm| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm
.. _`bioconductor-prostatecancerstockholm/tags`: https://quay.io/repository/biocontainers/bioconductor-prostatecancerstockholm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prostatecancerstockholm";
        var versions = ["1.28.0","1.26.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancerstockholm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancerstockholm/README.html