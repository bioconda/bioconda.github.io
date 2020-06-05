:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par-packer'
.. highlight: bash

perl-par-packer
===============

.. conda:recipe:: perl-par-packer/1.036
   :replaces_section_title:
   :noindex:

   PAR Packager

   :homepage: http://metacpan.org/pod/PAR::Packer
   :license: perl_5
   :recipe: /`perl-par-packer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer>`_/`1.036 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036/meta.yaml>`_

   


.. conda:package:: perl-par-packer

   |downloads_perl-par-packer| |docker_perl-par-packer|

   :versions:
      
      

      ``1.036-2``,  ``1.036-1``,  ``1.036-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-getopt-argvfile: 
   :depends perl-getopt-long: 
   :depends perl-module-scandeps: 
   :depends perl-par: 
   :depends perl-par-dist: 
   :depends perl-text-parsewords: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-par-packer

   and update with::

      conda update perl-par-packer

   or use the docker container::

      docker pull quay.io/biocontainers/perl-par-packer:<tag>

   (see `perl-par-packer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-par-packer| image:: https://img.shields.io/conda/dn/bioconda/perl-par-packer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-par-packer
   :alt:   (downloads)
.. |docker_perl-par-packer| image:: https://quay.io/repository/biocontainers/perl-par-packer/status
   :target: https://quay.io/repository/biocontainers/perl-par-packer
.. _`perl-par-packer/tags`: https://quay.io/repository/biocontainers/perl-par-packer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par-packer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par-packer/README.html