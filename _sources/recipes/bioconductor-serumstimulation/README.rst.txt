.. title:: Package Recipe 'bioconductor-serumstimulation'
.. highlight: bash


bioconductor-serumstimulation
=============================

.. conda:recipe:: bioconductor-serumstimulation
   :replaces_section_title:

   Contains 13 micro array data results from a serum stimulation experiment

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/serumStimulation.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-serumstimulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-serumstimulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-serumstimulation/meta.yaml>`_

   


.. conda:package:: bioconductor-serumstimulation

   |downloads_bioconductor-serumstimulation| |docker_bioconductor-serumstimulation|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-serumstimulation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-serumstimulation

   and update with::

      conda update bioconductor-serumstimulation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-serumstimulation


.. |required_by_bioconductor-serumstimulation| conda:required_by:: bioconductor-serumstimulation
.. |downloads_bioconductor-serumstimulation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-serumstimulation.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-serumstimulation| image:: https://quay.io/repository/biocontainers/bioconductor-serumstimulation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-serumstimulation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-serumstimulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-serumstimulation/README.html

