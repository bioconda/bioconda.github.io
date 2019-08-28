:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jupyterngsplugin'
.. highlight: bash

jupyterngsplugin
================

.. conda:recipe:: jupyterngsplugin
   :replaces_section_title:

   Jupyter notebook plugin Bioinformatics NGS data analysis

   :homepage: https://pypi.org/project/jupyterngsplugin/
   :license: PUBLIC-DOMAIN
   :recipe: /`jupyterngsplugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupyterngsplugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupyterngsplugin/meta.yaml>`_

   


.. conda:package:: jupyterngsplugin

   |downloads_jupyterngsplugin| |docker_jupyterngsplugin|

   :versions: 0.0.10a3-0
   
   :depends biopython: 
   :depends jupyter: 
   :depends pandas: 
   :depends python: 
   :depends wand: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jupyterngsplugin

   and update with::

      conda update jupyterngsplugin

   or use the docker container::

      docker pull quay.io/biocontainers/jupyterngsplugin:<tag>

   (see `jupyterngsplugin/tags`_ for valid values for ``<tag>``)


.. |downloads_jupyterngsplugin| image:: https://img.shields.io/conda/dn/bioconda/jupyterngsplugin.svg?style=flat
   :target: https://anaconda.org/bioconda/jupyterngsplugin
   :alt:   (downloads)
.. |docker_jupyterngsplugin| image:: https://quay.io/repository/biocontainers/jupyterngsplugin/status
   :target: https://quay.io/repository/biocontainers/jupyterngsplugin
.. _`jupyterngsplugin/tags`: https://quay.io/repository/biocontainers/jupyterngsplugin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jupyterngsplugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jupyterngsplugin/README.html