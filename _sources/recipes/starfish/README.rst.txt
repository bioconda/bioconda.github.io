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

   :versions: 0.0.31, 0.0.30, 0.0.29, 0.0.27, 0.0.26, 0.0.25, 0.0.23, 0.0.21, 0.0.20, 0.0.19, 0.0.18, 0.0.17, 0.0.16, 0.0.14

   :depends: :conda:package:`click`  :conda:package:`jsonschema`  :conda:package:`matplotlib`  :conda:package:`numpy` !=1.13.0 :conda:package:`pandas` >=0.23.4 :conda:package:`pytest` >=3.6.3 :conda:package:`python` >=3.6 :conda:package:`regional`  :conda:package:`requests`  :conda:package:`scikit-image` >=0.14.0 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`semantic_version`  :conda:package:`showit` 1.1.4 :conda:package:`slicedimage` 0.0.6 :conda:package:`tqdm`  :conda:package:`trackpy`  :conda:package:`validators`  :conda:package:`xarray`  

   :required~by: |required_by_starfish|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install starfish

   and update with::

      conda update starfish

   or use the docker container::

      docker pull quay.io/repository/biocontainers/starfish


.. |required_by_starfish| conda:required_by:: starfish
.. |downloads_starfish| image:: https://img.shields.io/conda/dn/bioconda/starfish.svg?style=flat
   :alt:   (downloads)
.. |docker_starfish| image:: https://quay.io/repository/biocontainers/starfish/status
   :target: https://quay.io/repository/biocontainers/starfish







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starfish/README.html

