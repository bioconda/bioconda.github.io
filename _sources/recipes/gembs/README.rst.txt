:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gembs'
.. highlight: bash

gembs
=====

.. conda:recipe:: gembs
   :replaces_section_title:
   :noindex:

   gemBS is a bioinformatics pipeline designed for high throughput analysis of DNA methylation from Whole Genome Bisulfite Sequencing data \(WGBS\).

   :homepage: https://github.com/heathsc/gemBS
   :license: GPL-3.0
   :recipe: /`gembs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: gembs

   |downloads_gembs| |docker_gembs|

   :versions:
      
      

      ``3.2.0-5``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``

      

   
   :depends bcftools: 
   :depends bs_call: ``2.02.*``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gem3-mapper: ``3.6.1.*``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends matplotlib: 
   :depends multiprocess: 
   :depends pigz: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-wigtobigwig: 
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gembs

   and update with::

      conda update gembs

   or use the docker container::

      docker pull quay.io/biocontainers/gembs:<tag>

   (see `gembs/tags`_ for valid values for ``<tag>``)


.. |downloads_gembs| image:: https://img.shields.io/conda/dn/bioconda/gembs.svg?style=flat
   :target: https://anaconda.org/bioconda/gembs
   :alt:   (downloads)
.. |docker_gembs| image:: https://quay.io/repository/biocontainers/gembs/status
   :target: https://quay.io/repository/biocontainers/gembs
.. _`gembs/tags`: https://quay.io/repository/biocontainers/gembs?tab=tags


.. raw:: html

    <script>
        var package = "gembs";
        var versions = ["3.2.0","3.2.0","3.2.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gembs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gembs/README.html