:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gtdbtk'
.. highlight: bash

perl-gtdbtk
===========

.. conda:recipe:: perl-gtdbtk
   :replaces_section_title:

   Perl script and dependent library files required for GTDB\-Tk.

   :homepage: https://github.com/Ecogenomics/GTDBTk
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`perl-gtdbtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gtdbtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gtdbtk/meta.yaml>`_

   


.. conda:package:: perl-gtdbtk

   |downloads_perl-gtdbtk| |docker_perl-gtdbtk|

   :versions: 0.1.5-1, 0.1.5-0, 0.1.3-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-bioperl: >=1.7.2
   
   :depends perl-ipc-run: 
   
   :depends perl-moose: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gtdbtk

   and update with::

      conda update perl-gtdbtk

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gtdbtk:<tag>

   (see `perl-gtdbtk/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gtdbtk| image:: https://img.shields.io/conda/dn/bioconda/perl-gtdbtk.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-gtdbtk| image:: https://quay.io/repository/biocontainers/perl-gtdbtk/status
   :target: https://quay.io/repository/biocontainers/perl-gtdbtk
.. _`perl-gtdbtk/tags`: https://quay.io/repository/biocontainers/perl-gtdbtk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gtdbtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gtdbtk/README.html