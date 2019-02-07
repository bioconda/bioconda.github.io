.. title:: Package Recipe 'nanoraw'
.. highlight: bash


nanoraw
=======

.. conda:recipe:: nanoraw
   :replaces_section_title:

   Analysis of nanopore sequencing data.

   :homepage: https://github.com/marcus1487/nanoraw
   :license: Other
   :recipe: /`nanoraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoraw/meta.yaml>`_

   


.. conda:package:: nanoraw

   |downloads_nanoraw| |docker_nanoraw|

   :versions: 0.5, 0.4.2, 0.4.1, 0.3.1, 0.2

   :depends: :conda:package:`bwa`  :conda:package:`graphmap`  :conda:package:`h5py`  :conda:package:`hdf5`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`r-base` 3.3.2* :conda:package:`r-cowplot`  :conda:package:`r-ggplot2`  :conda:package:`rpy2` >=2.4.2 :conda:package:`scipy`  

   :required~by: |required_by_nanoraw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoraw

   and update with::

      conda update nanoraw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanoraw


.. |required_by_nanoraw| conda:required_by:: nanoraw
.. |downloads_nanoraw| image:: https://img.shields.io/conda/dn/bioconda/nanoraw.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoraw| image:: https://quay.io/repository/biocontainers/nanoraw/status
   :target: https://quay.io/repository/biocontainers/nanoraw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoraw/README.html

