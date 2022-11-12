:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylaiddata'
.. highlight: bash

bioconductor-methylaiddata
==========================

.. conda:recipe:: bioconductor-methylaiddata
   :replaces_section_title:
   :noindex:

   MethylAid\-summarized data for 2800 Illumina 450k array samples and 2620 EPIC array samples

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/MethylAidData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methylaiddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaiddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaiddata/meta.yaml>`_

   A data package containing summarized Illumina 450k array data on 2800 samples and summarized EPIC data for 2620 samples. The data can be use as a background data set in the interactive application.


.. conda:package:: bioconductor-methylaiddata

   |downloads_bioconductor-methylaiddata| |docker_bioconductor-methylaiddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221111``
   :depends bioconductor-methylaid: ``>=1.32.0,<1.33.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylaiddata

   and update with::

      conda update bioconductor-methylaiddata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylaiddata:<tag>

   (see `bioconductor-methylaiddata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylaiddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylaiddata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylaiddata
   :alt:   (downloads)
.. |docker_bioconductor-methylaiddata| image:: https://quay.io/repository/biocontainers/bioconductor-methylaiddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylaiddata
.. _`bioconductor-methylaiddata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylaiddata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylaiddata";
        var versions = ["1.30.0","1.26.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylaiddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylaiddata/README.html