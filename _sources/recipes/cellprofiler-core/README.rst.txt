:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellprofiler-core'
.. highlight: bash

cellprofiler-core
=================

.. conda:recipe:: cellprofiler-core
   :replaces_section_title:
   :noindex:

   Dependency for CellProfiler v4

   :homepage: https://github.com/CellProfiler/core
   :license: BSD-3-Clause
   :recipe: /`cellprofiler-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler-core/meta.yaml>`_

   


.. conda:package:: cellprofiler-core

   |downloads_cellprofiler-core| |docker_cellprofiler-core|

   :versions:
      
      

      ``4.0.7-0``,  ``4.0.6-0``

      

   
   :depends boto3: ``>=1.12.28``
   :depends centrosome: ``1.2.0``
   :depends docutils: ``0.15.2``
   :depends h5py: ``>=2.10.0``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numpy: ``>=1.18.2``
   :depends prokaryote: ``2.4.2``
   :depends psutil: ``>=5.7.0``
   :depends python: ``>=3.6,<4.0``
   :depends python-bioformats: ``4.0.0``
   :depends python-javabridge: ``4.0.0``
   :depends pyzmq: ``18.0.1``
   :depends scikit-image: ``>=0.16.2``
   :depends scipy: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellprofiler-core

   and update with::

      conda update cellprofiler-core

   or use the docker container::

      docker pull quay.io/biocontainers/cellprofiler-core:<tag>

   (see `cellprofiler-core/tags`_ for valid values for ``<tag>``)


.. |downloads_cellprofiler-core| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler-core.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler-core
   :alt:   (downloads)
.. |docker_cellprofiler-core| image:: https://quay.io/repository/biocontainers/cellprofiler-core/status
   :target: https://quay.io/repository/biocontainers/cellprofiler-core
.. _`cellprofiler-core/tags`: https://quay.io/repository/biocontainers/cellprofiler-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellprofiler-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellprofiler-core/README.html