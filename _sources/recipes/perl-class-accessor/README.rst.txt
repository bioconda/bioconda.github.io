:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-accessor'
.. highlight: bash

perl-class-accessor
===================

.. conda:recipe:: perl-class-accessor
   :replaces_section_title:

   Automated accessor generation

   :homepage: http://metacpan.org/pod/Class::Accessor
   :license: perl_5
   :recipe: /`perl-class-accessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-accessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-accessor/meta.yaml>`_

   


.. conda:package:: perl-class-accessor

   |downloads_perl-class-accessor| |docker_perl-class-accessor|

   :versions: 0.51-0, 0.34-1, 0.34-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-accessor

   and update with::

      conda update perl-class-accessor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-class-accessor:<tag>

   (see `perl-class-accessor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-accessor| image:: https://img.shields.io/conda/dn/bioconda/perl-class-accessor.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-accessor| image:: https://quay.io/repository/biocontainers/perl-class-accessor/status
   :target: https://quay.io/repository/biocontainers/perl-class-accessor
.. _`perl-class-accessor/tags`: https://quay.io/repository/biocontainers/perl-class-accessor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-accessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-accessor/README.html