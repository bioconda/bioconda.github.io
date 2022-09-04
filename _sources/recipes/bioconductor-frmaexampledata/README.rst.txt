:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frmaexampledata'
.. highlight: bash

bioconductor-frmaexampledata
============================

.. conda:recipe:: bioconductor-frmaexampledata
   :replaces_section_title:
   :noindex:

   Frma Example Data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/frmaExampleData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-frmaexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmaexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmaexampledata/meta.yaml>`_

   Data files used by the examples in frma and frmaTools packages


.. conda:package:: bioconductor-frmaexampledata

   |downloads_bioconductor-frmaexampledata| |docker_bioconductor-frmaexampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frmaexampledata

   and update with::

      conda update bioconductor-frmaexampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frmaexampledata:<tag>

   (see `bioconductor-frmaexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frmaexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frmaexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frmaexampledata
   :alt:   (downloads)
.. |docker_bioconductor-frmaexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-frmaexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frmaexampledata
.. _`bioconductor-frmaexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-frmaexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-frmaexampledata";
        var versions = ["1.30.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frmaexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frmaexampledata/README.html