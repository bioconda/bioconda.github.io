:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtsv-tools'
.. highlight: bash

mtsv-tools
==========

.. conda:recipe:: mtsv-tools
   :replaces_section_title:
   :noindex:

   mtsv\_tools contains core tools for alignment\-based metagenomic binning


   :homepage: https://github.com/FofanovLab/mtsv_tools
   :license: MIT / MIT
   :recipe: /`mtsv-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv-tools/meta.yaml>`_

   


.. conda:package:: mtsv-tools

   |downloads_mtsv-tools| |docker_mtsv-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtsv-tools

   and update with::

      conda update mtsv-tools

   or use the docker container::

      docker pull quay.io/biocontainers/mtsv-tools:<tag>

   (see `mtsv-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_mtsv-tools| image:: https://img.shields.io/conda/dn/bioconda/mtsv-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/mtsv-tools
   :alt:   (downloads)
.. |docker_mtsv-tools| image:: https://quay.io/repository/biocontainers/mtsv-tools/status
   :target: https://quay.io/repository/biocontainers/mtsv-tools
.. _`mtsv-tools/tags`: https://quay.io/repository/biocontainers/mtsv-tools?tab=tags


.. raw:: html

    <script>
        var package = "mtsv-tools";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtsv-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtsv-tools/README.html