:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-witherror'
.. highlight: bash

perl-number-witherror
=====================

.. conda:recipe:: perl-number-witherror/1.01
   :replaces_section_title:

   Numbers with error propagation and scientific rounding

   :homepage: http://metacpan.org/pod/Number::WithError
   :license: perl_5
   :recipe: /`perl-number-witherror <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror>`_/`1.01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror/1.01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-witherror/1.01/meta.yaml>`_

   


.. conda:package:: perl-number-witherror

   |downloads_perl-number-witherror| |docker_perl-number-witherror|

   :versions: 1.01-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-params-util: 
   :depends perl-prefork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-number-witherror

   and update with::

      conda update perl-number-witherror

   or use the docker container::

      docker pull quay.io/biocontainers/perl-number-witherror:<tag>

   (see `perl-number-witherror/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-witherror| image:: https://img.shields.io/conda/dn/bioconda/perl-number-witherror.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-witherror
   :alt:   (downloads)
.. |docker_perl-number-witherror| image:: https://quay.io/repository/biocontainers/perl-number-witherror/status
   :target: https://quay.io/repository/biocontainers/perl-number-witherror
.. _`perl-number-witherror/tags`: https://quay.io/repository/biocontainers/perl-number-witherror?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-witherror/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-witherror/README.html