:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancerunt'
.. highlight: bash

bioconductor-breastcancerunt
============================

.. conda:recipe:: bioconductor-breastcancerunt
   :replaces_section_title:

   Gene expression data from a breast cancer study published by Sotiriou et al. in 2007\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/breastCancerUNT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancerunt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerunt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerunt/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancerunt

   |downloads_bioconductor-breastcancerunt| |docker_bioconductor-breastcancerunt|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.65.2,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancerunt

   and update with::

      conda update bioconductor-breastcancerunt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancerunt:<tag>

   (see `bioconductor-breastcancerunt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancerunt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancerunt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breastcancerunt
   :alt:   (downloads)
.. |docker_bioconductor-breastcancerunt| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancerunt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancerunt
.. _`bioconductor-breastcancerunt/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancerunt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancerunt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancerunt/README.html