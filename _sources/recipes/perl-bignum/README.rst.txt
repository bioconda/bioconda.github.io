:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bignum'
.. highlight: bash

perl-bignum
===========

.. conda:recipe:: perl-bignum
   :replaces_section_title:
   :noindex:

   Transparent BigNumber support for Perl

   :homepage: http://metacpan.org/pod/bignum
   :license: perl_5
   :recipe: /`perl-bignum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bignum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bignum/meta.yaml>`_

   


.. conda:package:: perl-bignum

   |downloads_perl-bignum| |docker_perl-bignum|

   :versions:
      
      

      ``0.66-0``,  ``0.65-0``,  ``0.64-0``,  ``0.51-1``,  ``0.51-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: ``>=1.22``
   :depends perl-math-bigint: ``>=1.99983``
   :depends perl-math-bigrat: ``>=0.2621``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bignum

   and update with::

      conda update perl-bignum

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bignum:<tag>

   (see `perl-bignum/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bignum| image:: https://img.shields.io/conda/dn/bioconda/perl-bignum.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bignum
   :alt:   (downloads)
.. |docker_perl-bignum| image:: https://quay.io/repository/biocontainers/perl-bignum/status
   :target: https://quay.io/repository/biocontainers/perl-bignum
.. _`perl-bignum/tags`: https://quay.io/repository/biocontainers/perl-bignum?tab=tags


.. raw:: html

    <script>
        var package = "perl-bignum";
        var versions = ["0.66","0.65","0.64","0.51","0.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bignum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bignum/README.html