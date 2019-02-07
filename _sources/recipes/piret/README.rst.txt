.. title:: Package Recipe 'piret'
.. highlight: bash


piret
=====

.. conda:recipe:: piret
   :replaces_section_title:

   A tool for conducting RNA seq analysis.

   :homepage: https://github.com/mshakya/PyPiReT
   :license: GPLV2
   :recipe: /`piret <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret/meta.yaml>`_
   :links: biotools: :biotools:`piret`

   


.. conda:package:: piret

   |downloads_piret| |docker_piret|

   :versions: 0.3.4

   :depends: :conda:package:`argparse`  :conda:package:`bamtools` >=2.4.0 :conda:package:`bioconductor-deseq2` >=1.20.0 :conda:package:`bioconductor-edger` >=3.22.5 :conda:package:`biopython` >=1.7.0 :conda:package:`hisat2` >=2.0.5 :conda:package:`luigi` >=2.7.9 :conda:package:`pandas` >=0.23.4 :conda:package:`plumbum` >=1.6.0 :conda:package:`python`  :conda:package:`r`  :conda:package:`samtools` >=1.3.1 :conda:package:`stringtie` >=1.3.3 :conda:package:`subread` >=1.5.0 

   :required~by: |required_by_piret|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piret

   and update with::

      conda update piret

   or use the docker container::

      docker pull quay.io/repository/biocontainers/piret


.. |required_by_piret| conda:required_by:: piret
.. |downloads_piret| image:: https://img.shields.io/conda/dn/bioconda/piret.svg?style=flat
   :alt:   (downloads)
.. |docker_piret| image:: https://quay.io/repository/biocontainers/piret/status
   :target: https://quay.io/repository/biocontainers/piret







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piret/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piret/README.html

