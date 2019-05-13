:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-indirect'
.. highlight: bash

perl-indirect
=============

.. conda:recipe:: perl-indirect
   :replaces_section_title:

   Lexically warn about using the indirect method call syntax.

   :homepage: http://search.cpan.org/dist/indirect/
   :license: perl_5
   :recipe: /`perl-indirect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect/meta.yaml>`_

   


.. conda:package:: perl-indirect

   |downloads_perl-indirect| |docker_perl-indirect|

   :versions: 0.38-1, 0.38-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-carp: 
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-indirect

   and update with::

      conda update perl-indirect

   or use the docker container::

      docker pull quay.io/biocontainers/perl-indirect:<tag>

   (see `perl-indirect/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-indirect| image:: https://img.shields.io/conda/dn/bioconda/perl-indirect.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-indirect
   :alt:   (downloads)
.. |docker_perl-indirect| image:: https://quay.io/repository/biocontainers/perl-indirect/status
   :target: https://quay.io/repository/biocontainers/perl-indirect
.. _`perl-indirect/tags`: https://quay.io/repository/biocontainers/perl-indirect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-indirect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-indirect/README.html