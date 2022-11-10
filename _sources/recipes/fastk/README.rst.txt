:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastk'
.. highlight: bash

fastk
=====

.. conda:recipe:: fastk
   :replaces_section_title:
   :noindex:

   A tool.

   :homepage: https://github.com/thegenemyers/FASTK
   :license: MIT
   :recipe: /`fastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastk/meta.yaml>`_

   


.. conda:package:: fastk

   |downloads_fastk| |docker_fastk|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=7.86.0,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastk

   and update with::

      conda update fastk

   or use the docker container::

      docker pull quay.io/biocontainers/fastk:<tag>

   (see `fastk/tags`_ for valid values for ``<tag>``)


.. |downloads_fastk| image:: https://img.shields.io/conda/dn/bioconda/fastk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastk
   :alt:   (downloads)
.. |docker_fastk| image:: https://quay.io/repository/biocontainers/fastk/status
   :target: https://quay.io/repository/biocontainers/fastk
.. _`fastk/tags`: https://quay.io/repository/biocontainers/fastk?tab=tags


.. raw:: html

    <script>
        var package = "fastk";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastk/README.html