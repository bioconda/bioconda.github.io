:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bridgedbr'
.. highlight: bash

bioconductor-bridgedbr
======================

.. conda:recipe:: bioconductor-bridgedbr
   :replaces_section_title:
   :noindex:

   Code for using BridgeDb identifier mapping framework from within R

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BridgeDbR.html
   :license: AGPL-3
   :recipe: /`bioconductor-bridgedbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr/meta.yaml>`_

   Use BridgeDb functions and load identifier mapping databases in R. It uses GitHub\, Zenodo\, and Figshare if you use this package to download identifier mappings files.


.. conda:package:: bioconductor-bridgedbr

   |downloads_bioconductor-bridgedbr| |docker_bioconductor-bridgedbr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bridgedbr

   and update with::

      conda update bioconductor-bridgedbr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bridgedbr:<tag>

   (see `bioconductor-bridgedbr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bridgedbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bridgedbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bridgedbr
   :alt:   (downloads)
.. |docker_bioconductor-bridgedbr| image:: https://quay.io/repository/biocontainers/bioconductor-bridgedbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bridgedbr
.. _`bioconductor-bridgedbr/tags`: https://quay.io/repository/biocontainers/bioconductor-bridgedbr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bridgedbr";
        var versions = ["2.10.0","2.8.0","2.4.0","2.2.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html