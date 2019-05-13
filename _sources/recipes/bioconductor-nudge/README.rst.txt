:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nudge'
.. highlight: bash

bioconductor-nudge
==================

.. conda:recipe:: bioconductor-nudge
   :replaces_section_title:

   Package for normalizing microarray data in single and multiple replicate experiments and fitting a normal\-uniform mixture to detect differentially expressed genes in the cases where the two samples are being compared directly or indirectly \(via a common reference sample\)

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/nudge.html
   :license: GPL-2
   :recipe: /`bioconductor-nudge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nudge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nudge/meta.yaml>`_
   :links: biotools: :biotools:`nudge`, doi: :doi:`10.1186/1471-2105-6-173`

   


.. conda:package:: bioconductor-nudge

   |downloads_bioconductor-nudge| |docker_bioconductor-nudge|

   :versions: 1.46.0-0, 1.44.0-0, 1.42.0-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nudge

   and update with::

      conda update bioconductor-nudge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nudge:<tag>

   (see `bioconductor-nudge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nudge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nudge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nudge
   :alt:   (downloads)
.. |docker_bioconductor-nudge| image:: https://quay.io/repository/biocontainers/bioconductor-nudge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nudge
.. _`bioconductor-nudge/tags`: https://quay.io/repository/biocontainers/bioconductor-nudge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nudge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nudge/README.html