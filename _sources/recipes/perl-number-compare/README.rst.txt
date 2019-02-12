:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-compare'
.. highlight: bash

perl-number-compare
===================

.. conda:recipe:: perl-number-compare
   :replaces_section_title:

   Numeric comparisons

   :homepage: https://metacpan.org/pod/Number::Compare
   :license: perl_5
   :recipe: /`perl-number-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-compare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-compare/meta.yaml>`_

   


.. conda:package:: perl-number-compare

   |downloads_perl-number-compare| |docker_perl-number-compare|

   :versions: 0.03-2, 0.03-1, 0.03-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-number-compare

   and update with::

      conda update perl-number-compare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-number-compare:<tag>

   (see `perl-number-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-number-compare.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-number-compare| image:: https://quay.io/repository/biocontainers/perl-number-compare/status
   :target: https://quay.io/repository/biocontainers/perl-number-compare
.. _`perl-number-compare/tags`: https://quay.io/repository/biocontainers/perl-number-compare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-compare/README.html