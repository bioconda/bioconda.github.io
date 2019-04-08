:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-normalize'
.. highlight: bash

perl-unicode-normalize
======================

.. conda:recipe:: perl-unicode-normalize
   :replaces_section_title:

   Unicode Normalization Forms

   :homepage: http://metacpan.org/pod/Unicode::Normalize
   :license: perl_5
   :recipe: /`perl-unicode-normalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize/meta.yaml>`_

   


.. conda:package:: perl-unicode-normalize

   |downloads_perl-unicode-normalize| |docker_perl-unicode-normalize|

   :versions: 1.26-0, 1.25-0, 1.18-0
   
   :depends libstdcxx-ng: >=4.9
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-unicode-normalize

   and update with::

      conda update perl-unicode-normalize

   or use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-normalize:<tag>

   (see `perl-unicode-normalize/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-normalize| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-normalize.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-unicode-normalize| image:: https://quay.io/repository/biocontainers/perl-unicode-normalize/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-normalize
.. _`perl-unicode-normalize/tags`: https://quay.io/repository/biocontainers/perl-unicode-normalize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-normalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-normalize/README.html