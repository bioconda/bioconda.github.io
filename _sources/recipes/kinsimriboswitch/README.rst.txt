:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinsimriboswitch'
.. highlight: bash

kinsimriboswitch
================

.. conda:recipe:: kinsimriboswitch
   :replaces_section_title:

   Pipeline for the simulation of RNA\-\-ligand interaction kinetics as
   outlined in Kuehnl et al. 2017\, https\:\/\/doi.org\/10.1186\/s12859\-017\-1823\-5


   :homepage: http://www.bioinf.uni-leipzig.de/~felix/
   :license: GPLv3
   :recipe: /`kinsimriboswitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch/meta.yaml>`_

   


.. conda:package:: kinsimriboswitch

   |downloads_kinsimriboswitch| |docker_kinsimriboswitch|

   :versions: 0.3-0
   
   :depends coreutils: 
   
   :depends gmp: >=6.1.2,<7.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-clone: 
   
   :depends perl-devel-assert: 
   
   :depends perl-file-slurp: 
   
   :depends perl-heap: 
   
   :depends perl-inline: 
   
   :depends perl-inline-c: 
   
   :depends perl-ipc-system-simple: 
   
   :depends perl-list-moreutils: 
   
   :depends perl-math-random-mt-auto: 
   
   :depends perl-math-round: 
   
   :depends perl-parallel-loops: 
   
   :depends perl-parse-recdescent: 
   
   :depends perl-sys-info: 
   
   :depends r: 
   
   :depends r-argparser: 
   
   :depends r-rcolorbrewer: 
   
   :depends treekin: 
   
   :depends viennarna: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kinsimriboswitch

   and update with::

      conda update kinsimriboswitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kinsimriboswitch:<tag>

   (see `kinsimriboswitch/tags`_ for valid values for ``<tag>``)


.. |downloads_kinsimriboswitch| image:: https://img.shields.io/conda/dn/bioconda/kinsimriboswitch.svg?style=flat
   :alt:   (downloads)
.. |docker_kinsimriboswitch| image:: https://quay.io/repository/biocontainers/kinsimriboswitch/status
   :target: https://quay.io/repository/biocontainers/kinsimriboswitch
.. _`kinsimriboswitch/tags`: https://quay.io/repository/biocontainers/kinsimriboswitch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinsimriboswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinsimriboswitch/README.html