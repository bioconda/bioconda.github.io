:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccdata'
.. highlight: bash

bioconductor-ccdata
===================

.. conda:recipe:: bioconductor-ccdata
   :replaces_section_title:
   :noindex:

   Data for Combination Connectivity Mapping \(ccmap\) Package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/ccdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccdata/meta.yaml>`_

   This package contains microarray gene expression data generated from the Connectivity Map build 02 and LINCS l1000. The data are used by the ccmap package to find drugs and drug combinations to mimic or reverse a gene expression signature.


.. conda:package:: bioconductor-ccdata

   |downloads_bioconductor-ccdata| |docker_bioconductor-ccdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221107``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccdata

   and update with::

      conda update bioconductor-ccdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccdata:<tag>

   (see `bioconductor-ccdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccdata
   :alt:   (downloads)
.. |docker_bioconductor-ccdata| image:: https://quay.io/repository/biocontainers/bioconductor-ccdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccdata
.. _`bioconductor-ccdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ccdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccdata";
        var versions = ["1.24.0","1.23.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccdata/README.html