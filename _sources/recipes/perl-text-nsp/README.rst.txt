:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-nsp'
.. highlight: bash

perl-text-nsp
=============

.. conda:recipe:: perl-text-nsp
   :replaces_section_title:

   Extract collocations and Ngrams from text

   :homepage: http://metacpan.org/pod/Text::NSP
   :license: open_source
   :recipe: /`perl-text-nsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp/meta.yaml>`_

   


.. conda:package:: perl-text-nsp

   |downloads_perl-text-nsp| |docker_perl-text-nsp|

   :versions: 1.31-2, 1.31-1, 1.31-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-nsp

   and update with::

      conda update perl-text-nsp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-text-nsp:<tag>

   (see `perl-text-nsp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-nsp| image:: https://img.shields.io/conda/dn/bioconda/perl-text-nsp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-nsp| image:: https://quay.io/repository/biocontainers/perl-text-nsp/status
   :target: https://quay.io/repository/biocontainers/perl-text-nsp
.. _`perl-text-nsp/tags`: https://quay.io/repository/biocontainers/perl-text-nsp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-nsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-nsp/README.html