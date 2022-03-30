:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recentrifuge'
.. highlight: bash

recentrifuge
============

.. conda:recipe:: recentrifuge
   :replaces_section_title:
   :noindex:

   Robust comparative analysis and contamination removal for metagenomics

   :homepage: https://github.com/khyox/recentrifuge
   :license: GPLv3
   :recipe: /`recentrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge/meta.yaml>`_

   


.. conda:package:: recentrifuge

   |downloads_recentrifuge| |docker_recentrifuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.29.0-0``,  ``0.28.14-0``,  ``0.28.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends matplotlib-base: ``>=3.3.3``
   :depends numpy: ``>=1.19.4``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.1.5``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recentrifuge

   and update with::

      conda update recentrifuge

   or use the docker container::

      docker pull quay.io/biocontainers/recentrifuge:<tag>

   (see `recentrifuge/tags`_ for valid values for ``<tag>``)


.. |downloads_recentrifuge| image:: https://img.shields.io/conda/dn/bioconda/recentrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/recentrifuge
   :alt:   (downloads)
.. |docker_recentrifuge| image:: https://quay.io/repository/biocontainers/recentrifuge/status
   :target: https://quay.io/repository/biocontainers/recentrifuge
.. _`recentrifuge/tags`: https://quay.io/repository/biocontainers/recentrifuge?tab=tags


.. raw:: html

    <script>
        var package = "recentrifuge";
        var versions = ["1.8.1","1.8.0","1.7.0","1.6.3","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recentrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recentrifuge/README.html