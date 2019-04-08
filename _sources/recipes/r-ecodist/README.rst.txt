:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ecodist'
.. highlight: bash

r-ecodist
=========

.. conda:recipe:: r-ecodist
   :replaces_section_title:

   Dissimilarity\-based analysis functions including ordination and Mantel test functions\, intended for use with spatial and community data.

   :homepage: https://CRAN.R-project.org/package=ecodist
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-ecodist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ecodist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ecodist/meta.yaml>`_

   


.. conda:package:: r-ecodist

   |downloads_r-ecodist| |docker_r-ecodist|

   :versions: 2.0.1-3, 2.0.1-2, 2.0.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ecodist

   and update with::

      conda update r-ecodist

   or use the docker container::

      docker pull quay.io/biocontainers/r-ecodist:<tag>

   (see `r-ecodist/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ecodist| image:: https://img.shields.io/conda/dn/bioconda/r-ecodist.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ecodist| image:: https://quay.io/repository/biocontainers/r-ecodist/status
   :target: https://quay.io/repository/biocontainers/r-ecodist
.. _`r-ecodist/tags`: https://quay.io/repository/biocontainers/r-ecodist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ecodist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ecodist/README.html