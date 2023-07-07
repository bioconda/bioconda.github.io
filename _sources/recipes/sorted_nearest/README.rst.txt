:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sorted_nearest'
.. highlight: bash

sorted_nearest
==============

.. conda:recipe:: sorted_nearest
   :replaces_section_title:
   :noindex:

   Find nearest interval.

   :homepage: https://github.com/endrebak/sorted_nearest
   :license: BSD
   :recipe: /`sorted_nearest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest/meta.yaml>`_

   


.. conda:package:: sorted_nearest

   |downloads_sorted_nearest| |docker_sorted_nearest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.39-0</code>,  <code>0.0.37-2</code>,  <code>0.0.37-1</code>,  <code>0.0.37-0</code>,  <code>0.0.33-2</code>,  <code>0.0.33-1</code>,  <code>0.0.33-0</code>,  <code>0.0.32-1</code>,  <code>0.0.32-0</code>,  </span></summary>
      

      ``0.0.39-0``,  ``0.0.37-2``,  ``0.0.37-1``,  ``0.0.37-0``,  ``0.0.33-2``,  ``0.0.33-1``,  ``0.0.33-0``,  ``0.0.32-1``,  ``0.0.32-0``,  ``0.0.31-3``,  ``0.0.31-2``,  ``0.0.31-1``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.24-0``,  ``0.0.23-1``,  ``0.0.22-1``,  ``0.0.20-1``,  ``0.0.19-1``,  ``0.0.18-1``,  ``0.0.17-1``,  ``0.0.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sorted_nearest

   and update with::

      conda update sorted_nearest

   or use the docker container::

      docker pull quay.io/biocontainers/sorted_nearest:<tag>

   (see `sorted_nearest/tags`_ for valid values for ``<tag>``)


.. |downloads_sorted_nearest| image:: https://img.shields.io/conda/dn/bioconda/sorted_nearest.svg?style=flat
   :target: https://anaconda.org/bioconda/sorted_nearest
   :alt:   (downloads)
.. |docker_sorted_nearest| image:: https://quay.io/repository/biocontainers/sorted_nearest/status
   :target: https://quay.io/repository/biocontainers/sorted_nearest
.. _`sorted_nearest/tags`: https://quay.io/repository/biocontainers/sorted_nearest?tab=tags


.. raw:: html

    <script>
        var package = "sorted_nearest";
        var versions = ["0.0.39","0.0.37","0.0.37","0.0.37","0.0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sorted_nearest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sorted_nearest/README.html