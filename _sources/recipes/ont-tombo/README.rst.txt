.. title:: Package Recipe 'ont-tombo'
.. highlight: bash


ont-tombo
=========

.. conda:recipe:: ont-tombo
   :replaces_section_title:

   Detection of modified bases from raw nanopore sequencing data.

   :homepage: https://nanoporetech.github.io/tombo/
   :license: mpl-2.0
   :recipe: /`ont-tombo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-tombo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-tombo/meta.yaml>`_

   


.. conda:package:: ont-tombo

   |downloads_ont-tombo| |docker_ont-tombo|

   :versions: 1.5, 1.4, 1.3, 1.2.1.2, 1.2.1, 1.2.1b, 1.2, 1.1.1, 1.1, 1.0

   :depends: :conda:package:`cython`  :conda:package:`future`  :conda:package:`h5py`  :conda:package:`mappy` >=2.10 :conda:package:`numpy`  :conda:package:`pyfaidx`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`rpy2` <=2.8.6 :conda:package:`scipy`  :conda:package:`tqdm`  

   :required~by: |required_by_ont-tombo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ont-tombo

   and update with::

      conda update ont-tombo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ont-tombo


.. |required_by_ont-tombo| conda:required_by:: ont-tombo
.. |downloads_ont-tombo| image:: https://img.shields.io/conda/dn/bioconda/ont-tombo.svg?style=flat
   :alt:   (downloads)
.. |docker_ont-tombo| image:: https://quay.io/repository/biocontainers/ont-tombo/status
   :target: https://quay.io/repository/biocontainers/ont-tombo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-tombo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-tombo/README.html

