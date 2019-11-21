:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graph-boink'
.. highlight: bash

graph-boink
===========

.. conda:recipe:: graph-boink
   :replaces_section_title:

   streaming de Bruijn graph compaction and sketching.

   :homepage: https://github.com/camillescott/boink
   :license: MIT
   :recipe: /`graph-boink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph-boink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph-boink/meta.yaml>`_

   


.. conda:package:: graph-boink

   |downloads_graph-boink| |docker_graph-boink|

   :versions: 0.9.1-0, 0.9-0, 0.8-0
   
   :depends blessings: 
   :depends clangdev: 8.0.1.*
   :depends cppyy: >=1.5.5
   :depends libcxx: 
   :depends libcxxabi: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends openmp: 
   :depends py-cpuinfo: 
   :depends pyfiglet: 
   :depends python: >=3.8,<3.9.0a0
   :depends screed: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graph-boink

   and update with::

      conda update graph-boink

   or use the docker container::

      docker pull quay.io/biocontainers/graph-boink:<tag>

   (see `graph-boink/tags`_ for valid values for ``<tag>``)


.. |downloads_graph-boink| image:: https://img.shields.io/conda/dn/bioconda/graph-boink.svg?style=flat
   :target: https://anaconda.org/bioconda/graph-boink
   :alt:   (downloads)
.. |docker_graph-boink| image:: https://quay.io/repository/biocontainers/graph-boink/status
   :target: https://quay.io/repository/biocontainers/graph-boink
.. _`graph-boink/tags`: https://quay.io/repository/biocontainers/graph-boink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graph-boink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graph-boink/README.html