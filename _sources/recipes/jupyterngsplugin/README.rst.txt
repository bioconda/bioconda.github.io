:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jupyterngsplugin'
.. highlight: bash

jupyterngsplugin
================

.. conda:recipe:: jupyterngsplugin
   :replaces_section_title:
   :noindex:

   Jupyter notebook plugin Bioinformatics NGS data analysis

   :homepage: https://pypi.org/project/jupyterngsplugin/
   :license: PUBLIC-DOMAIN
   :recipe: /`jupyterngsplugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupyterngsplugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupyterngsplugin/meta.yaml>`_

   


.. conda:package:: jupyterngsplugin

   |downloads_jupyterngsplugin| |docker_jupyterngsplugin|

   :versions:
      
      

      ``0.0.13a3-0``,  ``0.0.11a3-0``,  ``0.0.10a3-0``

      

   
   :depends biopython: 
   :depends jupyter: 
   :depends pandas: 
   :depends python: 
   :depends wand: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jupyterngsplugin

   and update with::

      mamba update jupyterngsplugin

  To create a new environment, run::

      mamba create --name myenvname jupyterngsplugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jupyterngsplugin:<tag>

   (see `jupyterngsplugin/tags`_ for valid values for ``<tag>``)


.. |downloads_jupyterngsplugin| image:: https://img.shields.io/conda/dn/bioconda/jupyterngsplugin.svg?style=flat
   :target: https://anaconda.org/bioconda/jupyterngsplugin
   :alt:   (downloads)
.. |docker_jupyterngsplugin| image:: https://quay.io/repository/biocontainers/jupyterngsplugin/status
   :target: https://quay.io/repository/biocontainers/jupyterngsplugin
.. _`jupyterngsplugin/tags`: https://quay.io/repository/biocontainers/jupyterngsplugin?tab=tags


.. raw:: html

    <script>
        var package = "jupyterngsplugin";
        var versions = ["0.0.13a3","0.0.11a3","0.0.10a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jupyterngsplugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jupyterngsplugin/README.html