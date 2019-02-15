:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-symbol'
.. highlight: bash

perl-symbol
===========

.. conda:recipe:: perl-symbol/1.07
   :replaces_section_title:

   manipulate Perl symbols and their names

   :homepage: http://metacpan.org/pod/Symbol
   :license: perl_5
   :recipe: /`perl-symbol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol>`_/`1.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol/1.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol/1.07/meta.yaml>`_

   


.. conda:package:: perl-symbol

   |downloads_perl-symbol| |docker_perl-symbol|

   :versions: 1.07-1, 1.07-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-symbol

   and update with::

      conda update perl-symbol

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-symbol:<tag>

   (see `perl-symbol/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-symbol| image:: https://img.shields.io/conda/dn/bioconda/perl-symbol.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-symbol| image:: https://quay.io/repository/biocontainers/perl-symbol/status
   :target: https://quay.io/repository/biocontainers/perl-symbol
.. _`perl-symbol/tags`: https://quay.io/repository/biocontainers/perl-symbol?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-symbol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-symbol/README.html