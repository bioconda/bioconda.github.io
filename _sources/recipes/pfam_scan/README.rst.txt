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

   :versions: 1.6

   :depends: :conda:package:`hmmer` >=3.0 :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl` >=1.4 :conda:package:`perl-moose`  

   :required~by: |required_by_pfam_scan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pfam_scan

   and update with::

      conda update pfam_scan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pfam_scan


.. |required_by_pfam_scan| conda:required_by:: pfam_scan
.. |downloads_pfam_scan| image:: https://img.shields.io/conda/dn/bioconda/pfam_scan.svg?style=flat
   :alt:   (downloads)
.. |docker_pfam_scan| image:: https://quay.io/repository/biocontainers/pfam_scan/status
   :target: https://quay.io/repository/biocontainers/pfam_scan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfam_scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfam_scan/README.html

