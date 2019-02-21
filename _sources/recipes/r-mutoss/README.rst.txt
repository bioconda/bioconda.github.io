:orphan:  .. only available via index, not via toctree

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

   :versions: 0.1_12-1, 0.1_12-0, 0.1_10-0
   
   :depends bioconductor-multtest: >=2.2.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-multcomp: >=1.1_0
   
   :depends r-mvtnorm: 
   
   :depends r-plotrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mutoss

   and update with::

      conda update r-mutoss

   or use the docker container::

      docker pull quay.io/biocontainers/r-mutoss:<tag>

   (see `r-mutoss/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mutoss| image:: https://img.shields.io/conda/dn/bioconda/r-mutoss.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mutoss| image:: https://quay.io/repository/biocontainers/r-mutoss/status
   :target: https://quay.io/repository/biocontainers/r-mutoss
.. _`r-mutoss/tags`: https://quay.io/repository/biocontainers/r-mutoss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutoss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutoss/README.html