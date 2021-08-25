:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libstatgen'
.. highlight: bash

libstatgen
==========

.. conda:recipe:: libstatgen
   :replaces_section_title:
   :noindex:

   Useful set of classes for creating statistical genetic programs.

   :homepage: https://genome.sph.umich.edu/wiki/C++_Library:_libStatGen
   :developer docs: https://github.com/statgen/libStatGen
   :license: GPL3
   :recipe: /`libstatgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen/meta.yaml>`_

   


.. conda:package:: libstatgen

   |downloads_libstatgen| |docker_libstatgen|

   :versions:
      
      

      ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.5-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libstatgen

   and update with::

      conda update libstatgen

   or use the docker container::

      docker pull quay.io/biocontainers/libstatgen:<tag>

   (see `libstatgen/tags`_ for valid values for ``<tag>``)


.. |downloads_libstatgen| image:: https://img.shields.io/conda/dn/bioconda/libstatgen.svg?style=flat
   :target: https://anaconda.org/bioconda/libstatgen
   :alt:   (downloads)
.. |docker_libstatgen| image:: https://quay.io/repository/biocontainers/libstatgen/status
   :target: https://quay.io/repository/biocontainers/libstatgen
.. _`libstatgen/tags`: https://quay.io/repository/biocontainers/libstatgen?tab=tags


.. raw:: html

    <script>
        var package = "libstatgen";
        var versions = ["1.0.15","1.0.15","1.0.14","1.0.14","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libstatgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libstatgen/README.html