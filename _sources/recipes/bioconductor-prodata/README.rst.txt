:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prodata'
.. highlight: bash

bioconductor-prodata
====================

.. conda:recipe:: bioconductor-prodata
   :replaces_section_title:
   :noindex:

   SELDI\-TOF data of Breast cancer samples

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/ProData.html
   :license: GPL
   :recipe: /`bioconductor-prodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prodata/meta.yaml>`_

   A data package of SELDI\-TOF protein mass spectrometry data of 167 breast cancer and normal samples.


.. conda:package:: bioconductor-prodata

   |downloads_bioconductor-prodata| |docker_bioconductor-prodata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prodata

   and update with::

      conda update bioconductor-prodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prodata:<tag>

   (see `bioconductor-prodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prodata
   :alt:   (downloads)
.. |docker_bioconductor-prodata| image:: https://quay.io/repository/biocontainers/bioconductor-prodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prodata
.. _`bioconductor-prodata/tags`: https://quay.io/repository/biocontainers/bioconductor-prodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prodata";
        var versions = ["1.36.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prodata/README.html