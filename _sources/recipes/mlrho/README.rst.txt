:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlrho'
.. highlight: bash

mlrho
=====

.. conda:recipe:: mlrho
   :replaces_section_title:

   Takes as input a file with assembled reads from a single diploid individual and returns maximum likelihood estimates of the population mutation rate\, \, the sequencing error \, the zygosity correlation\, and the population recombination rate.

   :homepage: http://guanine.evolbio.mpg.de/mlRho/
   :license: file
   :recipe: /`mlrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho/meta.yaml>`_
   :links: biotools: :biotools:`mlRho`, doi: :doi:`10.1111/j.1365-294X.2009.04482.x`

   


.. conda:package:: mlrho

   |downloads_mlrho| |docker_mlrho|

   :versions: 2.9-1, 2.9-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libgcc-ng: >=4.9
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mlrho

   and update with::

      conda update mlrho

   or use the docker container::

      docker pull quay.io/biocontainers/mlrho:<tag>

   (see `mlrho/tags`_ for valid values for ``<tag>``)


.. |downloads_mlrho| image:: https://img.shields.io/conda/dn/bioconda/mlrho.svg?style=flat
   :target: https://anaconda.org/bioconda/mlrho
   :alt:   (downloads)
.. |docker_mlrho| image:: https://quay.io/repository/biocontainers/mlrho/status
   :target: https://quay.io/repository/biocontainers/mlrho
.. _`mlrho/tags`: https://quay.io/repository/biocontainers/mlrho?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlrho/README.html