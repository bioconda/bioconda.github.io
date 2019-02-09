.. title:: Package Recipe 'hicexplorer'
.. highlight: bash


hicexplorer
===========

.. conda:recipe:: hicexplorer
   :replaces_section_title:

   Set of programs to process\, analyze and visualize Hi\-C data

   :homepage: https://github.com/deeptools/HiCExplorer
   :license: GPL3
   :recipe: /`hicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky504`

   


.. conda:package:: hicexplorer

   |downloads_hicexplorer| |docker_hicexplorer|

   :versions: 2.2.1, 2.2, 2.2beta, 2.1.4, 2.1.3, 2.1.2, 2.1.1, 2.1, 2.1alpha1, 2.0, 1.8.1, 1.8, 1.7.2, 1.7.1, 1.6.1, 1.6, 1.4, 1.3, 1.2, 1.1a, 0.1

   :depends: :conda:package:`biopython`  :conda:package:`configparser`  :conda:package:`cooler` >=0.8.2 :conda:package:`future`  :conda:package:`hic2cool`  :conda:package:`hicmatrix` >=7 :conda:package:`intervaltree`  :conda:package:`jinja2`  :conda:package:`matplotlib` >=2.2 :conda:package:`numpy` >=1.15 :conda:package:`pandas`  :conda:package:`pybigwig`  :conda:package:`pygenometracks`  :conda:package:`pysam`  :conda:package:`pytables`  :conda:package:`python` <3.7 :conda:package:`scipy`  :conda:package:`six`  :conda:package:`unidecode`  

   :required~by: |required_by_hicexplorer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicexplorer

   and update with::

      conda update hicexplorer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hicexplorer


.. |required_by_hicexplorer| conda:required_by:: hicexplorer
.. |downloads_hicexplorer| image:: https://img.shields.io/conda/dn/bioconda/hicexplorer.svg?style=flat
   :alt:   (downloads)
.. |docker_hicexplorer| image:: https://quay.io/repository/biocontainers/hicexplorer/status
   :target: https://quay.io/repository/biocontainers/hicexplorer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicexplorer/README.html

