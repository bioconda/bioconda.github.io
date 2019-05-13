:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pore'
.. highlight: bash

r-pore
======

.. conda:recipe:: r-pore
   :replaces_section_title:

   An R package to enable organisation and visualisation of nanopore sequencing data

   :homepage: http://sourceforge.net/projects/rpore/
   :license: BSD
   :recipe: /`r-pore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore/meta.yaml>`_

   


.. conda:package:: r-pore

   |downloads_r-pore| |docker_r-pore|

   :versions: 0.24-0, 0.16-0
   
   :depends bioconductor-rhdf5: 
   :depends parallel: 
   :depends r-base: 3.3.2*
   :depends r-bit64: 
   :depends r-data.table: 
   :depends r-shiny: 
   :depends r-svdialogs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pore

   and update with::

      conda update r-pore

   or use the docker container::

      docker pull quay.io/biocontainers/r-pore:<tag>

   (see `r-pore/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pore| image:: https://img.shields.io/conda/dn/bioconda/r-pore.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pore
   :alt:   (downloads)
.. |docker_r-pore| image:: https://quay.io/repository/biocontainers/r-pore/status
   :target: https://quay.io/repository/biocontainers/r-pore
.. _`r-pore/tags`: https://quay.io/repository/biocontainers/r-pore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pore/README.html