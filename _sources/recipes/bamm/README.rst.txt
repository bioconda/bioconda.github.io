:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamm'
.. highlight: bash

bamm
====

.. conda:recipe:: bamm
   :replaces_section_title:
   :noindex:

   Metagenomics\-focused BAM file manipulation

   :homepage: https://github.com/Ecogenomics/BamM
   :license: LGPL-3.0
   :recipe: /`bamm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamm/meta.yaml>`_

   


.. conda:package:: bamm

   |downloads_bamm| |docker_bamm|

   :versions:
      
      

      ``1.7.3-8``,  ``1.7.3-7``,  ``1.7.3-6``,  ``1.7.3-5``,  ``1.7.3-4``,  ``1.7.3-3``,  ``1.7.3-2``,  ``1.7.3-1``,  ``1.7.3-0``

      

   
   :depends bwa: ``>=0.7.12``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: ``>=1.3.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamm

   and update with::

      conda update bamm

   or use the docker container::

      docker pull quay.io/biocontainers/bamm:<tag>

   (see `bamm/tags`_ for valid values for ``<tag>``)


.. |downloads_bamm| image:: https://img.shields.io/conda/dn/bioconda/bamm.svg?style=flat
   :target: https://anaconda.org/bioconda/bamm
   :alt:   (downloads)
.. |docker_bamm| image:: https://quay.io/repository/biocontainers/bamm/status
   :target: https://quay.io/repository/biocontainers/bamm
.. _`bamm/tags`: https://quay.io/repository/biocontainers/bamm?tab=tags


.. raw:: html

    <script>
        var package = "bamm";
        var versions = ["1.7.3","1.7.3","1.7.3","1.7.3","1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamm/README.html