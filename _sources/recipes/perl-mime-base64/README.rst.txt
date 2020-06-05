:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-base64'
.. highlight: bash

perl-mime-base64
================

.. conda:recipe:: perl-mime-base64
   :replaces_section_title:
   :noindex:

   The RFC 2045 encodings\; base64 and quoted\-printable

   :homepage: http://metacpan.org/pod/MIME::Base64
   :license: perl_5
   :recipe: /`perl-mime-base64 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-base64>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-base64/meta.yaml>`_

   


.. conda:package:: perl-mime-base64

   |downloads_perl-mime-base64| |docker_perl-mime-base64|

   :versions:
      
      

      ``3.15-1``,  ``3.15-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mime-base64

   and update with::

      conda update perl-mime-base64

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mime-base64:<tag>

   (see `perl-mime-base64/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-base64| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-base64.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-base64
   :alt:   (downloads)
.. |docker_perl-mime-base64| image:: https://quay.io/repository/biocontainers/perl-mime-base64/status
   :target: https://quay.io/repository/biocontainers/perl-mime-base64
.. _`perl-mime-base64/tags`: https://quay.io/repository/biocontainers/perl-mime-base64?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-base64/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-base64/README.html