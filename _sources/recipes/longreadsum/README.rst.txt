:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longreadsum'
.. highlight: bash

longreadsum
===========

.. conda:recipe:: longreadsum
   :replaces_section_title:
   :noindex:

   Long read sequencing data quality control tool

   :homepage: https://github.com/WGLab/LongReadSum
   :documentation: https://github.com/WGLab/LongReadSum#readme
   
   :license: MIT
   :recipe: /`longreadsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longreadsum/meta.yaml>`_

   A fast and flexible QC tool for long read sequencing data.



.. conda:package:: longreadsum

   |downloads_longreadsum| |docker_longreadsum|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends hdf5: ``>=1.12.1,<1.12.2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends plotly: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xorg-libx11: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install longreadsum

   and update with::

      conda update longreadsum

   or use the docker container::

      docker pull quay.io/biocontainers/longreadsum:<tag>

   (see `longreadsum/tags`_ for valid values for ``<tag>``)


.. |downloads_longreadsum| image:: https://img.shields.io/conda/dn/bioconda/longreadsum.svg?style=flat
   :target: https://anaconda.org/bioconda/longreadsum
   :alt:   (downloads)
.. |docker_longreadsum| image:: https://quay.io/repository/biocontainers/longreadsum/status
   :target: https://quay.io/repository/biocontainers/longreadsum
.. _`longreadsum/tags`: https://quay.io/repository/biocontainers/longreadsum?tab=tags


.. raw:: html

    <script>
        var package = "longreadsum";
        var versions = ["1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longreadsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longreadsum/README.html