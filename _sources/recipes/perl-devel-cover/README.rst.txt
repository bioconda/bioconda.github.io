:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-cover'
.. highlight: bash

perl-devel-cover
================

.. conda:recipe:: perl-devel-cover
   :replaces_section_title:

   Code coverage metrics for Perl

   :homepage: http://www.pjcj.net/perl.html
   :license: perl_5
   :recipe: /`perl-devel-cover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cover/meta.yaml>`_

   


.. conda:package:: perl-devel-cover

   |downloads_perl-devel-cover| |docker_perl-devel-cover|

   :versions: 1.33-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-b-debug: 
   :depends perl-class-xsaccessor: 
   :depends perl-digest-md5: 
   :depends perl-html-parser: 
   :depends perl-json-maybexs: 
   :depends perl-moo: 
   :depends perl-namespace-clean: 
   :depends perl-parallel-iterator: 
   :depends perl-pod-coverage: 
   :depends perl-sereal-decoder: 
   :depends perl-sereal-encoder: 
   :depends perl-storable: 
   :depends perl-template-toolkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-cover

   and update with::

      conda update perl-devel-cover

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-cover:<tag>

   (see `perl-devel-cover/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-cover| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-cover.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-cover
   :alt:   (downloads)
.. |docker_perl-devel-cover| image:: https://quay.io/repository/biocontainers/perl-devel-cover/status
   :target: https://quay.io/repository/biocontainers/perl-devel-cover
.. _`perl-devel-cover/tags`: https://quay.io/repository/biocontainers/perl-devel-cover?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-cover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-cover/README.html