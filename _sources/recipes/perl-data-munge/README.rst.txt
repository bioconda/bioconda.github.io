:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-munge'
.. highlight: bash

perl-data-munge
===============

.. conda:recipe:: perl-data-munge
   :replaces_section_title:
   :noindex:

   various utility functions

   :homepage: http://metacpan.org/pod/Data::Munge
   :license: perl_5
   :recipe: /`perl-data-munge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-munge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-munge/meta.yaml>`_

   


.. conda:package:: perl-data-munge

   |downloads_perl-data-munge| |docker_perl-data-munge|

   :versions:
      
      

      ``0.097-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-base: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-munge

   and update with::

      conda update perl-data-munge

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-munge:<tag>

   (see `perl-data-munge/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-munge| image:: https://img.shields.io/conda/dn/bioconda/perl-data-munge.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-munge
   :alt:   (downloads)
.. |docker_perl-data-munge| image:: https://quay.io/repository/biocontainers/perl-data-munge/status
   :target: https://quay.io/repository/biocontainers/perl-data-munge
.. _`perl-data-munge/tags`: https://quay.io/repository/biocontainers/perl-data-munge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-munge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-munge/README.html