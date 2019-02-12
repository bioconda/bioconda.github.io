:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-env'
.. highlight: bash

perl-env
========

.. conda:recipe:: perl-env
   :replaces_section_title:

   perl module that imports environment variables as scalars or arrays

   :homepage: http://search.cpan.org/dist/Env
   :license: perl_5
   :recipe: /`perl-env <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-env>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-env/meta.yaml>`_

   


.. conda:package:: perl-env

   |downloads_perl-env| |docker_perl-env|

   :versions: 1.04-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-env

   and update with::

      conda update perl-env

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-env:<tag>

   (see `perl-env/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-env| image:: https://img.shields.io/conda/dn/bioconda/perl-env.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-env| image:: https://quay.io/repository/biocontainers/perl-env/status
   :target: https://quay.io/repository/biocontainers/perl-env
.. _`perl-env/tags`: https://quay.io/repository/biocontainers/perl-env?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-env/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-env/README.html