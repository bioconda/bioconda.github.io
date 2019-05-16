:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alevinqc'
.. highlight: bash

bioconductor-alevinqc
=====================

.. conda:recipe:: bioconductor-alevinqc
   :replaces_section_title:

   Generate QC reports summarizing the output from an alevin run. Reports can be generated as html or pdf files\, or as shiny applications.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/alevinQC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alevinqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc/meta.yaml>`_

   


.. conda:package:: bioconductor-alevinqc

   |downloads_bioconductor-alevinqc| |docker_bioconductor-alevinqc|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alevinqc

   and update with::

      conda update bioconductor-alevinqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alevinqc:<tag>

   (see `bioconductor-alevinqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alevinqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alevinqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alevinqc
   :alt:   (downloads)
.. |docker_bioconductor-alevinqc| image:: https://quay.io/repository/biocontainers/bioconductor-alevinqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alevinqc
.. _`bioconductor-alevinqc/tags`: https://quay.io/repository/biocontainers/bioconductor-alevinqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html