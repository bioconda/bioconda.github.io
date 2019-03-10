:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-range'
.. highlight: bash

perl-number-range
=================

.. conda:recipe:: perl-number-range
   :replaces_section_title:

   Perl extension defining ranges of numbers and testing if a number is found in the range

   :homepage: http://metacpan.org/pod/Number::Range
   :license: perl_5
   :recipe: /`perl-number-range <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range/meta.yaml>`_

   


.. conda:package:: perl-number-range

   |downloads_perl-number-range| |docker_perl-number-range|

   :versions: 0.12-1, 0.12-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-extutils-makemaker: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-number-range

   and update with::

      conda update perl-number-range

   or use the docker container::

      docker pull quay.io/biocontainers/perl-number-range:<tag>

   (see `perl-number-range/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-range| image:: https://img.shields.io/conda/dn/bioconda/perl-number-range.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-number-range| image:: https://quay.io/repository/biocontainers/perl-number-range/status
   :target: https://quay.io/repository/biocontainers/perl-number-range
.. _`perl-number-range/tags`: https://quay.io/repository/biocontainers/perl-number-range?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-range/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-range/README.html