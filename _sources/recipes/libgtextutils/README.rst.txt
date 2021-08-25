:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgtextutils'
.. highlight: bash

libgtextutils
=============

.. conda:recipe:: libgtextutils
   :replaces_section_title:
   :noindex:

   Gordon Text utils Library

   :homepage: https://github.com/agordon/libgtextutils
   :license: AGPL
   :recipe: /`libgtextutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils/meta.yaml>`_

   


.. conda:package:: libgtextutils

   |downloads_libgtextutils| |docker_libgtextutils|

   :versions:
      
      

      ``0.7-7``,  ``0.7-6``,  ``0.7-5``,  ``0.7-4``,  ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libgtextutils

   and update with::

      conda update libgtextutils

   or use the docker container::

      docker pull quay.io/biocontainers/libgtextutils:<tag>

   (see `libgtextutils/tags`_ for valid values for ``<tag>``)


.. |downloads_libgtextutils| image:: https://img.shields.io/conda/dn/bioconda/libgtextutils.svg?style=flat
   :target: https://anaconda.org/bioconda/libgtextutils
   :alt:   (downloads)
.. |docker_libgtextutils| image:: https://quay.io/repository/biocontainers/libgtextutils/status
   :target: https://quay.io/repository/biocontainers/libgtextutils
.. _`libgtextutils/tags`: https://quay.io/repository/biocontainers/libgtextutils?tab=tags


.. raw:: html

    <script>
        var package = "libgtextutils";
        var versions = ["0.7","0.7","0.7","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgtextutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgtextutils/README.html