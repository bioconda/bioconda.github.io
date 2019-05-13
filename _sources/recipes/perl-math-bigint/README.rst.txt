:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bigint'
.. highlight: bash

perl-math-bigint
================

.. conda:recipe:: perl-math-bigint
   :replaces_section_title:

   Arbitrary size floating point math package

   :homepage: http://metacpan.org/pod/Math::BigInt
   :license: perl_5
   :recipe: /`perl-math-bigint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint/meta.yaml>`_

   


.. conda:package:: perl-math-bigint

   |downloads_perl-math-bigint| |docker_perl-math-bigint|

   :versions: 1.999816-0, 1.999813-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-math-complex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-bigint

   and update with::

      conda update perl-math-bigint

   or use the docker container::

      docker pull quay.io/biocontainers/perl-math-bigint:<tag>

   (see `perl-math-bigint/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-bigint| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigint.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bigint
   :alt:   (downloads)
.. |docker_perl-math-bigint| image:: https://quay.io/repository/biocontainers/perl-math-bigint/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigint
.. _`perl-math-bigint/tags`: https://quay.io/repository/biocontainers/perl-math-bigint?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigint/README.html