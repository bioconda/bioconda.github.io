:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biox-seq'
.. highlight: bash

perl-biox-seq
=============

.. conda:recipe:: perl-biox-seq
   :replaces_section_title:
   :noindex:

   a basic but fast biological sequence object and associated parsers

   :homepage: http://metacpan.org/pod/BioX::Seq
   :license: gpl_3
   :recipe: /`perl-biox-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq/meta.yaml>`_

   


.. conda:package:: perl-biox-seq

   |downloads_perl-biox-seq| |docker_perl-biox-seq|

   :versions:
      
      

      ``0.006007-2``,  ``0.006007-1``,  ``0.006007-0``,  ``0.008-1``,  ``0.008-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-compress-bgzf: 
   :depends perl-file-which: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-biox-seq

   and update with::

      conda update perl-biox-seq

   or use the docker container::

      docker pull quay.io/biocontainers/perl-biox-seq:<tag>

   (see `perl-biox-seq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-biox-seq| image:: https://img.shields.io/conda/dn/bioconda/perl-biox-seq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biox-seq
   :alt:   (downloads)
.. |docker_perl-biox-seq| image:: https://quay.io/repository/biocontainers/perl-biox-seq/status
   :target: https://quay.io/repository/biocontainers/perl-biox-seq
.. _`perl-biox-seq/tags`: https://quay.io/repository/biocontainers/perl-biox-seq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biox-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biox-seq/README.html