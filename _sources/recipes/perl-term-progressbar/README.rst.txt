:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-progressbar'
.. highlight: bash

perl-term-progressbar
=====================

.. conda:recipe:: perl-term-progressbar
   :replaces_section_title:

   provide a progress meter on a standard terminal

   :homepage: http://metacpan.org/pod/Term::ProgressBar
   :license: perl_5
   :recipe: /`perl-term-progressbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar/meta.yaml>`_

   


.. conda:package:: perl-term-progressbar

   |downloads_perl-term-progressbar| |docker_perl-term-progressbar|

   :versions: 2.22-0, 2.21-1, 2.21-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-class-methodmaker: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-progressbar

   and update with::

      conda update perl-term-progressbar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-term-progressbar:<tag>

   (see `perl-term-progressbar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-progressbar| image:: https://img.shields.io/conda/dn/bioconda/perl-term-progressbar.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-term-progressbar| image:: https://quay.io/repository/biocontainers/perl-term-progressbar/status
   :target: https://quay.io/repository/biocontainers/perl-term-progressbar
.. _`perl-term-progressbar/tags`: https://quay.io/repository/biocontainers/perl-term-progressbar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-progressbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-progressbar/README.html