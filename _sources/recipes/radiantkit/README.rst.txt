:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radiantkit'
.. highlight: bash

radiantkit
==========

.. conda:recipe:: radiantkit
   :replaces_section_title:
   :noindex:

   Radiantkit is a Python package containing tools for full\-stack image analysis YFISH images.

   :homepage: https://github.com/bicrolab/radiantkit
   :license: MIT / MIT
   :recipe: /`radiantkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiantkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiantkit/meta.yaml>`_

   


.. conda:package:: radiantkit

   |downloads_radiantkit| |docker_radiantkit|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends czifile: ``>=2019.7.2``
   :depends joblib: ``>=0.16``
   :depends nd2reader: ``>=3.3``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.1``
   :depends pims: ``>=0.5``
   :depends plotly: ``>=4.13``
   :depends python: 
   :depends rich: ``>=13``
   :depends scikit-image: ``>=0.19``
   :depends tifffile: ``>=2020``
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

      mamba install radiantkit

   and update with::

      mamba update radiantkit

  To create a new environment, run::

      mamba create --name myenvname radiantkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/radiantkit:<tag>

   (see `radiantkit/tags`_ for valid values for ``<tag>``)


.. |downloads_radiantkit| image:: https://img.shields.io/conda/dn/bioconda/radiantkit.svg?style=flat
   :target: https://anaconda.org/bioconda/radiantkit
   :alt:   (downloads)
.. |docker_radiantkit| image:: https://quay.io/repository/biocontainers/radiantkit/status
   :target: https://quay.io/repository/biocontainers/radiantkit
.. _`radiantkit/tags`: https://quay.io/repository/biocontainers/radiantkit?tab=tags


.. raw:: html

    <script>
        var package = "radiantkit";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radiantkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radiantkit/README.html