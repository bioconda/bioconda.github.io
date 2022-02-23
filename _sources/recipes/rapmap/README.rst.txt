:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapmap'
.. highlight: bash

rapmap
======

.. conda:recipe:: rapmap
   :replaces_section_title:
   :noindex:

   Rapid sensitive and accurate read mapping via quasi\-mapping

   :homepage: https://github.com/COMBINE-lab/RapMap
   :license: GPL
   :recipe: /`rapmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapmap/meta.yaml>`_

   


.. conda:package:: rapmap

   |downloads_rapmap| |docker_rapmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-3</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>v0.2.1-2</code>,  <code>v0.2.1-1</code>,  <code>v0.2.0-1</code>,  <code>v0.1.0pre-3</code>,  </span></summary>
      

      ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-0``,  ``v0.2.1-2``,  ``v0.2.1-1``,  ``v0.2.0-1``,  ``v0.1.0pre-3``,  ``v0.1.0pre-2``,  ``v0.1.0pre-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends jemalloc: ``>=5.1.0``
   :depends libcxx: ``>=12.0.1``
   :depends libjemalloc: ``>=5.2.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends tbb: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapmap

   and update with::

      conda update rapmap

   or use the docker container::

      docker pull quay.io/biocontainers/rapmap:<tag>

   (see `rapmap/tags`_ for valid values for ``<tag>``)


.. |downloads_rapmap| image:: https://img.shields.io/conda/dn/bioconda/rapmap.svg?style=flat
   :target: https://anaconda.org/bioconda/rapmap
   :alt:   (downloads)
.. |docker_rapmap| image:: https://quay.io/repository/biocontainers/rapmap/status
   :target: https://quay.io/repository/biocontainers/rapmap
.. _`rapmap/tags`: https://quay.io/repository/biocontainers/rapmap?tab=tags


.. raw:: html

    <script>
        var package = "rapmap";
        var versions = ["0.6.0","0.6.0","0.6.0","0.6.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapmap/README.html