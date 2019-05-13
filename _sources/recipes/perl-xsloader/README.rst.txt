:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xsloader'
.. highlight: bash

perl-xsloader
=============

.. conda:recipe:: perl-xsloader
   :replaces_section_title:

   Dynamically load C libraries into Perl code

   :homepage: https://metacpan.org/module/XSLoader
   :license: perl_5
   :recipe: /`perl-xsloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xsloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xsloader/meta.yaml>`_

   


.. conda:package:: perl-xsloader

   |downloads_perl-xsloader| |docker_perl-xsloader|

   :versions: 0.24-0, 0.22-1, 0.22-0, 0.16-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xsloader

   and update with::

      conda update perl-xsloader

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xsloader:<tag>

   (see `perl-xsloader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xsloader| image:: https://img.shields.io/conda/dn/bioconda/perl-xsloader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xsloader
   :alt:   (downloads)
.. |docker_perl-xsloader| image:: https://quay.io/repository/biocontainers/perl-xsloader/status
   :target: https://quay.io/repository/biocontainers/perl-xsloader
.. _`perl-xsloader/tags`: https://quay.io/repository/biocontainers/perl-xsloader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xsloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xsloader/README.html