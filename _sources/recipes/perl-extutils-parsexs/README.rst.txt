.. title:: Package Recipe 'perl-extutils-parsexs'
.. highlight: bash


perl-extutils-parsexs
=====================

.. conda:recipe:: perl-extutils-parsexs
   :replaces_section_title:

   converts Perl XS code into C code

   :homepage: http://metacpan.org/pod/ExtUtils::ParseXS
   :license: unknown
   :recipe: /`perl-extutils-parsexs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-parsexs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-parsexs/meta.yaml>`_

   


.. conda:package:: perl-extutils-parsexs

   |downloads_perl-extutils-parsexs| |docker_perl-extutils-parsexs|

   :versions: 3.35, 3.28

   :depends: :conda:package:`perl` >=5.26.2,<5.27.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-extutils-cbuilder`  :conda:package:`perl-extutils-makemaker`  

   :required~by: |required_by_perl-extutils-parsexs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-parsexs

   and update with::

      conda update perl-extutils-parsexs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-parsexs


.. |required_by_perl-extutils-parsexs| conda:required_by:: perl-extutils-parsexs
.. |downloads_perl-extutils-parsexs| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-parsexs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-parsexs| image:: https://quay.io/repository/biocontainers/perl-extutils-parsexs/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-parsexs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-parsexs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-parsexs/README.html

