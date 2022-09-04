:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abritamr'
.. highlight: bash

abritamr
========

.. conda:recipe:: abritamr
   :replaces_section_title:
   :noindex:

   Running AMRFinderPlus for MDU

   :homepage: https://github.com/MDU-PHL/abritamr
   :license: GPL3 / GPL-3.0-only
   :recipe: /`abritamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr/meta.yaml>`_

   


.. conda:package:: abritamr

   |downloads_abritamr| |docker_abritamr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends hmmer: 
   :depends libcurl: 
   :depends ncbi-amrfinderplus: ``3.10.16.*``
   :depends pandas: ``>1.4*``
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abritamr

   and update with::

      conda update abritamr

   or use the docker container::

      docker pull quay.io/biocontainers/abritamr:<tag>

   (see `abritamr/tags`_ for valid values for ``<tag>``)


.. |downloads_abritamr| image:: https://img.shields.io/conda/dn/bioconda/abritamr.svg?style=flat
   :target: https://anaconda.org/bioconda/abritamr
   :alt:   (downloads)
.. |docker_abritamr| image:: https://quay.io/repository/biocontainers/abritamr/status
   :target: https://quay.io/repository/biocontainers/abritamr
.. _`abritamr/tags`: https://quay.io/repository/biocontainers/abritamr?tab=tags


.. raw:: html

    <script>
        var package = "abritamr";
        var versions = ["1.0.12","1.0.11","1.0.10","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abritamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abritamr/README.html