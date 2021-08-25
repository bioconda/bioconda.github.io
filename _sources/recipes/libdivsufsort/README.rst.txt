:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libdivsufsort'
.. highlight: bash

libdivsufsort
=============

.. conda:recipe:: libdivsufsort
   :replaces_section_title:
   :noindex:

   A lightweight suffix\-sorting library

   :homepage: https://github.com/y-256/libdivsufsort
   :license: MIT
   :recipe: /`libdivsufsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdivsufsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdivsufsort/meta.yaml>`_

   


.. conda:package:: libdivsufsort

   |downloads_libdivsufsort| |docker_libdivsufsort|

   :versions:
      
      

      ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libdivsufsort

   and update with::

      conda update libdivsufsort

   or use the docker container::

      docker pull quay.io/biocontainers/libdivsufsort:<tag>

   (see `libdivsufsort/tags`_ for valid values for ``<tag>``)


.. |downloads_libdivsufsort| image:: https://img.shields.io/conda/dn/bioconda/libdivsufsort.svg?style=flat
   :target: https://anaconda.org/bioconda/libdivsufsort
   :alt:   (downloads)
.. |docker_libdivsufsort| image:: https://quay.io/repository/biocontainers/libdivsufsort/status
   :target: https://quay.io/repository/biocontainers/libdivsufsort
.. _`libdivsufsort/tags`: https://quay.io/repository/biocontainers/libdivsufsort?tab=tags


.. raw:: html

    <script>
        var package = "libdivsufsort";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libdivsufsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libdivsufsort/README.html