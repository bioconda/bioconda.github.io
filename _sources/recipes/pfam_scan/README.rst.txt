:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pfam_scan'
.. highlight: bash

pfam_scan
=========

.. conda:recipe:: pfam_scan
   :replaces_section_title:

   pfam\_scan.pl is a Perl script calling HMMER v3 to search a FASTA file against a library of Pfam HMMs.

   :homepage: http://ftp.ebi.ac.uk/pub/databases/Pfam/Tools/
   :license: GPL (>= 2)
   :recipe: /`pfam_scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan/meta.yaml>`_

   


.. conda:package:: pfam_scan

   |downloads_pfam_scan| |docker_pfam_scan|

   :versions: 1.6-2, 1.6-1, 1.6-0
   
   :depends hmmer: >=3.0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends perl-bioperl: >=1.4
   
   :depends perl-ipc-run: 
   
   :depends perl-moose: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pfam_scan

   and update with::

      conda update pfam_scan

   or use the docker container::

      docker pull quay.io/biocontainers/pfam_scan:<tag>

   (see `pfam_scan/tags`_ for valid values for ``<tag>``)


.. |downloads_pfam_scan| image:: https://img.shields.io/conda/dn/bioconda/pfam_scan.svg?style=flat
   :alt:   (downloads)
.. |docker_pfam_scan| image:: https://quay.io/repository/biocontainers/pfam_scan/status
   :target: https://quay.io/repository/biocontainers/pfam_scan
.. _`pfam_scan/tags`: https://quay.io/repository/biocontainers/pfam_scan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfam_scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfam_scan/README.html