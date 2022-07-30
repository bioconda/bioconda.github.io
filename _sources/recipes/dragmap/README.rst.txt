:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dragmap'
.. highlight: bash

dragmap
=======

.. conda:recipe:: dragmap
   :replaces_section_title:
   :noindex:

   Dragmap is the Dragen mapper\/aligner Open Source Software.

   :homepage: https://github.com/Illumina/DRAGMAP
   :license: GPL-3
   :recipe: /`dragmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragmap/meta.yaml>`_

   


.. conda:package:: dragmap

   |downloads_dragmap| |docker_dragmap|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dragmap

   and update with::

      conda update dragmap

   or use the docker container::

      docker pull quay.io/biocontainers/dragmap:<tag>

   (see `dragmap/tags`_ for valid values for ``<tag>``)


.. |downloads_dragmap| image:: https://img.shields.io/conda/dn/bioconda/dragmap.svg?style=flat
   :target: https://anaconda.org/bioconda/dragmap
   :alt:   (downloads)
.. |docker_dragmap| image:: https://quay.io/repository/biocontainers/dragmap/status
   :target: https://quay.io/repository/biocontainers/dragmap
.. _`dragmap/tags`: https://quay.io/repository/biocontainers/dragmap?tab=tags


.. raw:: html

    <script>
        var package = "dragmap";
        var versions = ["1.3.0","1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dragmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dragmap/README.html