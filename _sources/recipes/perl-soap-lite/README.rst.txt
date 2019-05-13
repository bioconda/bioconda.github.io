:orphan:  .. only available via index, not via toctree

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

   :versions: 1.19-1, 1.19-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-class-inspector: 
   :depends perl-io-sessiondata: 
   :depends perl-io-socket-ssl: 
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends perl-mime-lite: 
   :depends perl-mime-tools: 
   :depends perl-task-weaken: 
   :depends perl-uri: 
   :depends perl-xml-parser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-soap-lite

   and update with::

      conda update perl-soap-lite

   or use the docker container::

      docker pull quay.io/biocontainers/perl-soap-lite:<tag>

   (see `perl-soap-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-soap-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-soap-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-soap-lite
   :alt:   (downloads)
.. |docker_perl-soap-lite| image:: https://quay.io/repository/biocontainers/perl-soap-lite/status
   :target: https://quay.io/repository/biocontainers/perl-soap-lite
.. _`perl-soap-lite/tags`: https://quay.io/repository/biocontainers/perl-soap-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-soap-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-soap-lite/README.html