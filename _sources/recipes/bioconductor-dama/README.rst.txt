:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dama'
.. highlight: bash

bioconductor-dama
=================

.. conda:recipe:: bioconductor-dama
   :replaces_section_title:

   Efficient design and analysis of factorial two\-colour microarray data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/daMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dama/meta.yaml>`_
   :links: biotools: :biotools:`dama`, doi: :doi:`10.1016/j.csda.2004.08.014`

   This package contains functions for the efficient design of factorial two\-colour microarray experiments and for the statistical analysis of factorial microarray data. Statistical details are described in Bretz et al. \(2003\, submitted\)


.. conda:package:: bioconductor-dama

   |downloads_bioconductor-dama| |docker_bioconductor-dama|

   :versions: 1.58.0-0, 1.56.0-1, 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dama

   and update with::

      conda update bioconductor-dama

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dama:<tag>

   (see `bioconductor-dama/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dama| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dama.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dama
   :alt:   (downloads)
.. |docker_bioconductor-dama| image:: https://quay.io/repository/biocontainers/bioconductor-dama/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dama
.. _`bioconductor-dama/tags`: https://quay.io/repository/biocontainers/bioconductor-dama?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dama/README.html