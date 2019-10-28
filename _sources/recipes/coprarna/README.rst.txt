:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coprarna'
.. highlight: bash

coprarna
========

.. conda:recipe:: coprarna
   :replaces_section_title:

   Target prediction for prokaryotic trans\-acting small RNAs

   :homepage: https://github.com/PatrickRWright/CopraRNA
   :license: MIT
   :recipe: /`coprarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna/meta.yaml>`_

   


.. conda:package:: coprarna

   |downloads_coprarna| |docker_coprarna|

   :versions: 2.1.3-6, 2.1.3-5, 2.1.3-4, 2.1.3-3, 2.1.3-2, 2.1.3-1, 2.1.3-0, 2.1.2-0, 2.1.1-0, 2.1.0-0
   
   :depends blast-legacy: 2.2.22
   :depends bzip2: 
   :depends clustalo: 
   :depends coreutils: 8.25
   :depends domclust: 
   :depends embassy-phylip: 3.69.650
   :depends emboss: 6.5.7
   :depends gawk: 
   :depends grep: 
   :depends intarna: 2.3.1
   :depends mafft: 7.310
   :depends perl: >=5.22
   :depends perl-bio-eutilities: 1.75
   :depends perl-bioperl: 1.6.924
   :depends perl-getopt-long: 
   :depends perl-list-moreutils: 0.428
   :depends perl-parallel-forkmanager: 1.17
   :depends phantomjs: 
   :depends python: 
   :depends r-base: 3.4.1
   :depends r-pheatmap: 
   :depends r-robustrankaggreg: 
   :depends r-seqinr: 
   :depends sed: 
   :depends suds-jurko: 0.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coprarna

   and update with::

      conda update coprarna

   or use the docker container::

      docker pull quay.io/biocontainers/coprarna:<tag>

   (see `coprarna/tags`_ for valid values for ``<tag>``)


.. |downloads_coprarna| image:: https://img.shields.io/conda/dn/bioconda/coprarna.svg?style=flat
   :target: https://anaconda.org/bioconda/coprarna
   :alt:   (downloads)
.. |docker_coprarna| image:: https://quay.io/repository/biocontainers/coprarna/status
   :target: https://quay.io/repository/biocontainers/coprarna
.. _`coprarna/tags`: https://quay.io/repository/biocontainers/coprarna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coprarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coprarna/README.html