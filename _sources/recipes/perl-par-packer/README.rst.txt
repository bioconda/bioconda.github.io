.. title:: Package Recipe 'perl-par-packer'
.. highlight: bash


perl-par-packer
===============

.. conda:recipe:: perl-par-packer/1.036
   :replaces_section_title:

   PAR Packager

   :homepage: http://metacpan.org/pod/PAR::Packer
   :license: perl_5
   :recipe: /`perl-par-packer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer>`_/`1.036 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-packer/1.036/meta.yaml>`_

   


.. conda:package:: perl-par-packer

   |downloads_perl-par-packer| |docker_perl-par-packer|

   :versions: 1.036

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-getopt-argvfile`  :conda:package:`perl-getopt-long`  :conda:package:`perl-module-scandeps`  :conda:package:`perl-par`  :conda:package:`perl-par-dist`  :conda:package:`perl-text-parsewords`  

   :required~by: |required_by_perl-par-packer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-par-packer

   and update with::

      conda update perl-par-packer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-par-packer


.. |required_by_perl-par-packer| conda:required_by:: perl-par-packer
.. |downloads_perl-par-packer| image:: https://img.shields.io/conda/dn/bioconda/perl-par-packer.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-par-packer| image:: https://quay.io/repository/biocontainers/perl-par-packer/status
   :target: https://quay.io/repository/biocontainers/perl-par-packer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par-packer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par-packer/README.html

