:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlst'
.. highlight: bash

mlst
====

.. conda:recipe:: mlst
   :replaces_section_title:

   Scan contig files against PubMLST typing schemes

   :homepage: https://github.com/tseemann/mlst
   :license: GPL / GPL-2.0
   :recipe: /`mlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst/meta.yaml>`_
   :links: biotools: :biotools:`mlst`

   


.. conda:package:: mlst

   |downloads_mlst| |docker_mlst|

   :versions: 2.17.6-0, 2.16.4-0, 2.16.2-1, 2.16.2-0, 2.16.1-0, 2.16-0, 2.15.2-0, 2.15.1-0, 2.15-0, 2.14-0, 2.13-0, 2.12-0, 2.11-0, 2.10-1, 2.10-0, 2.9-1, 2.9-0, 2.6-0
   
   :depends any2fasta: 
   :depends blast: >=2.9.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: >=1.7.2
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-moo: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mlst

   and update with::

      conda update mlst

   or use the docker container::

      docker pull quay.io/biocontainers/mlst:<tag>

   (see `mlst/tags`_ for valid values for ``<tag>``)


.. |downloads_mlst| image:: https://img.shields.io/conda/dn/bioconda/mlst.svg?style=flat
   :target: https://anaconda.org/bioconda/mlst
   :alt:   (downloads)
.. |docker_mlst| image:: https://quay.io/repository/biocontainers/mlst/status
   :target: https://quay.io/repository/biocontainers/mlst
.. _`mlst/tags`: https://quay.io/repository/biocontainers/mlst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlst/README.html