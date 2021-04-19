:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'basenji'
.. highlight: bash

basenji
=======

.. conda:recipe:: basenji
   :replaces_section_title:
   :noindex:

   Sequential regulatory activity predictions with deep convolutional neural networks.

   :homepage: https://github.com/calico/basenji
   :license: Apache / Apache-2.0
   :recipe: /`basenji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji/meta.yaml>`_

   


.. conda:package:: basenji

   |downloads_basenji| |docker_basenji|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5-0``,  ``0.4.1647b01-0``

      

   
   :depends astropy: 
   :depends cooler: 
   :depends cooltools: 
   :depends h5py: 
   :depends intervaltree: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends networkx: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pillow: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tabulate: 
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install basenji

   and update with::

      conda update basenji

   or use the docker container::

      docker pull quay.io/biocontainers/basenji:<tag>

   (see `basenji/tags`_ for valid values for ``<tag>``)


.. |downloads_basenji| image:: https://img.shields.io/conda/dn/bioconda/basenji.svg?style=flat
   :target: https://anaconda.org/bioconda/basenji
   :alt:   (downloads)
.. |docker_basenji| image:: https://quay.io/repository/biocontainers/basenji/status
   :target: https://quay.io/repository/biocontainers/basenji
.. _`basenji/tags`: https://quay.io/repository/biocontainers/basenji?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/basenji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/basenji/README.html