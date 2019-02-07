.. title:: Package Recipe 'nanoplot'
.. highlight: bash


nanoplot
========

.. conda:recipe:: nanoplot
   :replaces_section_title:

   Plotting suite for long read sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoPlot
   :license: MIT / MIT License
   :recipe: /`nanoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot/meta.yaml>`_

   


.. conda:package:: nanoplot

   |downloads_nanoplot| |docker_nanoplot|

   :versions: 1.20.0, 1.19.0, 1.18.2, 1.13.0, 1.11.0, 1.10.4, 1.8.1, 1.2.2, 1.1.0, 1.0.0, 0.16.4, 0.16.2

   :depends: :conda:package:`biopython`  :conda:package:`nanoget` >=1.4.0 :conda:package:`nanomath` >=0.21.0 :conda:package:`nanoplotter` >=0.38.0 :conda:package:`numpy`  :conda:package:`pandas` >=0.22.0 :conda:package:`pysam` >0.10.0.0 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`python-dateutil`  :conda:package:`scipy`  :conda:package:`seaborn`  

   :required~by: |required_by_nanoplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplot

   and update with::

      conda update nanoplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanoplot


.. |required_by_nanoplot| conda:required_by:: nanoplot
.. |downloads_nanoplot| image:: https://img.shields.io/conda/dn/bioconda/nanoplot.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoplot| image:: https://quay.io/repository/biocontainers/nanoplot/status
   :target: https://quay.io/repository/biocontainers/nanoplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplot/README.html

