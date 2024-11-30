:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'h5sparse'
.. highlight: bash

h5sparse
========

.. conda:recipe:: h5sparse
   :replaces_section_title:
   :noindex:

   Scipy sparse matrix in HDF5.

   :homepage: https://github.com/appier/h5sparse
   :license: MIT / MIT
   :recipe: /`h5sparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5sparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5sparse/meta.yaml>`_

   


.. conda:package:: h5sparse

   |downloads_h5sparse| |docker_h5sparse|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends h5py: 
   :depends numpy: 
   :depends python: 
   :depends scipy: 
   :depends six: 
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

      mamba install h5sparse

   and update with::

      mamba update h5sparse

  To create a new environment, run::

      mamba create --name myenvname h5sparse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/h5sparse:<tag>

   (see `h5sparse/tags`_ for valid values for ``<tag>``)


.. |downloads_h5sparse| image:: https://img.shields.io/conda/dn/bioconda/h5sparse.svg?style=flat
   :target: https://anaconda.org/bioconda/h5sparse
   :alt:   (downloads)
.. |docker_h5sparse| image:: https://quay.io/repository/biocontainers/h5sparse/status
   :target: https://quay.io/repository/biocontainers/h5sparse
.. _`h5sparse/tags`: https://quay.io/repository/biocontainers/h5sparse?tab=tags


.. raw:: html

    <script>
        var package = "h5sparse";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/h5sparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/h5sparse/README.html