:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neatms'
.. highlight: bash

neatms
======

.. conda:recipe:: neatms
   :replaces_section_title:
   :noindex:

   NeatMS is an open source python package for untargeted LCMS deep learning peak curation

   :homepage: https://github.com/bihealth/NeatMS
   :documentation: https://neatms.readthedocs.io/
   
   :license: MIT / MIT License
   :recipe: /`neatms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neatms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neatms/meta.yaml>`_

   


.. conda:package:: neatms

   |downloads_neatms| |docker_neatms|

   :versions:
      
      

      ``0.7-0``,  ``0.6-0``,  ``0.1-0``

      

   
   :depends h5py: 
   :depends keras: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends pymzml: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install neatms

   and update with::

      conda update neatms

   or use the docker container::

      docker pull quay.io/biocontainers/neatms:<tag>

   (see `neatms/tags`_ for valid values for ``<tag>``)


.. |downloads_neatms| image:: https://img.shields.io/conda/dn/bioconda/neatms.svg?style=flat
   :target: https://anaconda.org/bioconda/neatms
   :alt:   (downloads)
.. |docker_neatms| image:: https://quay.io/repository/biocontainers/neatms/status
   :target: https://quay.io/repository/biocontainers/neatms
.. _`neatms/tags`: https://quay.io/repository/biocontainers/neatms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neatms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neatms/README.html