:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stream'
.. highlight: bash

stream
======

.. conda:recipe:: stream
   :replaces_section_title:
   :noindex:

   STREAM\-Single\-cell Trajectories Reconstruction\, Exploration And Mapping

   :homepage: https://github.com/pinellolab/STREAM
   :license: AGPL-3
   :recipe: /`stream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream/meta.yaml>`_

   


.. conda:package:: stream

   |downloads_stream| |docker_stream|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-0</code>,  <code>1.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.9-3</code>,  <code>0.3.9-2</code>,  <code>0.3.9-1</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``1.1-0``,  ``1.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.9-3``,  ``0.3.9-2``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends gunicorn: 
   :depends matplotlib-base: ``>=3.2``
   :depends networkx: ``2.1.*``
   :depends numpy: 
   :depends plotly: 
   :depends python: ``>=3``
   :depends python-slugify: 
   :depends r-base: ``3.6.*``
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
   :depends rpy2: ``2.9.*``
   :depends scikit-learn: ``>=0.23``
   :depends scipy: 
   :depends seaborn: 
   :depends shapely: 
   :depends statsmodels: 
   :depends umap-learn: 
   :depends unzip: 
   :depends zip: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install stream

   and update with::

      mamba update stream

  To create a new environment, run::

      mamba create --name myenvname stream

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stream:<tag>

   (see `stream/tags`_ for valid values for ``<tag>``)


.. |downloads_stream| image:: https://img.shields.io/conda/dn/bioconda/stream.svg?style=flat
   :target: https://anaconda.org/bioconda/stream
   :alt:   (downloads)
.. |docker_stream| image:: https://quay.io/repository/biocontainers/stream/status
   :target: https://quay.io/repository/biocontainers/stream
.. _`stream/tags`: https://quay.io/repository/biocontainers/stream?tab=tags


.. raw:: html

    <script>
        var package = "stream";
        var versions = ["1.1","1.0","0.4.1","0.4.0","0.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream/README.html