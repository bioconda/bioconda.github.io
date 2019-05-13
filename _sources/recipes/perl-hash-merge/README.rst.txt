:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hash-merge'
.. highlight: bash

perl-hash-merge
===============

.. conda:recipe:: perl-hash-merge
   :replaces_section_title:

   Merges arbitrarily deep hashes into a single hash

   :homepage: http://metacpan.org/pod/Hash::Merge
   :license: perl_5
   :recipe: /`perl-hash-merge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-merge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-merge/meta.yaml>`_

   


.. conda:package:: perl-hash-merge

   |downloads_perl-hash-merge| |docker_perl-hash-merge|

   :versions: 0.300-0, 0.200-1, 0.200-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-clone-choose: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-hash-merge

   and update with::

      conda update perl-hash-merge

   or use the docker container::

      docker pull quay.io/biocontainers/perl-hash-merge:<tag>

   (see `perl-hash-merge/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hash-merge| image:: https://img.shields.io/conda/dn/bioconda/perl-hash-merge.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hash-merge
   :alt:   (downloads)
.. |docker_perl-hash-merge| image:: https://quay.io/repository/biocontainers/perl-hash-merge/status
   :target: https://quay.io/repository/biocontainers/perl-hash-merge
.. _`perl-hash-merge/tags`: https://quay.io/repository/biocontainers/perl-hash-merge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hash-merge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hash-merge/README.html