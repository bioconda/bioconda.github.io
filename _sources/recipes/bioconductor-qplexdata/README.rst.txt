:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qplexdata'
.. highlight: bash

bioconductor-qplexdata
======================

.. conda:recipe:: bioconductor-qplexdata
   :replaces_section_title:
   :noindex:

   Data accompanying qPLEXanalyzer package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/qPLEXdata.html
   :license: GPL-2
   :recipe: /`bioconductor-qplexdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexdata/meta.yaml>`_

   qPLEX\-RIME and Full proteome TMT mass spectrometry datasets.


.. conda:package:: bioconductor-qplexdata

   |downloads_bioconductor-qplexdata| |docker_bioconductor-qplexdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-msnbase: ``>=2.26.0,<2.27.0``
   :depends bioconductor-qplexanalyzer: ``>=1.18.0,<1.19.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qplexdata

   and update with::

      conda update bioconductor-qplexdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qplexdata:<tag>

   (see `bioconductor-qplexdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qplexdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qplexdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qplexdata
   :alt:   (downloads)
.. |docker_bioconductor-qplexdata| image:: https://quay.io/repository/biocontainers/bioconductor-qplexdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qplexdata
.. _`bioconductor-qplexdata/tags`: https://quay.io/repository/biocontainers/bioconductor-qplexdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qplexdata";
        var versions = ["1.18.0","1.16.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qplexdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qplexdata/README.html