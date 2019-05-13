:orphan:  .. only available via index, not via toctree

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

   :versions: 6.07-1, 6.07-0, 6.06-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-test-exception: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-carp-clan

   and update with::

      conda update perl-carp-clan

   or use the docker container::

      docker pull quay.io/biocontainers/perl-carp-clan:<tag>

   (see `perl-carp-clan/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-carp-clan| image:: https://img.shields.io/conda/dn/bioconda/perl-carp-clan.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-carp-clan
   :alt:   (downloads)
.. |docker_perl-carp-clan| image:: https://quay.io/repository/biocontainers/perl-carp-clan/status
   :target: https://quay.io/repository/biocontainers/perl-carp-clan
.. _`perl-carp-clan/tags`: https://quay.io/repository/biocontainers/perl-carp-clan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-carp-clan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-carp-clan/README.html