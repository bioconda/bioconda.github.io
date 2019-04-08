:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermikit'
.. highlight: bash

fermikit
========

.. conda:recipe:: fermikit
   :replaces_section_title:

   FermiKit is a de novo assembly based variant calling pipeline for deep Illumina resequencing data.

   :homepage: https://github.com/lh3/fermikit
   :license: Unknown
   :recipe: /`fermikit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit/meta.yaml>`_

   


.. conda:package:: fermikit

   |downloads_fermikit| |docker_fermikit|

   :versions: 0.14.dev1-1, 0.14.dev1-0
   
   :depends bfc: ==r181
   :depends bwa: ==0.7.15
   :depends fermi2: ==r193
   :depends htsbox: ==r327
   :depends perl: 5.22.0*
   :depends ropebwt2: ==r187
   :depends seqtk: ==r82
   :depends trimadap: ==r10
   :depends zlib: 1.2.11*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermikit

   and update with::

      conda update fermikit

   or use the docker container::

      docker pull quay.io/biocontainers/fermikit:<tag>

   (see `fermikit/tags`_ for valid values for ``<tag>``)


.. |downloads_fermikit| image:: https://img.shields.io/conda/dn/bioconda/fermikit.svg?style=flat
   :alt:   (downloads)
.. |docker_fermikit| image:: https://quay.io/repository/biocontainers/fermikit/status
   :target: https://quay.io/repository/biocontainers/fermikit
.. _`fermikit/tags`: https://quay.io/repository/biocontainers/fermikit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermikit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermikit/README.html