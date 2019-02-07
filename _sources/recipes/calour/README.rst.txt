.. title:: Package Recipe 'calour'
.. highlight: bash


calour
======

.. conda:recipe:: calour
   :replaces_section_title:

   exploratory and interactive microbiome analyses based on heatmaps

   :homepage: https://biocore.github.io/calour/
   :developer docs: https://github.com/biocore/calour
   :license: BSD / BSD-3-Clause
   :recipe: /`calour <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour/meta.yaml>`_

   Calour is a python package for processing\, analysis and interactive
   exploration of microbiome \(and other matrix form data\)\,
   incorporating external databases.



.. conda:package:: calour

   |downloads_calour| |docker_calour|

   :versions: 2018.10.1

   :depends: :conda:package:`biom-format`  :conda:package:`docrep`  :conda:package:`ipython`  :conda:package:`ipywidgets`  :conda:package:`matplotlib` >=2.0 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pyqt` >5 :conda:package:`python` >=3.5 :conda:package:`scikit-bio` >=0.5.1 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`statsmodels`  

   :required~by: |required_by_calour|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install calour

   and update with::

      conda update calour

   or use the docker container::

      docker pull quay.io/repository/biocontainers/calour


.. |required_by_calour| conda:required_by:: calour
.. |downloads_calour| image:: https://img.shields.io/conda/dn/bioconda/calour.svg?style=flat
   :alt:   (downloads)
.. |docker_calour| image:: https://quay.io/repository/biocontainers/calour/status
   :target: https://quay.io/repository/biocontainers/calour







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calour/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calour/README.html

