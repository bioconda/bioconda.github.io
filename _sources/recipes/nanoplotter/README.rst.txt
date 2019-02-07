.. title:: Package Recipe 'nanoplotter'
.. highlight: bash


nanoplotter
===========

.. conda:recipe:: nanoplotter
   :replaces_section_title:

   Plotting functions of Oxford Nanopore sequencing data for NanoPack

   :homepage: https://github.com/wdecoster/nanoplotter
   :license: MIT / MIT License
   :recipe: /`nanoplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter/meta.yaml>`_

   


.. conda:package:: nanoplotter

   |downloads_nanoplotter| |docker_nanoplotter|

   :versions: 1.2.1, 1.1.1, 1.0.0, 0.39.1, 0.38.0, 0.35.4, 0.35.3, 0.29.0, 0.24.1, 0.22.1, 0.13.3, 0.13.2

   :depends: :conda:package:`matplotlib` >=2.1.0 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pauvre` 0.1.86 :conda:package:`plotly` >=2.5.1 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scipy`  :conda:package:`seaborn` >=0.9.0 :conda:package:`statsmodels` >=0.8.0 

   :required~by: |required_by_nanoplotter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplotter

   and update with::

      conda update nanoplotter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanoplotter


.. |required_by_nanoplotter| conda:required_by:: nanoplotter
.. |downloads_nanoplotter| image:: https://img.shields.io/conda/dn/bioconda/nanoplotter.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoplotter| image:: https://quay.io/repository/biocontainers/nanoplotter/status
   :target: https://quay.io/repository/biocontainers/nanoplotter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplotter/README.html

