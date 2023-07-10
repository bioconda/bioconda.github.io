:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowploidydata'
.. highlight: bash

bioconductor-flowploidydata
===========================

.. conda:recipe:: bioconductor-flowploidydata
   :replaces_section_title:
   :noindex:

   Example Flow Cytometry Data

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/flowPloidyData.html
   :license: GPL-3
   :recipe: /`bioconductor-flowploidydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidydata/meta.yaml>`_

   A collection of raw flow cytometry data for use in vignettes for the flowPloidy package.


.. conda:package:: bioconductor-flowploidydata

   |downloads_bioconductor-flowploidydata| |docker_bioconductor-flowploidydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowploidydata

   and update with::

      conda update bioconductor-flowploidydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowploidydata:<tag>

   (see `bioconductor-flowploidydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowploidydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowploidydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowploidydata
   :alt:   (downloads)
.. |docker_bioconductor-flowploidydata| image:: https://quay.io/repository/biocontainers/bioconductor-flowploidydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowploidydata
.. _`bioconductor-flowploidydata/tags`: https://quay.io/repository/biocontainers/bioconductor-flowploidydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowploidydata";
        var versions = ["1.26.0","1.23.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowploidydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowploidydata/README.html