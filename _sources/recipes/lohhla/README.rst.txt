:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lohhla'
.. highlight: bash

lohhla
======

.. conda:recipe:: lohhla
   :replaces_section_title:

   A computational tool to evaluate HLA loss using next\-generation sequencing data.

   :homepage: https://bitbucket.org/mcgranahanlab/lohhla
   :license: UNKNOWN
   :recipe: /`lohhla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla/meta.yaml>`_

   


.. conda:package:: lohhla

   |downloads_lohhla| |docker_lohhla|

   :versions: 20171108-1, 20171108-0
   
   :depends bedtools: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends novoalign: 
   :depends picard: 
   :depends r-base: 
   :depends r-beeswarm: 
   :depends r-optparse: 
   :depends r-seqinr: 
   :depends r-zoo: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lohhla

   and update with::

      conda update lohhla

   or use the docker container::

      docker pull quay.io/biocontainers/lohhla:<tag>

   (see `lohhla/tags`_ for valid values for ``<tag>``)


.. |downloads_lohhla| image:: https://img.shields.io/conda/dn/bioconda/lohhla.svg?style=flat
   :alt:   (downloads)
.. |docker_lohhla| image:: https://quay.io/repository/biocontainers/lohhla/status
   :target: https://quay.io/repository/biocontainers/lohhla
.. _`lohhla/tags`: https://quay.io/repository/biocontainers/lohhla?tab=tags






Notes
-----
The tool is available as command \`lohhla\`.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lohhla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lohhla/README.html