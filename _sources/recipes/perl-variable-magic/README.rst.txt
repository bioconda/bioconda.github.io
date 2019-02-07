.. title:: Package Recipe 'perl-variable-magic'
.. highlight: bash


perl-variable-magic
===================

.. conda:recipe:: perl-variable-magic/0.61
   :replaces_section_title:

   Associate user\-defined magic to variables from Perl.

   :homepage: http://search.cpan.org/dist/Variable-Magic/
   :license: perl_5
   :recipe: /`perl-variable-magic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic>`_/`0.61 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic/0.61>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic/0.61/meta.yaml>`_

   


.. conda:package:: perl-variable-magic

   |downloads_perl-variable-magic| |docker_perl-variable-magic|

   :versions: 0.61

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-variable-magic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-variable-magic

   and update with::

      conda update perl-variable-magic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-variable-magic


.. |required_by_perl-variable-magic| conda:required_by:: perl-variable-magic
.. |downloads_perl-variable-magic| image:: https://img.shields.io/conda/dn/bioconda/perl-variable-magic.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-variable-magic| image:: https://quay.io/repository/biocontainers/perl-variable-magic/status
   :target: https://quay.io/repository/biocontainers/perl-variable-magic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-variable-magic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-variable-magic/README.html

