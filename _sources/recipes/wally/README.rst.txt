:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wally'
.. highlight: bash

wally
=====

.. conda:recipe:: wally
   :replaces_section_title:
   :noindex:

   Visualization of aligned sequencing reads and genomic variants.

   :homepage: https://github.com/tobiasrausch/wally
   :license: BSD / BSD-3-Clause
   :recipe: /`wally <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wally>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wally/meta.yaml>`_

   


.. conda:package:: wally

   |downloads_wally| |docker_wally|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libopencv: ``>=4.5.3``
   :depends libopencv: ``>=4.5.5,<4.5.6.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wally

   and update with::

      conda update wally

   or use the docker container::

      docker pull quay.io/biocontainers/wally:<tag>

   (see `wally/tags`_ for valid values for ``<tag>``)


.. |downloads_wally| image:: https://img.shields.io/conda/dn/bioconda/wally.svg?style=flat
   :target: https://anaconda.org/bioconda/wally
   :alt:   (downloads)
.. |docker_wally| image:: https://quay.io/repository/biocontainers/wally/status
   :target: https://quay.io/repository/biocontainers/wally
.. _`wally/tags`: https://quay.io/repository/biocontainers/wally?tab=tags


.. raw:: html

    <script>
        var package = "wally";
        var versions = ["0.3.1","0.3.1","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wally/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wally/README.html