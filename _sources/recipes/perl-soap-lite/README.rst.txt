.. title:: Package Recipe 'perl-soap-lite'
.. highlight: bash


perl-soap-lite
==============

.. conda:recipe:: perl-soap-lite
   :replaces_section_title:

   Perl\'s Web Services Toolkit

   :homepage: http://metacpan.org/pod/SOAP-Lite
   :license: perl_5
   :recipe: /`perl-soap-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-soap-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-soap-lite/meta.yaml>`_

   


.. conda:package:: perl-soap-lite

   |downloads_perl-soap-lite| |docker_perl-soap-lite|

   :versions: 1.19

   :depends: :conda:package:`perl-class-inspector`  :conda:package:`perl-io-sessiondata`  :conda:package:`perl-io-socket-ssl`  :conda:package:`perl-libwww-perl`  :conda:package:`perl-lwp-protocol-https`  :conda:package:`perl-mime-lite`  :conda:package:`perl-mime-tools`  :conda:package:`perl-task-weaken`  :conda:package:`perl-threaded`  :conda:package:`perl-uri`  :conda:package:`perl-xml-parser`  

   :required~by: |required_by_perl-soap-lite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-soap-lite

   and update with::

      conda update perl-soap-lite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-soap-lite


.. |required_by_perl-soap-lite| conda:required_by:: perl-soap-lite
.. |downloads_perl-soap-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-soap-lite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-soap-lite| image:: https://quay.io/repository/biocontainers/perl-soap-lite/status
   :target: https://quay.io/repository/biocontainers/perl-soap-lite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-soap-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-soap-lite/README.html

