:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphpac'
.. highlight: bash

bioconductor-graphpac
=====================

.. conda:recipe:: bioconductor-graphpac
   :replaces_section_title:

   Identifies mutational clusters of amino acids in a protein while utilizing the proteins tertiary structure via a graph theoretical model.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GraphPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-graphpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphpac/meta.yaml>`_
   :links: biotools: :biotools:`graphpac`, doi: :doi:`10.1186/1471-2105-15-86`

   


.. conda:package:: bioconductor-graphpac

   |downloads_bioconductor-graphpac| |docker_bioconductor-graphpac|

   :versions: 1.24.0-0, 1.22.1-0, 1.20.0-0
   
   :depends bioconductor-ipac: >=1.26.0,<1.27.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-igraph: 
   
   :depends r-rmallow: 
   
   :depends r-tsp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graphpac

   and update with::

      conda update bioconductor-graphpac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-graphpac:<tag>

   (see `bioconductor-graphpac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphpac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-graphpac| image:: https://quay.io/repository/biocontainers/bioconductor-graphpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphpac
.. _`bioconductor-graphpac/tags`: https://quay.io/repository/biocontainers/bioconductor-graphpac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphpac/README.html