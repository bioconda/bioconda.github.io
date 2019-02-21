:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mercat'
.. highlight: bash

mercat
======

.. conda:recipe:: mercat
   :replaces_section_title:

   Mercat\: a versatile counter and diversity estimator for data base independent property analysis obtained from whole community sequencing data.

   :homepage: https://github.com/pnnl/mercat
   :license: BSD / BSD
   :recipe: /`mercat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat/meta.yaml>`_

   


.. conda:package:: mercat

   |downloads_mercat| |docker_mercat|

   :versions: 0.2-1, 0.2-0, 0.1-0
   
   :depends dask: 
   
   :depends humanize: 
   
   :depends joblib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends plotly: 
   
   :depends prodigal: 
   
   :depends psutil: 
   
   :depends python: 
   
   :depends scikit-bio: 0.2.3
   
   :depends trimmomatic: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mercat

   and update with::

      conda update mercat

   or use the docker container::

      docker pull quay.io/biocontainers/mercat:<tag>

   (see `mercat/tags`_ for valid values for ``<tag>``)


.. |downloads_mercat| image:: https://img.shields.io/conda/dn/bioconda/mercat.svg?style=flat
   :alt:   (downloads)
.. |docker_mercat| image:: https://quay.io/repository/biocontainers/mercat/status
   :target: https://quay.io/repository/biocontainers/mercat
.. _`mercat/tags`: https://quay.io/repository/biocontainers/mercat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mercat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mercat/README.html