.. title:: Package Recipe 'hifive'
.. highlight: bash


hifive
======

.. conda:recipe:: hifive
   :replaces_section_title:

   Python library for normalizing and analyzing HiC and 5C data

   :homepage: https://github.com/bxlab/hifive
   :license: MIT / MIT
   :recipe: /`hifive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive/meta.yaml>`_

   


.. conda:package:: hifive

   |downloads_hifive| |docker_hifive|

   :versions: 1.5.7, 1.5.6, 1.5.3, 1.5.1, 1.4.0, 1.3.1, 1.3.0, 1.2.1

   :depends: :conda:package:`cython`  :conda:package:`h5py`  :conda:package:`mpi4py`  :conda:package:`numpy`  :conda:package:`pil`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyx` 0.12.1 :conda:package:`scipy`  :conda:package:`setuptools_cython`  

   :required~by: |required_by_hifive|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hifive

   and update with::

      conda update hifive

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hifive


.. |required_by_hifive| conda:required_by:: hifive
.. |downloads_hifive| image:: https://img.shields.io/conda/dn/bioconda/hifive.svg?style=flat
   :alt:   (downloads)
.. |docker_hifive| image:: https://quay.io/repository/biocontainers/hifive/status
   :target: https://quay.io/repository/biocontainers/hifive







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifive/README.html

