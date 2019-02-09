.. title:: Package Recipe 'dwgsim'
.. highlight: bash


dwgsim
======

.. conda:recipe:: dwgsim
   :replaces_section_title:

   Whole Genome Simulator for Next\-Generation Sequencing

   :homepage: https://github.com/nh13/DWGSIM
   :license: GPL / GNU General Public License v2 (GPLv2)
   :recipe: /`dwgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dwgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dwgsim/meta.yaml>`_

   


.. conda:package:: dwgsim

   |downloads_dwgsim| |docker_dwgsim|

   :versions: 1.1.11

   :depends: :conda:package:`ncurses`  :conda:package:`perl-app-cpanminus`  :conda:package:`perl-module-build`  :conda:package:`samtools` 0.1.18 :conda:package:`zlib`  

   :required~by: |required_by_dwgsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dwgsim

   and update with::

      conda update dwgsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dwgsim


.. |required_by_dwgsim| conda:required_by:: dwgsim
.. |downloads_dwgsim| image:: https://img.shields.io/conda/dn/bioconda/dwgsim.svg?style=flat
   :alt:   (downloads)
.. |docker_dwgsim| image:: https://quay.io/repository/biocontainers/dwgsim/status
   :target: https://quay.io/repository/biocontainers/dwgsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dwgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dwgsim/README.html

