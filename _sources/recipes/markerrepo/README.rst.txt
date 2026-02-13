:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markerrepo'
.. highlight: bash

markerrepo
==========

.. conda:recipe:: markerrepo
   :replaces_section_title:
   :noindex:

   A tool for marker list management and annotation in the single cell context.

   :homepage: https://pypi.org/project/markerrepo/
   :license: MIT
   :recipe: /`markerrepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markerrepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markerrepo/meta.yaml>`_

   


.. conda:package:: markerrepo

   |downloads_markerrepo| |docker_markerrepo|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends apybiomart: 
   :depends gitpython: 
   :depends intervaltree: 
   :depends ipython: 
   :depends matplotlib-base: ``>=3.7.1``
   :depends numpy: 
   :depends pandas: ``>=1.5.3``
   :depends python: 
   :depends pyyaml: ``>=6.0``
   :depends requests: 
   :depends scanpy: 
   :depends scikit-learn: ``>=1.2.2``
   :depends seaborn: ``>=0.12.2``
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

      mamba install markerrepo

   and update with::

      mamba update markerrepo

  To create a new environment, run::

      mamba create --name myenvname markerrepo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/markerrepo:<tag>

   (see `markerrepo/tags`_ for valid values for ``<tag>``)


.. |downloads_markerrepo| image:: https://img.shields.io/conda/dn/bioconda/markerrepo.svg?style=flat
   :target: https://anaconda.org/bioconda/markerrepo
   :alt:   (downloads)
.. |docker_markerrepo| image:: https://quay.io/repository/biocontainers/markerrepo/status
   :target: https://quay.io/repository/biocontainers/markerrepo
.. _`markerrepo/tags`: https://quay.io/repository/biocontainers/markerrepo?tab=tags


.. raw:: html

    <script>
        var package = "markerrepo";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markerrepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markerrepo/README.html