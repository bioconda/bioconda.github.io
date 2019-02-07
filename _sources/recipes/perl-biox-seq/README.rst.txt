.. title:: Package Recipe 'perl-biox-seq'
.. highlight: bash


perl-biox-seq
=============

.. conda:recipe:: perl-biox-seq/0.006007
   :replaces_section_title:

   a basic but fast biological sequence object and associated parsers

   :homepage: http://metacpan.org/pod/BioX::Seq
   :license: gpl_3
   :recipe: /`perl-biox-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq>`_/`0.006007 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq/0.006007>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq/0.006007/meta.yaml>`_

   


.. conda:package:: perl-biox-seq

   |downloads_perl-biox-seq| |docker_perl-biox-seq|

   :versions: 0.006007

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-compress-bgzf`  :conda:package:`perl-file-which`  

   :required~by: |required_by_perl-biox-seq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-biox-seq

   and update with::

      conda update perl-biox-seq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-biox-seq


.. |required_by_perl-biox-seq| conda:required_by:: perl-biox-seq
.. |downloads_perl-biox-seq| image:: https://img.shields.io/conda/dn/bioconda/perl-biox-seq.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-biox-seq| image:: https://quay.io/repository/biocontainers/perl-biox-seq/status
   :target: https://quay.io/repository/biocontainers/perl-biox-seq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biox-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biox-seq/README.html

