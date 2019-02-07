.. title:: Package Recipe 'perl-encode'
.. highlight: bash


perl-encode
===========

.. conda:recipe:: perl-encode/2.88
   :replaces_section_title:

   allows you to write your script in non\-ASCII and non\-UTF\-8

   :homepage: http://metacpan.org/pod/Encode
   :license: perl_5
   :recipe: /`perl-encode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode>`_/`2.88 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode/2.88>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode/2.88/meta.yaml>`_

   


.. conda:package:: perl-encode

   |downloads_perl-encode| |docker_perl-encode|

   :versions: 2.88

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-exporter`  :conda:package:`perl-parent`  

   :required~by: |required_by_perl-encode|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-encode

   and update with::

      conda update perl-encode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-encode


.. |required_by_perl-encode| conda:required_by:: perl-encode
.. |downloads_perl-encode| image:: https://img.shields.io/conda/dn/bioconda/perl-encode.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-encode| image:: https://quay.io/repository/biocontainers/perl-encode/status
   :target: https://quay.io/repository/biocontainers/perl-encode







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-encode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-encode/README.html

