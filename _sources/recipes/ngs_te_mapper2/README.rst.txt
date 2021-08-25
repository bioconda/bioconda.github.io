:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs_te_mapper2'
.. highlight: bash

ngs_te_mapper2
==============

.. conda:recipe:: ngs_te_mapper2
   :replaces_section_title:
   :noindex:

   A program to identify transposable element insertions using next generation sequencing data.

   :homepage: https://github.com/bergmanlab/ngs_te_mapper2
   :license: BSD
   :recipe: /`ngs_te_mapper2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2/meta.yaml>`_

   


.. conda:package:: ngs_te_mapper2

   |downloads_ngs_te_mapper2| |docker_ngs_te_mapper2|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends biopython: 
   :depends bwa: 
   :depends minimap2: 
   :depends numpy: 
   :depends pip: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends repeatmasker: ``4.0.7.*``
   :depends samtools: ``>=1.9``
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs_te_mapper2

   and update with::

      conda update ngs_te_mapper2

   or use the docker container::

      docker pull quay.io/biocontainers/ngs_te_mapper2:<tag>

   (see `ngs_te_mapper2/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs_te_mapper2| image:: https://img.shields.io/conda/dn/bioconda/ngs_te_mapper2.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs_te_mapper2
   :alt:   (downloads)
.. |docker_ngs_te_mapper2| image:: https://quay.io/repository/biocontainers/ngs_te_mapper2/status
   :target: https://quay.io/repository/biocontainers/ngs_te_mapper2
.. _`ngs_te_mapper2/tags`: https://quay.io/repository/biocontainers/ngs_te_mapper2?tab=tags


.. raw:: html

    <script>
        var package = "ngs_te_mapper2";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs_te_mapper2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs_te_mapper2/README.html