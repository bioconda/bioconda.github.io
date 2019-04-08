:orphan:  .. only available via index, not via toctree

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

   :versions: 0.5-2, 0.5-1, 0.5-0, 0.4.2-0, 0.4.1-0, 0.3.1-0, 0.2-0
   
   :depends bwa: 
   :depends graphmap: 
   :depends h5py: 
   :depends hdf5: >=1.10.4,<1.10.5.0a0
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends rpy2: >=2.4.2
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoraw

   and update with::

      conda update nanoraw

   or use the docker container::

      docker pull quay.io/biocontainers/nanoraw:<tag>

   (see `nanoraw/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoraw| image:: https://img.shields.io/conda/dn/bioconda/nanoraw.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoraw| image:: https://quay.io/repository/biocontainers/nanoraw/status
   :target: https://quay.io/repository/biocontainers/nanoraw
.. _`nanoraw/tags`: https://quay.io/repository/biocontainers/nanoraw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoraw/README.html