:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytolib'
.. highlight: bash

bioconductor-cytolib
====================

.. conda:recipe:: bioconductor-cytolib
   :replaces_section_title:
   :noindex:

   C\+\+ infrastructure for representing and interacting with the gated cytometry data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cytolib.html
   :license: file LICENSE
   :recipe: /`bioconductor-cytolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib/meta.yaml>`_

   This package provides the core data structure and API to represent and interact with the gated cytometry data.


.. conda:package:: bioconductor-cytolib

   |downloads_bioconductor-cytolib| |docker_bioconductor-cytolib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5lib: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rprotobuflib: ``>=2.10.0,<2.11.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: ``>=1.75.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytolib

   and update with::

      conda update bioconductor-cytolib

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytolib:<tag>

   (see `bioconductor-cytolib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytolib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytolib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytolib
   :alt:   (downloads)
.. |docker_bioconductor-cytolib| image:: https://quay.io/repository/biocontainers/bioconductor-cytolib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytolib
.. _`bioconductor-cytolib/tags`: https://quay.io/repository/biocontainers/bioconductor-cytolib?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytolib";
        var versions = ["2.10.0","2.6.2","2.6.2","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytolib/README.html