:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cormotif'
.. highlight: bash

bioconductor-cormotif
=====================

.. conda:recipe:: bioconductor-cormotif
   :replaces_section_title:
   :noindex:

   Correlation Motif Fit

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Cormotif.html
   :license: GPL-2
   :recipe: /`bioconductor-cormotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cormotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cormotif/meta.yaml>`_
   :links: biotools: :biotools:`cormotif`

   It fits correlation motif model to multiple studies to detect study specific differential expression patterns.


.. conda:package:: bioconductor-cormotif

   |downloads_bioconductor-cormotif| |docker_bioconductor-cormotif|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cormotif

   and update with::

      conda update bioconductor-cormotif

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cormotif:<tag>

   (see `bioconductor-cormotif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cormotif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cormotif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cormotif
   :alt:   (downloads)
.. |docker_bioconductor-cormotif| image:: https://quay.io/repository/biocontainers/bioconductor-cormotif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cormotif
.. _`bioconductor-cormotif/tags`: https://quay.io/repository/biocontainers/bioconductor-cormotif?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cormotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cormotif/README.html