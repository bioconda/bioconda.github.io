:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dextractor'
.. highlight: bash

dextractor
==========

.. conda:recipe:: dextractor
   :replaces_section_title:
   :noindex:

   Bax File Decoder and Data Compressor

   :homepage: https://github.com/thegenemyers/DEXTRACTOR
   :license: Custom
   :recipe: /`dextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor/meta.yaml>`_

   


.. conda:package:: dextractor

   |downloads_dextractor| |docker_dextractor|

   :versions:
      
      

      ``1.0p2-3``,  ``1.0p2-2``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-0``

      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dextractor

   and update with::

      conda update dextractor

   or use the docker container::

      docker pull quay.io/biocontainers/dextractor:<tag>

   (see `dextractor/tags`_ for valid values for ``<tag>``)


.. |downloads_dextractor| image:: https://img.shields.io/conda/dn/bioconda/dextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/dextractor
   :alt:   (downloads)
.. |docker_dextractor| image:: https://quay.io/repository/biocontainers/dextractor/status
   :target: https://quay.io/repository/biocontainers/dextractor
.. _`dextractor/tags`: https://quay.io/repository/biocontainers/dextractor?tab=tags


.. raw:: html

    <script>
        var package = "dextractor";
        var versions = ["1.0p2","1.0p2","1.0p2","1.0p2","1.0p1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dextractor/README.html