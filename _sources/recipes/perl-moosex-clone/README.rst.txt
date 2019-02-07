.. title:: Package Recipe 'perl-moosex-clone'
.. highlight: bash


perl-moosex-clone
=================

.. conda:recipe:: perl-moosex-clone/0.06
   :replaces_section_title:

   Fine\-grained cloning support for Moose objects.

   :homepage: https://github.com/moose/MooseX-Clone
   :license: perl_5
   :recipe: /`perl-moosex-clone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone>`_/`0.06 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06/meta.yaml>`_

   


.. conda:package:: perl-moosex-clone

   |downloads_perl-moosex-clone| |docker_perl-moosex-clone|

   :versions: 0.06

   :depends: :conda:package:`perl` >=5.22,<=6.0 :conda:package:`perl-carp`  :conda:package:`perl-data-visitor`  :conda:package:`perl-hash-util-fieldhash-compat`  :conda:package:`perl-namespace-autoclean`  

   :required~by: |required_by_perl-moosex-clone|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-clone

   and update with::

      conda update perl-moosex-clone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-clone


.. |required_by_perl-moosex-clone| conda:required_by:: perl-moosex-clone
.. |downloads_perl-moosex-clone| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-clone.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-clone| image:: https://quay.io/repository/biocontainers/perl-moosex-clone/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-clone







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-clone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-clone/README.html

