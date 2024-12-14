:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-anndata'
.. highlight: bash

r-anndata
=========

.. conda:recipe:: r-anndata
   :replaces_section_title:
   :noindex:

   A \'reticulate\' wrapper for the Python package \'anndata\'. Provides a scalable way of keeping track of data and learned annotations.  Used to read from and write to the h5ad file format.

   :homepage: https://github.com/dynverse/anndata
   :license: MIT / MIT
   :recipe: /`r-anndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-anndata/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1382-0`

   


.. conda:package:: r-anndata

   |downloads_r-anndata| |docker_r-anndata|

   :versions:
      
      

      ``0.7.5.6-1``,  ``0.7.5.6-0``,  ``0.7.5.4-2``,  ``0.7.5.4-1``,  ``0.7.5.4-0``,  ``0.7.5.2-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-r6: 
   :depends r-reticulate: ``>=1.17``
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

      mamba install r-anndata

   and update with::

      mamba update r-anndata

  To create a new environment, run::

      mamba create --name myenvname r-anndata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-anndata:<tag>

   (see `r-anndata/tags`_ for valid values for ``<tag>``)


.. |downloads_r-anndata| image:: https://img.shields.io/conda/dn/bioconda/r-anndata.svg?style=flat
   :target: https://anaconda.org/bioconda/r-anndata
   :alt:   (downloads)
.. |docker_r-anndata| image:: https://quay.io/repository/biocontainers/r-anndata/status
   :target: https://quay.io/repository/biocontainers/r-anndata
.. _`r-anndata/tags`: https://quay.io/repository/biocontainers/r-anndata?tab=tags


.. raw:: html

    <script>
        var package = "r-anndata";
        var versions = ["0.7.5.6","0.7.5.6","0.7.5.4","0.7.5.4","0.7.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-anndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-anndata/README.html