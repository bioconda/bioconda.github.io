:orphan:  .. only available via index, not via toctree

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

   :versions: 1.5-0, 1.4-0, 1.3-1, 1.3-0, 1.2.1.2-0, 1.2.1-0, 1.2.1b-0, 1.2-0, 1.1.1-0, 1.1-0, 1.0-0
   
   :depends cython: 
   
   :depends future: 
   
   :depends h5py: 
   
   :depends mappy: >=2.10
   
   :depends numpy: 
   
   :depends pyfaidx: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-gridextra: 
   
   :depends rpy2: <=2.8.6
   
   :depends scipy: 
   
   :depends tqdm: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ont-tombo

   and update with::

      conda update ont-tombo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ont-tombo:<tag>

   (see `ont-tombo/tags`_ for valid values for ``<tag>``)


.. |downloads_ont-tombo| image:: https://img.shields.io/conda/dn/bioconda/ont-tombo.svg?style=flat
   :alt:   (downloads)
.. |docker_ont-tombo| image:: https://quay.io/repository/biocontainers/ont-tombo/status
   :target: https://quay.io/repository/biocontainers/ont-tombo
.. _`ont-tombo/tags`: https://quay.io/repository/biocontainers/ont-tombo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-tombo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-tombo/README.html