:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphics-colornames'
.. highlight: bash

perl-graphics-colornames
========================

.. conda:recipe:: perl-graphics-colornames
   :replaces_section_title:

   defines RGB values for common color names

   :homepage: http://metacpan.org/pod/Graphics::ColorNames
   :license: perl_5
   :recipe: /`perl-graphics-colornames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colornames/meta.yaml>`_

   


.. conda:package:: perl-graphics-colornames

   |downloads_perl-graphics-colornames| |docker_perl-graphics-colornames|

   :versions: 2.11-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-base: 
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :depends perl-module-build: 
   
   :depends perl-module-load: 
   
   :depends perl-module-loaded: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-graphics-colornames

   and update with::

      conda update perl-graphics-colornames

   or use the docker container::

      docker pull quay.io/biocontainers/perl-graphics-colornames:<tag>

   (see `perl-graphics-colornames/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graphics-colornames| image:: https://img.shields.io/conda/dn/bioconda/perl-graphics-colornames.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-graphics-colornames| image:: https://quay.io/repository/biocontainers/perl-graphics-colornames/status
   :target: https://quay.io/repository/biocontainers/perl-graphics-colornames
.. _`perl-graphics-colornames/tags`: https://quay.io/repository/biocontainers/perl-graphics-colornames?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphics-colornames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphics-colornames/README.html