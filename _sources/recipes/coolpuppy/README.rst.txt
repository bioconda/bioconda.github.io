:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolpuppy'
.. highlight: bash

coolpuppy
=========

.. conda:recipe:: coolpuppy
   :replaces_section_title:
   :noindex:

   A versatile tool to perform pile\-up analysis on Hi\-C data in .cool format 

   :homepage: https://github.com/open2c/coolpuppy
   :documentation: https://coolpuppy.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`coolpuppy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy/meta.yaml>`_

   


.. conda:package:: coolpuppy

   |downloads_coolpuppy| |docker_coolpuppy|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bioframe: ``>=0.3.3``
   :depends cooler: ``>=0.8.5``
   :depends cooltools: ``>=0.5.2``
   :depends h5py: ``>=3.0``
   :depends h5sparse: 
   :depends m2r2: 
   :depends matplotlib-base: 
   :depends more-itertools: 
   :depends multiprocessing-logging: 
   :depends natsort: 
   :depends numba: 
   :depends numpy: ``>=1.16.5``
   :depends pandas: 
   :depends pytables: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install coolpuppy

   and update with::

      mamba update coolpuppy

  To create a new environment, run::

      mamba create --name myenvname coolpuppy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coolpuppy:<tag>

   (see `coolpuppy/tags`_ for valid values for ``<tag>``)


.. |downloads_coolpuppy| image:: https://img.shields.io/conda/dn/bioconda/coolpuppy.svg?style=flat
   :target: https://anaconda.org/bioconda/coolpuppy
   :alt:   (downloads)
.. |docker_coolpuppy| image:: https://quay.io/repository/biocontainers/coolpuppy/status
   :target: https://quay.io/repository/biocontainers/coolpuppy
.. _`coolpuppy/tags`: https://quay.io/repository/biocontainers/coolpuppy?tab=tags


.. raw:: html

    <script>
        var package = "coolpuppy";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolpuppy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolpuppy/README.html