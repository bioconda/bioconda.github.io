.. title:: Package Recipe 'meta-sparse'
.. highlight: bash


meta-sparse
===========

.. conda:recipe:: meta-sparse
   :replaces_section_title:

   SPARSE indexes reference genomes in public databases into hierarchical clusters and uses it to predict origins of metagenomic reads.

   :homepage: https://github.com/zheminzhou/SPARSE/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`meta-sparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse/meta.yaml>`_

   


.. conda:package:: meta-sparse

   |downloads_meta-sparse| |docker_meta-sparse|

   :versions: 0.1.12, 0.1.11, 0.1.2

   :depends: :conda:package:`bowtie2`  :conda:package:`cython`  :conda:package:`mash`  :conda:package:`msgpack-python`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pycapnp`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`scipy`  

   :required~by: |required_by_meta-sparse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meta-sparse

   and update with::

      conda update meta-sparse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/meta-sparse


.. |required_by_meta-sparse| conda:required_by:: meta-sparse
.. |downloads_meta-sparse| image:: https://img.shields.io/conda/dn/bioconda/meta-sparse.svg?style=flat
   :alt:   (downloads)
.. |docker_meta-sparse| image:: https://quay.io/repository/biocontainers/meta-sparse/status
   :target: https://quay.io/repository/biocontainers/meta-sparse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-sparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-sparse/README.html

