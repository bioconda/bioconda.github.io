:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-process'
.. highlight: bash

bioconductor-process
====================

.. conda:recipe:: bioconductor-process
   :replaces_section_title:

   A package for processing protein mass spectrometry data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PROcess.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-process <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process/meta.yaml>`_
   :links: biotools: :biotools:`process`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-process

   |downloads_bioconductor-process| |docker_bioconductor-process|

   :versions: 1.62.0-0, 1.60.0-1, 1.60.0-0, 1.58.1-0, 1.56.0-0, 1.54.0-0
   
   :depends bioconductor-icens: >=1.58.0,<1.59.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-process

   and update with::

      conda update bioconductor-process

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-process:<tag>

   (see `bioconductor-process/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-process| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-process.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-process
   :alt:   (downloads)
.. |docker_bioconductor-process| image:: https://quay.io/repository/biocontainers/bioconductor-process/status
   :target: https://quay.io/repository/biocontainers/bioconductor-process
.. _`bioconductor-process/tags`: https://quay.io/repository/biocontainers/bioconductor-process?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-process/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-process/README.html