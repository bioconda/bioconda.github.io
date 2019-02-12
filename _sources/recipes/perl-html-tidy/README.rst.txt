:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tidy'
.. highlight: bash

perl-html-tidy
==============

.. conda:recipe:: perl-html-tidy
   :replaces_section_title:

   \(X\)HTML validation in a Perl object

   :homepage: http://github.com/petdance/html-tidy
   :license: artistic_2
   :recipe: /`perl-html-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy/meta.yaml>`_

   


.. conda:package:: perl-html-tidy

   |downloads_perl-html-tidy| |docker_perl-html-tidy|

   :versions: 1.60-0, 1.56-2, 1.56-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-constant: 
   
   :depends perl-encode: 
   
   :depends perl-exporter: 
   
   :depends perl-getopt-long: 
   
   :depends tidyp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-tidy

   and update with::

      conda update perl-html-tidy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-html-tidy:<tag>

   (see `perl-html-tidy/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tidy.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-html-tidy| image:: https://quay.io/repository/biocontainers/perl-html-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-html-tidy
.. _`perl-html-tidy/tags`: https://quay.io/repository/biocontainers/perl-html-tidy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tidy/README.html