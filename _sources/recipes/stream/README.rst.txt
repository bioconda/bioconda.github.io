.. title:: Package Recipe 'stream'
.. highlight: bash


stream
======

.. conda:recipe:: stream
   :replaces_section_title:

   STREAM Single\-cell Trajectories Reconstruction\, Exploration And Mapping of single\-cell data http\:\/\/stream.pinellolab.org

   :homepage: https://github.com/pinellolab/STREAM
   :license: Affero
   :recipe: /`stream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream/meta.yaml>`_

   


.. conda:package:: stream

   |downloads_stream| |docker_stream|

   :versions: 0.3.5, 0.3.4, 0.3.3, 0.3.2, 0.3.1, 0.3.0, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0

   :depends: :conda:package:`anndata`  :conda:package:`gunicorn`  :conda:package:`libcxx` >=4.0.1 :conda:package:`libgfortran` >=3.0.1,<4.0.0.a0 :conda:package:`matplotlib` 3.0.2.* :conda:package:`networkx` 2.1.* :conda:package:`numpy`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`python-slugify`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-devtools`  :conda:package:`r-distutils`  :conda:package:`r-elpigraph.r`  :conda:package:`r-essentials`  :conda:package:`r-igraph`  :conda:package:`r-kernsmooth`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  :conda:package:`r-vgam`  :conda:package:`r-xml`  :conda:package:`rpy2`  :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`shapely`  :conda:package:`statsmodels`  :conda:package:`umap-learn`  :conda:package:`unzip`  :conda:package:`zip`  

   :required~by: |required_by_stream|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stream

   and update with::

      conda update stream

   or use the docker container::

      docker pull quay.io/repository/biocontainers/stream


.. |required_by_stream| conda:required_by:: stream
.. |downloads_stream| image:: https://img.shields.io/conda/dn/bioconda/stream.svg?style=flat
   :alt:   (downloads)
.. |docker_stream| image:: https://quay.io/repository/biocontainers/stream/status
   :target: https://quay.io/repository/biocontainers/stream







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream/README.html

