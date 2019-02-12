:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mac-systemdirectory'
.. highlight: bash

perl-mac-systemdirectory
========================

.. conda:recipe:: perl-mac-systemdirectory
   :replaces_section_title:

   Locate Mac OS X Standard System Directories

   :homepage: https://github.com/chansen/p5-Mac-SystemDirectory
   :license: perl_5
   :recipe: /`perl-mac-systemdirectory <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-systemdirectory>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-systemdirectory/meta.yaml>`_

   


.. conda:package:: perl-mac-systemdirectory

   |downloads_perl-mac-systemdirectory| |docker_perl-mac-systemdirectory|

   :versions: 0.10-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-exporter: 
   
   :depends perl-xsloader: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mac-systemdirectory

   and update with::

      conda update perl-mac-systemdirectory

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mac-systemdirectory:<tag>

   (see `perl-mac-systemdirectory/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mac-systemdirectory| image:: https://img.shields.io/conda/dn/bioconda/perl-mac-systemdirectory.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mac-systemdirectory| image:: https://quay.io/repository/biocontainers/perl-mac-systemdirectory/status
   :target: https://quay.io/repository/biocontainers/perl-mac-systemdirectory
.. _`perl-mac-systemdirectory/tags`: https://quay.io/repository/biocontainers/perl-mac-systemdirectory?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mac-systemdirectory/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mac-systemdirectory/README.html