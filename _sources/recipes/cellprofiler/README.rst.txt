:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellprofiler'
.. highlight: bash

cellprofiler
============

.. conda:recipe:: cellprofiler
   :replaces_section_title:
   :noindex:

   CellProfiler is free\, open\-source software for quantitative analysis of biological images

   :homepage: https://github.com/CellProfiler/CellProfiler
   :license: BSD / 3-clause BSD
   :recipe: /`cellprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler/meta.yaml>`_

   CellProfiler is free\, open\-source software for quantitative analysis of biological images.No prior experience in programming or computer vision is required.



.. conda:package:: cellprofiler

   |downloads_cellprofiler| |docker_cellprofiler|

   :versions:
      
      

      ``3.1.9-1``,  ``3.1.9-0``

      

   
   :depends boto3: 
   :depends centrosome: 
   :depends docutils: 
   :depends future: 
   :depends h5py: ``>=2.10``
   :depends inflect: 
   :depends javabridge: 
   :depends joblib: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends mahotas: 
   :depends matplotlib-base: ``>=2.0.0,!=2.1.0,<3``
   :depends mysqlclient: 
   :depends numpy: ``>=1.16``
   :depends openjdk: ``8.*``
   :depends prokaryote: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-bioformats: 
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyzmq: 
   :depends raven: 
   :depends requests: 
   :depends scikit-image: ``>=0.14``
   :depends scikit-learn: ``>=0.20``
   :depends scipy: ``>=1.2``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellprofiler

   and update with::

      conda update cellprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/cellprofiler:<tag>

   (see `cellprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_cellprofiler| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler
   :alt:   (downloads)
.. |docker_cellprofiler| image:: https://quay.io/repository/biocontainers/cellprofiler/status
   :target: https://quay.io/repository/biocontainers/cellprofiler
.. _`cellprofiler/tags`: https://quay.io/repository/biocontainers/cellprofiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellprofiler/README.html