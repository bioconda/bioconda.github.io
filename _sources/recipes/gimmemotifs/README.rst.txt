.. title:: Package Recipe 'gimmemotifs'
.. highlight: bash


gimmemotifs
===========

.. conda:recipe:: gimmemotifs
   :replaces_section_title:

   Motif prediction pipeline and various motif\-related tools

   :homepage: https://github.com/vanheeringen-lab/gimmemotifs
   :license: MIT
   :recipe: /`gimmemotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs/meta.yaml>`_
   :links: biotools: :biotools:`gimmemotifs`

   


.. conda:package:: gimmemotifs

   |downloads_gimmemotifs| |docker_gimmemotifs|

   :versions: 0.13.1, 0.13.0, 0.12.0, 0.11.1, 0.10.0, 0.10.0b6, 0.10.0b5, 0.10.0b4, 0.10.0b1, 0.9.0.6, 0.9.0.5, 0.9.0.4, 0.9.0.3, 0.8.9.1

   :depends: :conda:package:`bedtools`  :conda:package:`diskcache`  :conda:package:`feather-format`  :conda:package:`future`  :conda:package:`gadem`  :conda:package:`genomepy`  :conda:package:`ghostscript`  :conda:package:`homer`  :conda:package:`jinja2`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib` >=2.0 :conda:package:`meme`  :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`numpy` >=1.15.1,<2.0a0 :conda:package:`pillow`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`python-xxhash`  :conda:package:`pyyaml` >=3.10 :conda:package:`scikit-learn` >=0.18 :conda:package:`scipy` >=0.9.0 :conda:package:`seaborn`  :conda:package:`six`  :conda:package:`sklearn-contrib-lightning`  :conda:package:`statsmodels`  :conda:package:`tqdm`  :conda:package:`trawler`  :conda:package:`ucsc-bigbedtobed`  :conda:package:`ucsc-genepredtobed`  :conda:package:`weeder`  :conda:package:`xdg`  :conda:package:`xgboost` >=0.71 :conda:package:`xxmotif`  

   :required~by: |required_by_gimmemotifs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gimmemotifs

   and update with::

      conda update gimmemotifs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gimmemotifs


.. |required_by_gimmemotifs| conda:required_by:: gimmemotifs
.. |downloads_gimmemotifs| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs.svg?style=flat
   :alt:   (downloads)
.. |docker_gimmemotifs| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimmemotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimmemotifs/README.html

