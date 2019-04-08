:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dynaloader'
.. highlight: bash

perl-dynaloader
===============

.. conda:recipe:: perl-dynaloader/1.25
   :replaces_section_title:

   Dynamically load C libraries into Perl code

   :homepage: http://metacpan.org/pod/DynaLoader
   :license: perl_5
   :recipe: /`perl-dynaloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader>`_/`1.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader/1.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dynaloader/1.25/meta.yaml>`_

   


.. conda:package:: perl-dynaloader

   |downloads_perl-dynaloader| |docker_perl-dynaloader|

   :versions: 1.25-1, 1.25-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dynaloader

   and update with::

      conda update perl-dynaloader

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dynaloader:<tag>

   (see `perl-dynaloader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dynaloader| image:: https://img.shields.io/conda/dn/bioconda/perl-dynaloader.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dynaloader| image:: https://quay.io/repository/biocontainers/perl-dynaloader/status
   :target: https://quay.io/repository/biocontainers/perl-dynaloader
.. _`perl-dynaloader/tags`: https://quay.io/repository/biocontainers/perl-dynaloader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dynaloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dynaloader/README.html