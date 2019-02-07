.. title:: Package Recipe 'perl-file-slurp'
.. highlight: bash


perl-file-slurp
===============

.. conda:recipe:: perl-file-slurp
   :replaces_section_title:

   Simple and Efficient Reading\/Writing\/Modifying of Complete Files

   :homepage: http://metacpan.org/pod/File::Slurp
   :license: perl_5
   :recipe: /`perl-file-slurp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurp/meta.yaml>`_

   


.. conda:package:: perl-file-slurp

   |downloads_perl-file-slurp| |docker_perl-file-slurp|

   :versions: 9999.25, 9999.24, 9999.19

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-file-slurp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-slurp

   and update with::

      conda update perl-file-slurp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-slurp


.. |required_by_perl-file-slurp| conda:required_by:: perl-file-slurp
.. |downloads_perl-file-slurp| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-slurp| image:: https://quay.io/repository/biocontainers/perl-file-slurp/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurp/README.html

