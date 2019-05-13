:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-balanced'
.. highlight: bash

perl-text-balanced
==================

.. conda:recipe:: perl-text-balanced
   :replaces_section_title:

   Extract delimited text sequences from strings

   :homepage: http://metacpan.org/pod/Text::Balanced
   :license: perl_5
   :recipe: /`perl-text-balanced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced/meta.yaml>`_

   


.. conda:package:: perl-text-balanced

   |downloads_perl-text-balanced| |docker_perl-text-balanced|

   :versions: 2.03-3, 2.03-2, 2.03-1, 2.03-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-balanced

   and update with::

      conda update perl-text-balanced

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-balanced:<tag>

   (see `perl-text-balanced/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-balanced| image:: https://img.shields.io/conda/dn/bioconda/perl-text-balanced.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-balanced
   :alt:   (downloads)
.. |docker_perl-text-balanced| image:: https://quay.io/repository/biocontainers/perl-text-balanced/status
   :target: https://quay.io/repository/biocontainers/perl-text-balanced
.. _`perl-text-balanced/tags`: https://quay.io/repository/biocontainers/perl-text-balanced?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-balanced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-balanced/README.html