:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-profilescoredist'
.. highlight: bash

bioconductor-profilescoredist
=============================

.. conda:recipe:: bioconductor-profilescoredist
   :replaces_section_title:

   Regularization and score distributions for position count matrices.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/profileScoreDist.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-profilescoredist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profilescoredist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profilescoredist/meta.yaml>`_

   


.. conda:package:: bioconductor-profilescoredist

   |downloads_bioconductor-profilescoredist| |docker_bioconductor-profilescoredist|

   :versions: 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-profilescoredist

   and update with::

      conda update bioconductor-profilescoredist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-profilescoredist:<tag>

   (see `bioconductor-profilescoredist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-profilescoredist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-profilescoredist.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-profilescoredist| image:: https://quay.io/repository/biocontainers/bioconductor-profilescoredist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-profilescoredist
.. _`bioconductor-profilescoredist/tags`: https://quay.io/repository/biocontainers/bioconductor-profilescoredist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-profilescoredist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-profilescoredist/README.html