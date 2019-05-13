:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-clone-pp'
.. highlight: bash

perl-clone-pp
=============

.. conda:recipe:: perl-clone-pp
   :replaces_section_title:

   Recursively copy Perl datatypes

   :homepage: http://metacpan.org/pod/Clone::PP
   :license: perl_5
   :recipe: /`perl-clone-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp/meta.yaml>`_

   


.. conda:package:: perl-clone-pp

   |downloads_perl-clone-pp| |docker_perl-clone-pp|

   :versions: 1.07-1, 1.07-0, 1.06-1, 1.06-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-apache-test: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-clone-pp

   and update with::

      conda update perl-clone-pp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-clone-pp:<tag>

   (see `perl-clone-pp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-clone-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-clone-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-clone-pp
   :alt:   (downloads)
.. |docker_perl-clone-pp| image:: https://quay.io/repository/biocontainers/perl-clone-pp/status
   :target: https://quay.io/repository/biocontainers/perl-clone-pp
.. _`perl-clone-pp/tags`: https://quay.io/repository/biocontainers/perl-clone-pp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone-pp/README.html