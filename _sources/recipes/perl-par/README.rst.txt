:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par'
.. highlight: bash

perl-par
========

.. conda:recipe:: perl-par/1.014
   :replaces_section_title:

   Perl Archive Tookit

   :homepage: http://metacpan.org/pod/PAR
   :license: perl_5
   :recipe: /`perl-par <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par>`_/`1.014 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par/1.014>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par/1.014/meta.yaml>`_

   


.. conda:package:: perl-par

   |downloads_perl-par| |docker_perl-par|

   :versions: 1.014-1, 1.014-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-archive-zip: 
   :depends perl-par-dist: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-par

   and update with::

      conda update perl-par

   or use the docker container::

      docker pull quay.io/biocontainers/perl-par:<tag>

   (see `perl-par/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-par| image:: https://img.shields.io/conda/dn/bioconda/perl-par.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-par| image:: https://quay.io/repository/biocontainers/perl-par/status
   :target: https://quay.io/repository/biocontainers/perl-par
.. _`perl-par/tags`: https://quay.io/repository/biocontainers/perl-par?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par/README.html