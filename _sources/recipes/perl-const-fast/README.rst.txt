:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-const-fast'
.. highlight: bash

perl-const-fast
===============

.. conda:recipe:: perl-const-fast
   :replaces_section_title:
   :noindex:

   Facility for creating read\-only scalars\, arrays\, and hashes

   :homepage: http://metacpan.org/pod/Const-Fast
   :license: perl_5
   :recipe: /`perl-const-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-const-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-const-fast/meta.yaml>`_

   


.. conda:package:: perl-const-fast

   |downloads_perl-const-fast| |docker_perl-const-fast|

   :versions:
      
      

      ``0.014-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-storable: 
   :depends perl-sub-exporter-progressive: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-const-fast

   and update with::

      conda update perl-const-fast

   or use the docker container::

      docker pull quay.io/biocontainers/perl-const-fast:<tag>

   (see `perl-const-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-const-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-const-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-const-fast
   :alt:   (downloads)
.. |docker_perl-const-fast| image:: https://quay.io/repository/biocontainers/perl-const-fast/status
   :target: https://quay.io/repository/biocontainers/perl-const-fast
.. _`perl-const-fast/tags`: https://quay.io/repository/biocontainers/perl-const-fast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-const-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-const-fast/README.html