:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piscem'
.. highlight: bash

piscem
======

.. conda:recipe:: piscem
   :replaces_section_title:
   :noindex:

   piscem is a next\-generation compacted colored de Bruijn Graph\-based indexer and mapper

   :homepage: https://github.com/COMBINE-lab/piscem
   :license: BSD 3-Clause
   :recipe: /`piscem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem/meta.yaml>`_

   


.. conda:package:: piscem

   |downloads_piscem| |docker_piscem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piscem

   and update with::

      conda update piscem

   or use the docker container::

      docker pull quay.io/biocontainers/piscem:<tag>

   (see `piscem/tags`_ for valid values for ``<tag>``)


.. |downloads_piscem| image:: https://img.shields.io/conda/dn/bioconda/piscem.svg?style=flat
   :target: https://anaconda.org/bioconda/piscem
   :alt:   (downloads)
.. |docker_piscem| image:: https://quay.io/repository/biocontainers/piscem/status
   :target: https://quay.io/repository/biocontainers/piscem
.. _`piscem/tags`: https://quay.io/repository/biocontainers/piscem?tab=tags


.. raw:: html

    <script>
        var package = "piscem";
        var versions = ["0.6.1","0.6.0","0.6.0","0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piscem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piscem/README.html