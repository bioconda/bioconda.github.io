.. title:: Package Recipe 'perl-ntlm'
.. highlight: bash


perl-ntlm
=========

.. conda:recipe:: perl-ntlm
   :replaces_section_title:

   An NTLM authentication module

   :homepage: http://metacpan.org/pod/NTLM
   :license: perl_5
   :recipe: /`perl-ntlm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ntlm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ntlm/meta.yaml>`_

   


.. conda:package:: perl-ntlm

   |downloads_perl-ntlm| |docker_perl-ntlm|

   :versions: 1.09

   :depends: :conda:package:`perl-digest-hmac`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-ntlm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ntlm

   and update with::

      conda update perl-ntlm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-ntlm


.. |required_by_perl-ntlm| conda:required_by:: perl-ntlm
.. |downloads_perl-ntlm| image:: https://img.shields.io/conda/dn/bioconda/perl-ntlm.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ntlm| image:: https://quay.io/repository/biocontainers/perl-ntlm/status
   :target: https://quay.io/repository/biocontainers/perl-ntlm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ntlm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ntlm/README.html

