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

   :versions: 20171108

   :depends: :conda:package:`bedtools`  :conda:package:`bioconductor-biostrings`  :conda:package:`bioconductor-rsamtools`  :conda:package:`novoalign`  :conda:package:`picard`  :conda:package:`r-base`  :conda:package:`r-beeswarm`  :conda:package:`r-optparse`  :conda:package:`r-seqinr`  :conda:package:`r-zoo`  :conda:package:`samtools`  

   :required~by: |required_by_lohhla|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lohhla

   and update with::

      conda update lohhla

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lohhla


.. |required_by_lohhla| conda:required_by:: lohhla
.. |downloads_lohhla| image:: https://img.shields.io/conda/dn/bioconda/lohhla.svg?style=flat
   :alt:   (downloads)
.. |docker_lohhla| image:: https://quay.io/repository/biocontainers/lohhla/status
   :target: https://quay.io/repository/biocontainers/lohhla






Notes
-----
The tool is available as command \`lohhla\`.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lohhla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lohhla/README.html

