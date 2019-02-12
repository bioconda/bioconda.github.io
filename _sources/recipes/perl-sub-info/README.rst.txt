:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-info'
.. highlight: bash

perl-sub-info
=============

.. conda:recipe:: perl-sub-info
   :replaces_section_title:

   Tool for inspecting subroutines.

   :homepage: http://metacpan.org/pod/Sub::Info
   :license: perl_5
   :recipe: /`perl-sub-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-info/meta.yaml>`_

   


.. conda:package:: perl-sub-info

   |downloads_perl-sub-info| |docker_perl-sub-info|

   :versions: 0.002-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-importer: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-info

   and update with::

      conda update perl-sub-info

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sub-info:<tag>

   (see `perl-sub-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-info| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-info.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-info| image:: https://quay.io/repository/biocontainers/perl-sub-info/status
   :target: https://quay.io/repository/biocontainers/perl-sub-info
.. _`perl-sub-info/tags`: https://quay.io/repository/biocontainers/perl-sub-info?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-info/README.html