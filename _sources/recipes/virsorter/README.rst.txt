:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virsorter'
.. highlight: bash

virsorter
=========

.. conda:recipe:: virsorter
   :replaces_section_title:

   Mining viral signal from microbial genomic data.

   :homepage: https://github.com/simroux/VirSorter
   :license: GPL / GPL-2.0
   :recipe: /`virsorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.985`

   


.. conda:package:: virsorter

   |downloads_virsorter| |docker_virsorter|

   :versions: 1.0.5-3, 1.0.5-2, 1.0.5-1, 1.0.5-0
   
   :depends blast: 
   :depends diamond: 0.9.14.*
   :depends hmmer: 3.1b2.*
   :depends libgcc-ng: >=7.3.0
   :depends mcl: 14.137.*
   :depends metagene_annotator: 
   :depends muscle: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: >=1.7.2
   :depends perl-file-which: 
   :depends perl-list-moreutils: 
   :depends perl-parallel-forkmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virsorter

   and update with::

      conda update virsorter

   or use the docker container::

      docker pull quay.io/biocontainers/virsorter:<tag>

   (see `virsorter/tags`_ for valid values for ``<tag>``)


.. |downloads_virsorter| image:: https://img.shields.io/conda/dn/bioconda/virsorter.svg?style=flat
   :target: https://anaconda.org/bioconda/virsorter
   :alt:   (downloads)
.. |docker_virsorter| image:: https://quay.io/repository/biocontainers/virsorter/status
   :target: https://quay.io/repository/biocontainers/virsorter
.. _`virsorter/tags`: https://quay.io/repository/biocontainers/virsorter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virsorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virsorter/README.html