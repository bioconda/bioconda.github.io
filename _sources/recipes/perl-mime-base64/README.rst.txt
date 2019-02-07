.. title:: Package Recipe 'perl-mime-base64'
.. highlight: bash


perl-mime-base64
================

.. conda:recipe:: perl-mime-base64
   :replaces_section_title:

   The RFC 2045 encodings\; base64 and quoted\-printable

   :homepage: http://metacpan.org/pod/MIME::Base64
   :license: perl_5
   :recipe: /`perl-mime-base64 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-base64>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-base64/meta.yaml>`_

   


.. conda:package:: perl-mime-base64

   |downloads_perl-mime-base64| |docker_perl-mime-base64|

   :versions: 3.15

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-mime-base64|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mime-base64

   and update with::

      conda update perl-mime-base64

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mime-base64


.. |required_by_perl-mime-base64| conda:required_by:: perl-mime-base64
.. |downloads_perl-mime-base64| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-base64.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mime-base64| image:: https://quay.io/repository/biocontainers/perl-mime-base64/status
   :target: https://quay.io/repository/biocontainers/perl-mime-base64







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-base64/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-base64/README.html

