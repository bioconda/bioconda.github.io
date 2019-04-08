:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mqtl'
.. highlight: bash

r-mqtl
======

.. conda:recipe:: r-mqtl
   :replaces_section_title:

   mQTL provides a complete QTL analysis pipeline for metabolomic data.  Distinctive features include normalisation using PQN approach\, peak alignment   using RSPA approach\, dimensionality reduction using SRV approach and finally  QTL mapping using R\/qtl package.

   :homepage: https://CRAN.R-project.org/package=mQTL
   :license: GPL / GPL
   :recipe: /`r-mqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mqtl/meta.yaml>`_

   


.. conda:package:: r-mqtl

   |downloads_r-mqtl| |docker_r-mqtl|

   :versions: 1.0-0
   
   :depends r-base: 3.4.1*
   :depends r-mass: 
   :depends r-outliers: 
   :depends r-qtl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mqtl

   and update with::

      conda update r-mqtl

   or use the docker container::

      docker pull quay.io/biocontainers/r-mqtl:<tag>

   (see `r-mqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mqtl| image:: https://img.shields.io/conda/dn/bioconda/r-mqtl.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mqtl| image:: https://quay.io/repository/biocontainers/r-mqtl/status
   :target: https://quay.io/repository/biocontainers/r-mqtl
.. _`r-mqtl/tags`: https://quay.io/repository/biocontainers/r-mqtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mqtl/README.html