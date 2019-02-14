:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin'
.. highlight: bash

perl-findbin
============

.. conda:recipe:: perl-findbin/1.51
   :replaces_section_title:

   Locate directory of original perl script

   :homepage: http://metacpan.org/pod/FindBin
   :license: perl_5
   :recipe: /`perl-findbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin>`_/`1.51 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin/1.51>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin/1.51/meta.yaml>`_

   


.. conda:package:: perl-findbin

   |downloads_perl-findbin| |docker_perl-findbin|

   :versions: 1.51-1, 1.51-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-findbin

   and update with::

      conda update perl-findbin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-findbin:<tag>

   (see `perl-findbin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-findbin| image:: https://quay.io/repository/biocontainers/perl-findbin/status
   :target: https://quay.io/repository/biocontainers/perl-findbin
.. _`perl-findbin/tags`: https://quay.io/repository/biocontainers/perl-findbin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin/README.html