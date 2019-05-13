:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-cacher'
.. highlight: bash

perl-tie-cacher
===============

.. conda:recipe:: perl-tie-cacher
   :replaces_section_title:

   Cache a \(sub\)set of key\/value pairs. Tie and OO interface.

   :homepage: http://metacpan.org/pod/Tie::Cacher
   :license: perl_5
   :recipe: /`perl-tie-cacher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-cacher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-cacher/meta.yaml>`_

   


.. conda:package:: perl-tie-cacher

   |downloads_perl-tie-cacher| |docker_perl-tie-cacher|

   :versions: 0.09-3, 0.09-2, 0.09-1
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-tie-cacher

   and update with::

      conda update perl-tie-cacher

   or use the docker container::

      docker pull quay.io/biocontainers/perl-tie-cacher:<tag>

   (see `perl-tie-cacher/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-cacher| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-cacher.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-cacher
   :alt:   (downloads)
.. |docker_perl-tie-cacher| image:: https://quay.io/repository/biocontainers/perl-tie-cacher/status
   :target: https://quay.io/repository/biocontainers/perl-tie-cacher
.. _`perl-tie-cacher/tags`: https://quay.io/repository/biocontainers/perl-tie-cacher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-cacher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-cacher/README.html