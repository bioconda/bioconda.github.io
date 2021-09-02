:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-cell-browser'
.. highlight: bash

ucsc-cell-browser
=================

.. conda:recipe:: ucsc-cell-browser
   :replaces_section_title:
   :noindex:

   A browser for single\-cell data\, main site at http\:\/\/cells.ucsc.edu

   :homepage: http://cells.ucsc.edu
   :license: GPL
   :recipe: /`ucsc-cell-browser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser/meta.yaml>`_

   


.. conda:package:: ucsc-cell-browser

   |downloads_ucsc-cell-browser| |docker_ucsc-cell-browser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.7.15-0</code>,  <code>0.7.14-0</code>,  <code>0.7.13-0</code>,  <code>0.7.11-0</code>,  <code>0.7.10-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.15-0``,  ``0.7.14-0``,  ``0.7.13-0``,  ``0.7.11-0``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.5.49-0``,  ``0.5.46-0``,  ``0.5.45-0``,  ``0.5.43-1``,  ``0.5.43-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.21-0``,  ``0.4.56-0``,  ``0.4.38-0``,  ``0.4.35-0``,  ``0.4.23-1``,  ``0.4.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-cell-browser

   and update with::

      conda update ucsc-cell-browser

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-cell-browser:<tag>

   (see `ucsc-cell-browser/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-cell-browser| image:: https://img.shields.io/conda/dn/bioconda/ucsc-cell-browser.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-cell-browser
   :alt:   (downloads)
.. |docker_ucsc-cell-browser| image:: https://quay.io/repository/biocontainers/ucsc-cell-browser/status
   :target: https://quay.io/repository/biocontainers/ucsc-cell-browser
.. _`ucsc-cell-browser/tags`: https://quay.io/repository/biocontainers/ucsc-cell-browser?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-cell-browser";
        var versions = ["1.1.1","1.1.0","1.0.1","1.0.0","0.7.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-cell-browser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-cell-browser/README.html