:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affydata'
.. highlight: bash

bioconductor-affydata
=====================

.. conda:recipe:: bioconductor-affydata
   :replaces_section_title:
   :noindex:

   Affymetrix Data for Demonstration Purpose

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/affydata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata/meta.yaml>`_

   Example datasets of a slightly large size. They represent \'real world examples\'\, unlike the artificial examples included in the package affy.


.. conda:package:: bioconductor-affydata

   |downloads_bioconductor-affydata| |docker_bioconductor-affydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affydata

   and update with::

      conda update bioconductor-affydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affydata:<tag>

   (see `bioconductor-affydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affydata
   :alt:   (downloads)
.. |docker_bioconductor-affydata| image:: https://quay.io/repository/biocontainers/bioconductor-affydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affydata
.. _`bioconductor-affydata/tags`: https://quay.io/repository/biocontainers/bioconductor-affydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affydata";
        var versions = ["1.42.0","1.40.0","1.38.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affydata/README.html