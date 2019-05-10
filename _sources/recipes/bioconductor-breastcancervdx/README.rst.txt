:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancervdx'
.. highlight: bash

bioconductor-breastcancervdx
============================

.. conda:recipe:: bioconductor-breastcancervdx
   :replaces_section_title:

   Gene expression data from a breast cancer study published by Wang et al. in 2005 and Minn et al. in 2007\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/breastCancerVDX.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancervdx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancervdx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancervdx/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancervdx

   |downloads_bioconductor-breastcancervdx| |docker_bioconductor-breastcancervdx|

   :versions: 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancervdx

   and update with::

      conda update bioconductor-breastcancervdx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancervdx:<tag>

   (see `bioconductor-breastcancervdx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancervdx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancervdx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breastcancervdx| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx
.. _`bioconductor-breastcancervdx/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancervdx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancervdx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancervdx/README.html