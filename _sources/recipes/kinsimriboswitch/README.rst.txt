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

   :versions: 0.3

   :depends: :conda:package:`coreutils`  :conda:package:`gmp` >=6.1.2,<7.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-clone`  :conda:package:`perl-devel-assert`  :conda:package:`perl-file-slurp`  :conda:package:`perl-heap`  :conda:package:`perl-inline`  :conda:package:`perl-inline-c`  :conda:package:`perl-ipc-system-simple`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-math-random-mt-auto`  :conda:package:`perl-math-round`  :conda:package:`perl-parallel-loops`  :conda:package:`perl-parse-recdescent`  :conda:package:`perl-sys-info`  :conda:package:`r`  :conda:package:`r-argparser`  :conda:package:`r-rcolorbrewer`  :conda:package:`treekin`  :conda:package:`viennarna`  

   :required~by: |required_by_kinsimriboswitch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kinsimriboswitch

   and update with::

      conda update kinsimriboswitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kinsimriboswitch


.. |required_by_kinsimriboswitch| conda:required_by:: kinsimriboswitch
.. |downloads_kinsimriboswitch| image:: https://img.shields.io/conda/dn/bioconda/kinsimriboswitch.svg?style=flat
   :alt:   (downloads)
.. |docker_kinsimriboswitch| image:: https://quay.io/repository/biocontainers/kinsimriboswitch/status
   :target: https://quay.io/repository/biocontainers/kinsimriboswitch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinsimriboswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinsimriboswitch/README.html

