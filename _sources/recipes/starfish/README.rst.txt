:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starfish'
.. highlight: bash

starfish
========

.. conda:recipe:: starfish
   :replaces_section_title:

   standardized analysis pipeline for image\-based transcriptomics

   :homepage: https://github.com/spacetx/starfish
   :license: MIT
   :recipe: /`starfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish/meta.yaml>`_

   


.. conda:package:: starfish

   |downloads_starfish| |docker_starfish|

   :versions: 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.3-0, 0.1.2-0, 0.1.1-0, 0.1.0-0, 0.0.31-0, 0.0.30-0, 0.0.29-0, 0.0.27-0, 0.0.26-2, 0.0.25-2, 0.0.23-2, 0.0.21-2, 0.0.20-2, 0.0.19-2, 0.0.18-2, 0.0.17-2, 0.0.16-2, 0.0.14-2, 0.0.14-1, 0.0.14-0
   
   :depends click: 
   :depends jsonschema: 
   :depends matplotlib: 
   :depends numpy: !=1.13.0
   :depends pandas: >=0.23.4
   :depends pytest: >=3.6.3
   :depends python: >=3.6
   :depends regional: 
   :depends requests: 
   :depends scikit-image: >=0.14.0
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends semantic_version: 
   :depends showit: >=1.1.4
   :depends slicedimage: >=4.0.0
   :depends sympy: 
   :depends tqdm: 
   :depends trackpy: 
   :depends validators: 
   :depends xarray: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install starfish

   and update with::

      conda update starfish

   or use the docker container::

      docker pull quay.io/biocontainers/starfish:<tag>

   (see `starfish/tags`_ for valid values for ``<tag>``)


.. |downloads_starfish| image:: https://img.shields.io/conda/dn/bioconda/starfish.svg?style=flat
   :target: https://anaconda.org/bioconda/starfish
   :alt:   (downloads)
.. |docker_starfish| image:: https://quay.io/repository/biocontainers/starfish/status
   :target: https://quay.io/repository/biocontainers/starfish
.. _`starfish/tags`: https://quay.io/repository/biocontainers/starfish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starfish/README.html