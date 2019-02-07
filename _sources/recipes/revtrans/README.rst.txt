.. title:: Package Recipe 'revtrans'
.. highlight: bash


revtrans
========

.. conda:recipe:: revtrans
   :replaces_section_title:

   revtrans \- performs a reverse translation of a peptide alignment.

   :homepage: http://www.cbs.dtu.dk/services/RevTrans-2.0/web/download.php
   :license: GPL / GPLv2
   :recipe: /`revtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans/meta.yaml>`_
   :links: biotools: :biotools:`revtrans`

   


.. conda:package:: revtrans

   |downloads_revtrans| |docker_revtrans|

   :versions: 1.4

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_revtrans|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install revtrans

   and update with::

      conda update revtrans

   or use the docker container::

      docker pull quay.io/repository/biocontainers/revtrans


.. |required_by_revtrans| conda:required_by:: revtrans
.. |downloads_revtrans| image:: https://img.shields.io/conda/dn/bioconda/revtrans.svg?style=flat
   :alt:   (downloads)
.. |docker_revtrans| image:: https://quay.io/repository/biocontainers/revtrans/status
   :target: https://quay.io/repository/biocontainers/revtrans






Notes
-----
This package includes a modified version of the program named \'revtrans\_jarmo.py\' that works with peptide fragments instead of full length sequences.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revtrans/README.html

