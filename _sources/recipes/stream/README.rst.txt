:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stream'
.. highlight: bash

stream
======

.. conda:recipe:: stream
   :replaces_section_title:

   STREAM Single\-cell Trajectories Reconstruction\, Exploration And Mapping of single\-cell data http\:\/\/stream.pinellolab.org

   :homepage: https://github.com/pinellolab/STREAM
   :license: AGPL-3
   :recipe: /`stream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream/meta.yaml>`_

   


.. conda:package:: stream

   |downloads_stream| |docker_stream|

   :versions: 0.4.0-0, 0.3.9-3, 0.3.9-2, 0.3.9-1, 0.3.9-0, 0.3.8-0, 0.3.7-1, 0.3.7-0, 0.3.6-1, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.3.2-2, 0.3.2-1, 0.3.2-0, 0.3.1-2, 0.3.1-1, 0.3.1-0, 0.3.0-0, 0.2.6-0, 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.2.0-0
   
   :depends anndata: 
   :depends gunicorn: 
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends matplotlib: 3.0.2.*
   :depends networkx: 2.1.*
   :depends numpy: 
   :depends python: >=3.6,<3.7.0a0
   :depends python-slugify: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-devtools: 
   :depends r-distutils: 
   :depends r-elpigraph.r: 
   :depends r-essentials: 
   :depends r-igraph: 
   :depends r-kernsmooth: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-vgam: 
   :depends r-xml: 
   :depends rpy2: 2.9.*
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends shapely: 
   :depends statsmodels: 
   :depends umap-learn: 
   :depends unzip: 
   :depends zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stream

   and update with::

      conda update stream

   or use the docker container::

      docker pull quay.io/biocontainers/stream:<tag>

   (see `stream/tags`_ for valid values for ``<tag>``)


.. |downloads_stream| image:: https://img.shields.io/conda/dn/bioconda/stream.svg?style=flat
   :target: https://anaconda.org/bioconda/stream
   :alt:   (downloads)
.. |docker_stream| image:: https://quay.io/repository/biocontainers/stream/status
   :target: https://quay.io/repository/biocontainers/stream
.. _`stream/tags`: https://quay.io/repository/biocontainers/stream?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream/README.html