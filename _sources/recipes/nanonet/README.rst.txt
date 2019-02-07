.. title:: Package Recipe 'nanonet'
.. highlight: bash


nanonet
=======

.. conda:recipe:: nanonet
   :replaces_section_title:

   Nanonet provides recurrent neural network basecalling for Oxford Nanopore MinION data.

   :homepage: https://github.com/nanoporetech/nanonet
   :license: MPL-2.0
   :recipe: /`nanonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet/meta.yaml>`_

   


.. conda:package:: nanonet

   |downloads_nanonet| |docker_nanonet|

   :versions: 2.0.0

   :depends: :conda:package:`argh`  :conda:package:`boost` 1.60* :conda:package:`cython`  :conda:package:`h5py`  :conda:package:`hdf5`  :conda:package:`libgcc`  :conda:package:`myriad` >=0.1.2 :conda:package:`numpy`  :conda:package:`pathtools` >=0.1.1 :conda:package:`python` 2.7* :conda:package:`pyyaml` >=3.10 :conda:package:`six`  :conda:package:`watchdog`  

   :required~by: |required_by_nanonet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanonet

   and update with::

      conda update nanonet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanonet


.. |required_by_nanonet| conda:required_by:: nanonet
.. |downloads_nanonet| image:: https://img.shields.io/conda/dn/bioconda/nanonet.svg?style=flat
   :alt:   (downloads)
.. |docker_nanonet| image:: https://quay.io/repository/biocontainers/nanonet/status
   :target: https://quay.io/repository/biocontainers/nanonet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanonet/README.html

