:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chic.data'
.. highlight: bash

bioconductor-chic.data
======================

.. conda:recipe:: bioconductor-chic.data
   :replaces_section_title:
   :noindex:

   ChIC package data

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/ChIC.data.html
   :license: GPL-2
   :recipe: /`bioconductor-chic.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic.data/meta.yaml>`_

   This package contains annotation and metagene profile data for the ChIC package.


.. conda:package:: bioconductor-chic.data

   |downloads_bioconductor-chic.data| |docker_bioconductor-chic.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221106``
   :depends bioconductor-genomeintervals: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: ``>=6.0-78``
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chic.data

   and update with::

      conda update bioconductor-chic.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chic.data:<tag>

   (see `bioconductor-chic.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chic.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chic.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chic.data
   :alt:   (downloads)
.. |docker_bioconductor-chic.data| image:: https://quay.io/repository/biocontainers/bioconductor-chic.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chic.data
.. _`bioconductor-chic.data/tags`: https://quay.io/repository/biocontainers/bioconductor-chic.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chic.data";
        var versions = ["1.18.0","1.14.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chic.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chic.data/README.html