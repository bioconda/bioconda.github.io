.. title:: Package Recipe 'perl-carp-clan'
.. highlight: bash


perl-carp-clan
==============

.. conda:recipe:: perl-carp-clan
   :replaces_section_title:

   Report errors from perspective of caller of a \"clan\" of modules

   :homepage: http://metacpan.org/pod/Carp::Clan
   :license: perl_5
   :recipe: /`perl-carp-clan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp-clan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp-clan/meta.yaml>`_

   


.. conda:package:: perl-carp-clan

   |downloads_perl-carp-clan| |docker_perl-carp-clan|

   :versions: 6.07, 6.06

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-test-exception`  

   :required~by: |required_by_perl-carp-clan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-carp-clan

   and update with::

      conda update perl-carp-clan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-carp-clan


.. |required_by_perl-carp-clan| conda:required_by:: perl-carp-clan
.. |downloads_perl-carp-clan| image:: https://img.shields.io/conda/dn/bioconda/perl-carp-clan.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-carp-clan| image:: https://quay.io/repository/biocontainers/perl-carp-clan/status
   :target: https://quay.io/repository/biocontainers/perl-carp-clan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-carp-clan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-carp-clan/README.html

