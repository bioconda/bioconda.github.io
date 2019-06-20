:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-random-mt-auto'
.. highlight: bash

perl-math-random-mt-auto
========================

.. conda:recipe:: perl-math-random-mt-auto
   :replaces_section_title:

   Auto\-seeded Mersenne Twister PRNGs

   :homepage: http://metacpan.org/pod/Math::Random::MT::Auto
   :license: unrestricted
   :recipe: /`perl-math-random-mt-auto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random-mt-auto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random-mt-auto/meta.yaml>`_

   


.. conda:package:: perl-math-random-mt-auto

   |downloads_perl-math-random-mt-auto| |docker_perl-math-random-mt-auto|

   :versions: 6.23-1, 6.23-0, 6.22-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-exception-class: 
   :depends perl-object-insideout: 
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-random-mt-auto

   and update with::

      conda update perl-math-random-mt-auto

   or use the docker container::

      docker pull quay.io/biocontainers/perl-math-random-mt-auto:<tag>

   (see `perl-math-random-mt-auto/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-random-mt-auto| image:: https://img.shields.io/conda/dn/bioconda/perl-math-random-mt-auto.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-random-mt-auto
   :alt:   (downloads)
.. |docker_perl-math-random-mt-auto| image:: https://quay.io/repository/biocontainers/perl-math-random-mt-auto/status
   :target: https://quay.io/repository/biocontainers/perl-math-random-mt-auto
.. _`perl-math-random-mt-auto/tags`: https://quay.io/repository/biocontainers/perl-math-random-mt-auto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-random-mt-auto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-random-mt-auto/README.html