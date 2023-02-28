:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyluce'
.. highlight: bash

phyluce
=======

.. conda:recipe:: phyluce
   :replaces_section_title:
   :noindex:

   Software for UCE \(and general\) phylogenomics.

   :homepage: https://github.com/faircloth-lab/phyluce
   :license: BSD
   :recipe: /`phyluce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyluce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyluce/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv646`

   


.. conda:package:: phyluce

   |downloads_phyluce| |docker_phyluce|

   :versions:
      
      

      ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``

      

   
   :depends abyss: ``1.5.*``
   :depends bcftools: 
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie: 
   :depends bwa: 
   :depends bx-python: 
   :depends dendropy: ``3.*``
   :depends gatk: ``3.8.*``
   :depends gblocks: 
   :depends illumiprocessor: 
   :depends itero: 
   :depends lastz: 
   :depends mafft: 
   :depends muscle: 
   :depends pandas: 
   :depends picard: 
   :depends pysam: 
   :depends python: ``<3``
   :depends pyvcf: 
   :depends raxml: 
   :depends samtools: 
   :depends seqtk: 
   :depends spades: ``3.12.*``
   :depends trimal: 
   :depends trinity: ``2.1.*``
   :depends velvet: ``1.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyluce

   and update with::

      conda update phyluce

   or use the docker container::

      docker pull quay.io/biocontainers/phyluce:<tag>

   (see `phyluce/tags`_ for valid values for ``<tag>``)


.. |downloads_phyluce| image:: https://img.shields.io/conda/dn/bioconda/phyluce.svg?style=flat
   :target: https://anaconda.org/bioconda/phyluce
   :alt:   (downloads)
.. |docker_phyluce| image:: https://quay.io/repository/biocontainers/phyluce/status
   :target: https://quay.io/repository/biocontainers/phyluce
.. _`phyluce/tags`: https://quay.io/repository/biocontainers/phyluce?tab=tags


.. raw:: html

    <script>
        var package = "phyluce";
        var versions = ["1.6.8","1.6.7","1.6.6","1.6.5","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyluce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyluce/README.html