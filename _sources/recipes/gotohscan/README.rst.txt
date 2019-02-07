.. title:: Package Recipe 'gotohscan'
.. highlight: bash


gotohscan
=========

.. conda:recipe:: gotohscan
   :replaces_section_title:

   a search tool that finds shorter sequences \(usually genes\) in large database sequences \(chromosomes\, genomes\, ..\) by computing all semi\-global alignments.

   :homepage: http://www.bioinf.uni-leipzig.de/
   :license: GPL
   :recipe: /`gotohscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan/meta.yaml>`_

   


.. conda:package:: gotohscan

   |downloads_gotohscan| |docker_gotohscan|

   :versions: 1.3

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_gotohscan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gotohscan

   and update with::

      conda update gotohscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gotohscan


.. |required_by_gotohscan| conda:required_by:: gotohscan
.. |downloads_gotohscan| image:: https://img.shields.io/conda/dn/bioconda/gotohscan.svg?style=flat
   :alt:   (downloads)
.. |docker_gotohscan| image:: https://quay.io/repository/biocontainers/gotohscan/status
   :target: https://quay.io/repository/biocontainers/gotohscan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gotohscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gotohscan/README.html

