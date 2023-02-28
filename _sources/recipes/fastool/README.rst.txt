:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastool'
.. highlight: bash

fastool
=======

.. conda:recipe:: fastool
   :replaces_section_title:
   :noindex:

   A simple and quick tool to read huge FastQ and FastA files \(both normal and gzipped\) and manipulate them.

   :homepage: https://github.com/fstrozzi/Fastool
   :license: MIT
   :recipe: /`fastool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool/meta.yaml>`_
   :links: biotools: :biotools:`Fastool`

   


.. conda:package:: fastool

   |downloads_fastool| |docker_fastool|

   :versions:
      
      

      ``0.1.4-6``,  ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastool

   and update with::

      conda update fastool

   or use the docker container::

      docker pull quay.io/biocontainers/fastool:<tag>

   (see `fastool/tags`_ for valid values for ``<tag>``)


.. |downloads_fastool| image:: https://img.shields.io/conda/dn/bioconda/fastool.svg?style=flat
   :target: https://anaconda.org/bioconda/fastool
   :alt:   (downloads)
.. |docker_fastool| image:: https://quay.io/repository/biocontainers/fastool/status
   :target: https://quay.io/repository/biocontainers/fastool
.. _`fastool/tags`: https://quay.io/repository/biocontainers/fastool?tab=tags


.. raw:: html

    <script>
        var package = "fastool";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastool/README.html