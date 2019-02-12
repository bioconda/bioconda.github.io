:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spiffy'
.. highlight: bash

perl-spiffy
===========

.. conda:recipe:: perl-spiffy
   :replaces_section_title:

   Spiffy Perl Interface Framework For You

   :homepage: https://github.com/ingydotnet/spiffy-pm
   :license: perl_5
   :recipe: /`perl-spiffy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spiffy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spiffy/meta.yaml>`_

   


.. conda:package:: perl-spiffy

   |downloads_perl-spiffy| |docker_perl-spiffy|

   :versions: 0.46-3, 0.46-2, 0.46-1, 0.46-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-spiffy

   and update with::

      conda update perl-spiffy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-spiffy:<tag>

   (see `perl-spiffy/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-spiffy| image:: https://img.shields.io/conda/dn/bioconda/perl-spiffy.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-spiffy| image:: https://quay.io/repository/biocontainers/perl-spiffy/status
   :target: https://quay.io/repository/biocontainers/perl-spiffy
.. _`perl-spiffy/tags`: https://quay.io/repository/biocontainers/perl-spiffy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spiffy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spiffy/README.html