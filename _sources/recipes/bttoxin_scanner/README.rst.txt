:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttoxin_scanner'
.. highlight: bash

bttoxin_scanner
===============

.. conda:recipe:: bttoxin_scanner
   :replaces_section_title:
   :noindex:

   A toxin exploration tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BtToxin_scanner/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BtToxin_scanner/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttoxin_scanner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_scanner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_scanner/meta.yaml>`_
   :links: biotools: :biotools:`BtToxin_scanner`

   


.. conda:package:: bttoxin_scanner

   |downloads_bttoxin_scanner| |docker_bttoxin_scanner|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends libsvm: 
   :depends perl-file-tee: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
   :depends pgcgap: ``>=1.0.13``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bttoxin_scanner

   and update with::

      conda update bttoxin_scanner

   or use the docker container::

      docker pull quay.io/biocontainers/bttoxin_scanner:<tag>

   (see `bttoxin_scanner/tags`_ for valid values for ``<tag>``)


.. |downloads_bttoxin_scanner| image:: https://img.shields.io/conda/dn/bioconda/bttoxin_scanner.svg?style=flat
   :target: https://anaconda.org/bioconda/bttoxin_scanner
   :alt:   (downloads)
.. |docker_bttoxin_scanner| image:: https://quay.io/repository/biocontainers/bttoxin_scanner/status
   :target: https://quay.io/repository/biocontainers/bttoxin_scanner
.. _`bttoxin_scanner/tags`: https://quay.io/repository/biocontainers/bttoxin_scanner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttoxin_scanner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttoxin_scanner/README.html