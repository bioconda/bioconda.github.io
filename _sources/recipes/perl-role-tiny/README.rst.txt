:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-role-tiny'
.. highlight: bash

perl-role-tiny
==============

.. conda:recipe:: perl-role-tiny
   :replaces_section_title:

   Roles. Like a nouvelle cuisine portion size slice of Moose.

   :homepage: http://metacpan.org/pod/Role-Tiny
   :license: perl_5
   :recipe: /`perl-role-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-role-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-role-tiny/meta.yaml>`_

   


.. conda:package:: perl-role-tiny

   |downloads_perl-role-tiny| |docker_perl-role-tiny|

   :versions: 2.000006-0, 2.000001-2, 2.000001-1, 2.000001-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-role-tiny

   and update with::

      conda update perl-role-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-role-tiny:<tag>

   (see `perl-role-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-role-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-role-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-role-tiny| image:: https://quay.io/repository/biocontainers/perl-role-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-role-tiny
.. _`perl-role-tiny/tags`: https://quay.io/repository/biocontainers/perl-role-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-role-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-role-tiny/README.html