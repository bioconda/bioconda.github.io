:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-amrfinderplus'
.. highlight: bash

ncbi-amrfinderplus
==================

.. conda:recipe:: ncbi-amrfinderplus
   :replaces_section_title:

   AMRFinderPlus finds antimicrobial resistance and other genes in protein or nucleotide sequences.

   :homepage: https://github.com/ncbi/amr/wiki
   :license: Public Domain
   :recipe: /`ncbi-amrfinderplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus/meta.yaml>`_

   This software and the accompanying database are designed to
   find acquired antimicrobial resistance genes in bacterial protein or
   nucleotide sequences as well as known point mutations for several taxa. With
   AMRFinderPlus we have added select members of additional classes of genes
   such as virulence factors\, biocide\, heat\, acid\, and metal resistance genes.



.. conda:package:: ncbi-amrfinderplus

   |downloads_ncbi-amrfinderplus| |docker_ncbi-amrfinderplus|

   :versions: 3.8.4-0, 3.6.15-0, 3.6.10-0, 3.6.7-0, 3.6.4-0, 3.2.3-0, 3.2.1-0, 3.1.1b-0, 3.0.12-0, 3.0.11-0, 3.0.9-0, 3.0.8-0
   
   :depends blast: >=2.9
   :depends curl: 
   :depends hmmer: >=3.2
   :depends libcurl: >=7.64.1,<8.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-amrfinderplus

   and update with::

      conda update ncbi-amrfinderplus

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-amrfinderplus:<tag>

   (see `ncbi-amrfinderplus/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-amrfinderplus| image:: https://img.shields.io/conda/dn/bioconda/ncbi-amrfinderplus.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-amrfinderplus
   :alt:   (downloads)
.. |docker_ncbi-amrfinderplus| image:: https://quay.io/repository/biocontainers/ncbi-amrfinderplus/status
   :target: https://quay.io/repository/biocontainers/ncbi-amrfinderplus
.. _`ncbi-amrfinderplus/tags`: https://quay.io/repository/biocontainers/ncbi-amrfinderplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html