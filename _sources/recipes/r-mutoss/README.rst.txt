.. title:: Package Recipe 'r-mutoss'
.. highlight: bash


r-mutoss
========

.. conda:recipe:: r-mutoss
   :replaces_section_title:

   Designed to ease the application and comparison of multiple hypothesis testing procedures for FWER\, gFWER\, FDR and FDX. Methods are  standardized and usable by the accompanying \'mutossGUI\'.

   :homepage: https://github.com/kornl/mutoss/
   :license: GPL / GPL
   :recipe: /`r-mutoss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss/meta.yaml>`_

   


.. conda:package:: r-mutoss

   |downloads_r-mutoss| |docker_r-mutoss|

   :versions: 0.1_12, 0.1_10

   :depends: :conda:package:`bioconductor-multtest` >=2.2.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-multcomp` >=1.1_0 :conda:package:`r-mvtnorm`  :conda:package:`r-plotrix`  

   :required~by: |required_by_r-mutoss|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mutoss

   and update with::

      conda update r-mutoss

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-mutoss


.. |required_by_r-mutoss| conda:required_by:: r-mutoss
.. |downloads_r-mutoss| image:: https://img.shields.io/conda/dn/bioconda/r-mutoss.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mutoss| image:: https://quay.io/repository/biocontainers/r-mutoss/status
   :target: https://quay.io/repository/biocontainers/r-mutoss







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutoss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutoss/README.html

