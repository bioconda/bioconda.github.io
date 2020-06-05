:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-lite'
.. highlight: bash

perl-mime-lite
==============

.. conda:recipe:: perl-mime-lite
   :replaces_section_title:
   :noindex:

   Handy\-dandy MIME mailing class

   :homepage: http://metacpan.org/pod/MIME-Lite
   :license: perl_5
   :recipe: /`perl-mime-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite/meta.yaml>`_

   


.. conda:package:: perl-mime-lite

   |downloads_perl-mime-lite| |docker_perl-mime-lite|

   :versions:
      
      

      ``3.030-1``,  ``3.030-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-email-date-format: 
   :depends perl-mailtools: 
   :depends perl-mime-types: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mime-lite

   and update with::

      conda update perl-mime-lite

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mime-lite:<tag>

   (see `perl-mime-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-lite
   :alt:   (downloads)
.. |docker_perl-mime-lite| image:: https://quay.io/repository/biocontainers/perl-mime-lite/status
   :target: https://quay.io/repository/biocontainers/perl-mime-lite
.. _`perl-mime-lite/tags`: https://quay.io/repository/biocontainers/perl-mime-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-lite/README.html