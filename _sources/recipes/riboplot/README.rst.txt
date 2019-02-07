.. title:: Package Recipe 'riboplot'
.. highlight: bash


riboplot
========

.. conda:recipe:: riboplot
   :replaces_section_title:

   Plot read counts of RiboSeq data from BAM format alignment files

   :homepage: https://github.com/vimalkvn/riboplot
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`riboplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot/meta.yaml>`_

   


.. conda:package:: riboplot

   |downloads_riboplot| |docker_riboplot|

   :versions: 0.3.1

   :depends: :conda:package:`libgcc`  :conda:package:`matplotlib` <=1.4.3 :conda:package:`mock` ==1.0.1 :conda:package:`pysam` <=0.8.3 :conda:package:`python` 2.7* 

   :required~by: |required_by_riboplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboplot

   and update with::

      conda update riboplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/riboplot


.. |required_by_riboplot| conda:required_by:: riboplot
.. |downloads_riboplot| image:: https://img.shields.io/conda/dn/bioconda/riboplot.svg?style=flat
   :alt:   (downloads)
.. |docker_riboplot| image:: https://quay.io/repository/biocontainers/riboplot/status
   :target: https://quay.io/repository/biocontainers/riboplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboplot/README.html

