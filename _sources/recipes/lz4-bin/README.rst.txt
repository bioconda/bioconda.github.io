:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lz4-bin'
.. highlight: bash

lz4-bin
=======

.. conda:recipe:: lz4-bin
   :replaces_section_title:
   :noindex:

   Extremely Fast Compression Application

   :homepage: http://cyan4973.github.io/lz4
   :license: BSD
   :recipe: /`lz4-bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin/meta.yaml>`_

   


.. conda:package:: lz4-bin

   |downloads_lz4-bin| |docker_lz4-bin|

   :versions:
      
      

      ``131-7``,  ``131-6``,  ``131-5``,  ``131-4``,  ``131-3``,  ``131-2``,  ``131-1``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lz4-bin

   and update with::

      conda update lz4-bin

   or use the docker container::

      docker pull quay.io/biocontainers/lz4-bin:<tag>

   (see `lz4-bin/tags`_ for valid values for ``<tag>``)


.. |downloads_lz4-bin| image:: https://img.shields.io/conda/dn/bioconda/lz4-bin.svg?style=flat
   :target: https://anaconda.org/bioconda/lz4-bin
   :alt:   (downloads)
.. |docker_lz4-bin| image:: https://quay.io/repository/biocontainers/lz4-bin/status
   :target: https://quay.io/repository/biocontainers/lz4-bin
.. _`lz4-bin/tags`: https://quay.io/repository/biocontainers/lz4-bin?tab=tags


.. raw:: html

    <script>
        var package = "lz4-bin";
        var versions = ["131","131","131","131","131"];
    </script>





Notes
-----
This package is for the lz4 C binary\, while the package in the default channel is \(as of 9\/9\/16\) for the lz4 Python bindings \(hence the \'\-bin\' suffix of this package\)


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lz4-bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lz4-bin/README.html