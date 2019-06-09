:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-encoding'
.. highlight: bash

perl-term-encoding
==================

.. conda:recipe:: perl-term-encoding
   :replaces_section_title:

   Detect encoding of the current terminal

   :homepage: http://metacpan.org/pod/Term::Encoding
   :license: perl_5
   :recipe: /`perl-term-encoding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding/meta.yaml>`_

   


.. conda:package:: perl-term-encoding

   |downloads_perl-term-encoding| |docker_perl-term-encoding|

   :versions: 0.03-0, 0.02-1, 0.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-encoding

   and update with::

      conda update perl-term-encoding

   or use the docker container::

      docker pull quay.io/biocontainers/perl-term-encoding:<tag>

   (see `perl-term-encoding/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-encoding| image:: https://img.shields.io/conda/dn/bioconda/perl-term-encoding.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-encoding
   :alt:   (downloads)
.. |docker_perl-term-encoding| image:: https://quay.io/repository/biocontainers/perl-term-encoding/status
   :target: https://quay.io/repository/biocontainers/perl-term-encoding
.. _`perl-term-encoding/tags`: https://quay.io/repository/biocontainers/perl-term-encoding?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-encoding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-encoding/README.html