:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telr'
.. highlight: bash

telr
====

.. conda:recipe:: telr
   :replaces_section_title:
   :noindex:

   A a fast non\-reference transposable element \(TE\) detector from long read sequencing data \(PacBio or Oxford Nanopore\).

   :homepage: https://github.com/bergmanlab/telr
   :license: BSD
   :recipe: /`telr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telr/meta.yaml>`_

   


.. conda:package:: telr

   |downloads_telr| |docker_telr|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``

      

   
   :depends bcftools: ``1.9.*``
   :depends bedtools: 
   :depends biopython: 
   :depends flye: 
   :depends minimap2: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pandas: ``>=1.0.0``
   :depends pip: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends repeatmasker: ``4.0.7.*``
   :depends rmblast: ``2.6.0.*``
   :depends samtools: ``1.9.*``
   :depends seqtk: 
   :depends sniffles: ``>=1.0.12``
   :depends wtdbg: ``>=2.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install telr

   and update with::

      conda update telr

   or use the docker container::

      docker pull quay.io/biocontainers/telr:<tag>

   (see `telr/tags`_ for valid values for ``<tag>``)


.. |downloads_telr| image:: https://img.shields.io/conda/dn/bioconda/telr.svg?style=flat
   :target: https://anaconda.org/bioconda/telr
   :alt:   (downloads)
.. |docker_telr| image:: https://quay.io/repository/biocontainers/telr/status
   :target: https://quay.io/repository/biocontainers/telr
.. _`telr/tags`: https://quay.io/repository/biocontainers/telr?tab=tags


.. raw:: html

    <script>
        var package = "telr";
        var versions = ["0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telr/README.html