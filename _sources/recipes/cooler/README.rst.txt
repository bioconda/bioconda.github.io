.. title:: Package Recipe 'cooler'
.. highlight: bash


cooler
======

.. conda:recipe:: cooler
   :replaces_section_title:

   Sparse binary format for genomic interaction matrices

   :homepage: https://github.com/mirnylab/cooler
   :license: BSD
   :recipe: /`cooler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler/meta.yaml>`_

   


.. conda:package:: cooler

   |downloads_cooler| |docker_cooler|

   :versions: 0.8.2, 0.8.1, 0.7.11, 0.7.10, 0.7.9, 0.7.8, 0.7.7, 0.7.6, 0.7.4, 0.7.0

   :depends: :conda:package:`asciitree`  :conda:package:`biopython`  :conda:package:`click`  :conda:package:`cytoolz`  :conda:package:`dask`  :conda:package:`h5py`  :conda:package:`hdf5`  :conda:package:`multiprocess`  :conda:package:`numpy`  :conda:package:`pairix`  :conda:package:`pandas`  :conda:package:`pyfaidx`  :conda:package:`pysam` >0.8 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyyaml`  :conda:package:`scipy`  :conda:package:`six`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cooler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cooler

   and update with::

      conda update cooler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cooler


.. |required_by_cooler| conda:required_by:: cooler
.. |downloads_cooler| image:: https://img.shields.io/conda/dn/bioconda/cooler.svg?style=flat
   :alt:   (downloads)
.. |docker_cooler| image:: https://quay.io/repository/biocontainers/cooler/status
   :target: https://quay.io/repository/biocontainers/cooler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooler/README.html

