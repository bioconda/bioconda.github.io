:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterstab'
.. highlight: bash

bioconductor-clusterstab
========================

.. conda:recipe:: bioconductor-clusterstab
   :replaces_section_title:

   This package can be used to estimate the number of clusters in a set of microarray data\, as well as test the stability of these clusters.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/clusterStab.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterstab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterstab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterstab/meta.yaml>`_
   :links: biotools: :biotools:`clusterstab`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-clusterstab

   |downloads_bioconductor-clusterstab| |docker_bioconductor-clusterstab|

   :versions: 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterstab

   and update with::

      conda update bioconductor-clusterstab

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clusterstab:<tag>

   (see `bioconductor-clusterstab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterstab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterstab.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clusterstab| image:: https://quay.io/repository/biocontainers/bioconductor-clusterstab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterstab
.. _`bioconductor-clusterstab/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterstab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterstab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterstab/README.html