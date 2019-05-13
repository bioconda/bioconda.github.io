:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-seq-pan'
.. highlight: bash

seq-seq-pan
===========

.. conda:recipe:: seq-seq-pan
   :replaces_section_title:

   seq\-seq\-pan is a workflow for the SEQuential alignment of SEQuences to build a PAN\-genome data structure and a whole\-genome\-alignment.

   :homepage: https://gitlab.com/chrjan/seq-seq-pan
   :license: FreeBSD
   :recipe: /`seq-seq-pan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan/meta.yaml>`_

   


.. conda:package:: seq-seq-pan

   |downloads_seq-seq-pan| |docker_seq-seq-pan|

   :versions: 1.0.1-1, 1.0.1-0, 1.0.0-1, 1.0.0-0
   
   :depends argparse: 
   :depends biopython: 1.69
   :depends blat: 35
   :depends mauvealigner: 1.2.0
   :depends openjdk: 
   :depends python: >=3.5,<3.6.0a0
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq-seq-pan

   and update with::

      conda update seq-seq-pan

   or use the docker container::

      docker pull quay.io/biocontainers/seq-seq-pan:<tag>

   (see `seq-seq-pan/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-seq-pan| image:: https://img.shields.io/conda/dn/bioconda/seq-seq-pan.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-seq-pan
   :alt:   (downloads)
.. |docker_seq-seq-pan| image:: https://quay.io/repository/biocontainers/seq-seq-pan/status
   :target: https://quay.io/repository/biocontainers/seq-seq-pan
.. _`seq-seq-pan/tags`: https://quay.io/repository/biocontainers/seq-seq-pan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-seq-pan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-seq-pan/README.html