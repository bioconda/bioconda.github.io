:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmyrib36'
.. highlight: bash

bioconductor-hmyrib36
=====================

.. conda:recipe:: bioconductor-hmyrib36
   :replaces_section_title:

   YRI hapmap \+ expression \(GENEVAR\)\, Build 36\, r23a genotypes

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/hmyriB36.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmyrib36 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmyrib36>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmyrib36/meta.yaml>`_

   


.. conda:package:: bioconductor-hmyrib36

   |downloads_bioconductor-hmyrib36| |docker_bioconductor-hmyrib36|

   :versions: 1.18.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-ggbase: >=3.44.0,<3.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmyrib36

   and update with::

      conda update bioconductor-hmyrib36

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmyrib36:<tag>

   (see `bioconductor-hmyrib36/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmyrib36| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmyrib36.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hmyrib36| image:: https://quay.io/repository/biocontainers/bioconductor-hmyrib36/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmyrib36
.. _`bioconductor-hmyrib36/tags`: https://quay.io/repository/biocontainers/bioconductor-hmyrib36?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmyrib36/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmyrib36/README.html