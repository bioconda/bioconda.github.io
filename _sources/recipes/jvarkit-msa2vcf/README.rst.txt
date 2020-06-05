:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-msa2vcf'
.. highlight: bash

jvarkit-msa2vcf
===============

.. conda:recipe:: jvarkit-msa2vcf
   :replaces_section_title:
   :noindex:

   Writes a VCF from a multiple sequence alignment \(MSA\) in CLUSTAW or a FASTA format

   :homepage: https://lindenb.github.io/jvarkit/MsaToVcf.html
   :license: MIT
   :recipe: /`jvarkit-msa2vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-msa2vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-msa2vcf/meta.yaml>`_

   


.. conda:package:: jvarkit-msa2vcf

   |downloads_jvarkit-msa2vcf| |docker_jvarkit-msa2vcf|

   :versions:
      
      

      ``201904251722-1``,  ``201904251722-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jvarkit-msa2vcf

   and update with::

      conda update jvarkit-msa2vcf

   or use the docker container::

      docker pull quay.io/biocontainers/jvarkit-msa2vcf:<tag>

   (see `jvarkit-msa2vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit-msa2vcf| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-msa2vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-msa2vcf
   :alt:   (downloads)
.. |docker_jvarkit-msa2vcf| image:: https://quay.io/repository/biocontainers/jvarkit-msa2vcf/status
   :target: https://quay.io/repository/biocontainers/jvarkit-msa2vcf
.. _`jvarkit-msa2vcf/tags`: https://quay.io/repository/biocontainers/jvarkit-msa2vcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-msa2vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-msa2vcf/README.html