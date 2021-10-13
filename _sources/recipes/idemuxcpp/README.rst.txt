:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idemuxcpp'
.. highlight: bash

idemuxcpp
=========

.. conda:recipe:: idemuxcpp
   :replaces_section_title:
   :noindex:

   A Lexogen tool for demultiplexing and index error correcting fastq files. Works with Lexogen i7\, i5 and i1 barcodes.

   :homepage: https://github.com/Lexogen-Tools/idemuxcpp
   :license: OTHER / custom
   :recipe: /`idemuxcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp/meta.yaml>`_

   


.. conda:package:: idemuxcpp

   |downloads_idemuxcpp| |docker_idemuxcpp|

   :versions:
      
      

      ``0.1.9-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install idemuxcpp

   and update with::

      conda update idemuxcpp

   or use the docker container::

      docker pull quay.io/biocontainers/idemuxcpp:<tag>

   (see `idemuxcpp/tags`_ for valid values for ``<tag>``)


.. |downloads_idemuxcpp| image:: https://img.shields.io/conda/dn/bioconda/idemuxcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/idemuxcpp
   :alt:   (downloads)
.. |docker_idemuxcpp| image:: https://quay.io/repository/biocontainers/idemuxcpp/status
   :target: https://quay.io/repository/biocontainers/idemuxcpp
.. _`idemuxcpp/tags`: https://quay.io/repository/biocontainers/idemuxcpp?tab=tags


.. raw:: html

    <script>
        var package = "idemuxcpp";
        var versions = ["0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idemuxcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idemuxcpp/README.html