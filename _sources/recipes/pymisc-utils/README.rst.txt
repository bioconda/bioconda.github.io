:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymisc-utils'
.. highlight: bash

pymisc-utils
============

.. conda:recipe:: pymisc-utils
   :replaces_section_title:

   Utility library for rp\-bp

   :homepage: https://github.com/dieterich-lab/pymisc-utils
   :license: MIT
   :recipe: /`pymisc-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils/meta.yaml>`_

   


.. conda:package:: pymisc-utils

   |downloads_pymisc-utils| |docker_pymisc-utils|

   :versions: 0.2.11-0, 0.2.10-1, 0.2.10-0
   
   :depends cython: 
   :depends dask: 
   :depends docopt: 
   :depends fastparquet: 
   :depends graphviz: >=2.38.0,<3.0a0
   :depends joblib: 
   :depends libgcc-ng: >=4.9
   :depends matplotlib: 
   :depends networkx: 
   :depends nltk: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends paramiko: 
   :depends pydot: 
   :depends python: >=3.5,<3.6.0a0
   :depends scikit-learn: 
   :depends scipy: 
   :depends six: 
   :depends statsmodels: 
   :depends tqdm: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymisc-utils

   and update with::

      conda update pymisc-utils

   or use the docker container::

      docker pull quay.io/biocontainers/pymisc-utils:<tag>

   (see `pymisc-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_pymisc-utils| image:: https://img.shields.io/conda/dn/bioconda/pymisc-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_pymisc-utils| image:: https://quay.io/repository/biocontainers/pymisc-utils/status
   :target: https://quay.io/repository/biocontainers/pymisc-utils
.. _`pymisc-utils/tags`: https://quay.io/repository/biocontainers/pymisc-utils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymisc-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymisc-utils/README.html