:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mofapy'
.. highlight: bash

mofapy
======

.. conda:recipe:: mofapy
   :replaces_section_title:
   :noindex:

   Multi\-Omics Factor Analysis

   :homepage: https://github.com/bioFAM/MOFA
   :license: LGPL / LGPL 3.0
   :recipe: /`mofapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy/meta.yaml>`_

   


.. conda:package:: mofapy

   |downloads_mofapy| |docker_mofapy|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1.1-0``

      

   
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mofapy

   and update with::

      conda update mofapy

   or use the docker container::

      docker pull quay.io/biocontainers/mofapy:<tag>

   (see `mofapy/tags`_ for valid values for ``<tag>``)


.. |downloads_mofapy| image:: https://img.shields.io/conda/dn/bioconda/mofapy.svg?style=flat
   :target: https://anaconda.org/bioconda/mofapy
   :alt:   (downloads)
.. |docker_mofapy| image:: https://quay.io/repository/biocontainers/mofapy/status
   :target: https://quay.io/repository/biocontainers/mofapy
.. _`mofapy/tags`: https://quay.io/repository/biocontainers/mofapy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mofapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mofapy/README.html