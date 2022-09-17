:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamscale'
.. highlight: bash

bamscale
========

.. conda:recipe:: bamscale
   :replaces_section_title:
   :noindex:

   BAMscale is a one\-step tool for either 1\) quantifying and normalizing the coverage of peaks

   :homepage: https://github.com/ncbi/BAMscale
   :license: Public Domain
   :recipe: /`bamscale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamscale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamscale/meta.yaml>`_

   BAMscale is a one\-step tool for either 1\) quantifying and normalizing the coverage of peaks or 2\)
   generated scaled BigWig files for easy visualization of commonly used DNA\-seq capture based methods.


.. conda:package:: bamscale

   |downloads_bamscale| |docker_bamscale|

   :versions:
      
      

      ``0.0.5-6``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libcurl: ``>=7.83.1,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamscale

   and update with::

      conda update bamscale

   or use the docker container::

      docker pull quay.io/biocontainers/bamscale:<tag>

   (see `bamscale/tags`_ for valid values for ``<tag>``)


.. |downloads_bamscale| image:: https://img.shields.io/conda/dn/bioconda/bamscale.svg?style=flat
   :target: https://anaconda.org/bioconda/bamscale
   :alt:   (downloads)
.. |docker_bamscale| image:: https://quay.io/repository/biocontainers/bamscale/status
   :target: https://quay.io/repository/biocontainers/bamscale
.. _`bamscale/tags`: https://quay.io/repository/biocontainers/bamscale?tab=tags


.. raw:: html

    <script>
        var package = "bamscale";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamscale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamscale/README.html