:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'basenji'
.. highlight: bash

basenji
=======

.. conda:recipe:: basenji
   :replaces_section_title:
   :noindex:

   Sequential regulatory activity predictions with deep convolutional neural networks.

   :homepage: https://github.com/calico/basenji
   :license: Apache / Apache-2.0
   :recipe: /`basenji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji/meta.yaml>`_

   


.. conda:package:: basenji

   |downloads_basenji| |docker_basenji|

   :versions:
      
      

      ``0.6-0``,  ``0.5.1-0``,  ``0.5-0``,  ``0.4.1647b01-0``

      

   
   :depends astropy: 
   :depends cooler: 
   :depends cooltools: 
   :depends h5py: 
   :depends intervaltree: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends networkx: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pillow: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tabulate: 
   :depends tensorflow: 
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

      mamba install basenji

   and update with::

      mamba update basenji

  To create a new environment, run::

      mamba create --name myenvname basenji

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/basenji:<tag>

   (see `basenji/tags`_ for valid values for ``<tag>``)


.. |downloads_basenji| image:: https://img.shields.io/conda/dn/bioconda/basenji.svg?style=flat
   :target: https://anaconda.org/bioconda/basenji
   :alt:   (downloads)
.. |docker_basenji| image:: https://quay.io/repository/biocontainers/basenji/status
   :target: https://quay.io/repository/biocontainers/basenji
.. _`basenji/tags`: https://quay.io/repository/biocontainers/basenji?tab=tags


.. raw:: html

    <script>
        var package = "basenji";
        var versions = ["0.6","0.5.1","0.5","0.4.1647b01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/basenji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/basenji/README.html