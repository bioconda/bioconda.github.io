:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacluster'
.. highlight: bash

metacluster
===========

.. conda:recipe:: metacluster
   :replaces_section_title:
   :noindex:

   MetaCluster5.1 is a new software for binning short pair\-end reads

   :homepage: http://i.cs.hku.hk/~alse/MetaCluster/
   :license: GPLv2
   :recipe: /`metacluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts397`

   MetaCluster5.1 is an unsupervised binning method that can \(1\) samples with
   low\-abundance species\, or \(2\) samples \(even with high\-abundance\) with many
   extremely\-low\-abundance species. The input file should be in fasta format.
   Every odd\-number read and its next read are supposed to be pair\-end reads.



.. conda:package:: metacluster

   |downloads_metacluster| |docker_metacluster|

   :versions:
      
      

      ``5.1-2``,  ``5.1-1``,  ``5.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metacluster

   and update with::

      conda update metacluster

   or use the docker container::

      docker pull quay.io/biocontainers/metacluster:<tag>

   (see `metacluster/tags`_ for valid values for ``<tag>``)


.. |downloads_metacluster| image:: https://img.shields.io/conda/dn/bioconda/metacluster.svg?style=flat
   :target: https://anaconda.org/bioconda/metacluster
   :alt:   (downloads)
.. |docker_metacluster| image:: https://quay.io/repository/biocontainers/metacluster/status
   :target: https://quay.io/repository/biocontainers/metacluster
.. _`metacluster/tags`: https://quay.io/repository/biocontainers/metacluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacluster/README.html