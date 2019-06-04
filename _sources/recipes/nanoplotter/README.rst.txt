:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplotter'
.. highlight: bash

nanoplotter
===========

.. conda:recipe:: nanoplotter
   :replaces_section_title:

   Plotting functions of Oxford Nanopore sequencing data for NanoPack

   :homepage: https://github.com/wdecoster/nanoplotter
   :license: GPL / GPL-3.0
   :recipe: /`nanoplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter/meta.yaml>`_

   


.. conda:package:: nanoplotter

   |downloads_nanoplotter| |docker_nanoplotter|

   :versions: 1.8.1-0, 1.8.0-1, 1.8.0-0, 1.6.1-0, 1.2.1-1, 1.2.1-0, 1.1.1-0, 1.0.0-2, 0.39.1-2, 0.39.1-0, 0.38.0-0, 0.35.4-0, 0.35.3-0, 0.29.0-0, 0.24.1-0, 0.22.1-0, 0.13.3-0, 0.13.2-0
   
   :depends joypy: 
   :depends matplotlib: >=2.1.0
   :depends numpy: 
   :depends pandas: 
   :depends pauvre: 0.1.86
   :depends plotly: >=3.4.2
   :depends python: >3
   :depends scipy: 
   :depends seaborn: >=0.9.0
   :depends statsmodels: >=0.8.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplotter

   and update with::

      conda update nanoplotter

   or use the docker container::

      docker pull quay.io/biocontainers/nanoplotter:<tag>

   (see `nanoplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplotter| image:: https://img.shields.io/conda/dn/bioconda/nanoplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplotter
   :alt:   (downloads)
.. |docker_nanoplotter| image:: https://quay.io/repository/biocontainers/nanoplotter/status
   :target: https://quay.io/repository/biocontainers/nanoplotter
.. _`nanoplotter/tags`: https://quay.io/repository/biocontainers/nanoplotter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplotter/README.html