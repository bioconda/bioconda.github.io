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

   :versions: 0.24, 0.16

   :depends: :conda:package:`bioconductor-rhdf5`  :conda:package:`parallel`  :conda:package:`r-base` 3.3.2* :conda:package:`r-bit64`  :conda:package:`r-data.table`  :conda:package:`r-shiny`  :conda:package:`r-svdialogs`  

   :required~by: |required_by_r-pore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pore

   and update with::

      conda update r-pore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-pore


.. |required_by_r-pore| conda:required_by:: r-pore
.. |downloads_r-pore| image:: https://img.shields.io/conda/dn/bioconda/r-pore.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pore| image:: https://quay.io/repository/biocontainers/r-pore/status
   :target: https://quay.io/repository/biocontainers/r-pore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pore/README.html

