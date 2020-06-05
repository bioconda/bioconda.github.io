:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttoxin_digger'
.. highlight: bash

bttoxin_digger
==============

.. conda:recipe:: bttoxin_digger
   :replaces_section_title:
   :noindex:

   A toxin minging tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BtToxin_Digger/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BtToxin_Digger/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttoxin_digger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger/meta.yaml>`_
   :links: biotools: :biotools:`bttoxin_digger`

   


.. conda:package:: bttoxin_digger

   |downloads_bttoxin_digger| |docker_bttoxin_digger|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends libsvm: 
   :depends perl-file-tee: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
   :depends pgcgap: ``>=1.0.14``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bttoxin_digger

   and update with::

      conda update bttoxin_digger

   or use the docker container::

      docker pull quay.io/biocontainers/bttoxin_digger:<tag>

   (see `bttoxin_digger/tags`_ for valid values for ``<tag>``)


.. |downloads_bttoxin_digger| image:: https://img.shields.io/conda/dn/bioconda/bttoxin_digger.svg?style=flat
   :target: https://anaconda.org/bioconda/bttoxin_digger
   :alt:   (downloads)
.. |docker_bttoxin_digger| image:: https://quay.io/repository/biocontainers/bttoxin_digger/status
   :target: https://quay.io/repository/biocontainers/bttoxin_digger
.. _`bttoxin_digger/tags`: https://quay.io/repository/biocontainers/bttoxin_digger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttoxin_digger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttoxin_digger/README.html