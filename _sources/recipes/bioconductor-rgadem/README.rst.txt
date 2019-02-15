:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgadem'
.. highlight: bash

bioconductor-rgadem
===================

.. conda:recipe:: bioconductor-rgadem
   :replaces_section_title:

   rGADEM is an efficient de novo motif discovery tool for large\-scale genomic sequence data. It is an open\-source R package\, which is based on the GADEM software.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rGADEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem/meta.yaml>`_
   :links: biotools: :biotools:`rgadem`, doi: :doi:`10.1371/journal.pone.0016432`

   


.. conda:package:: bioconductor-rgadem

   |downloads_bioconductor-rgadem| |docker_bioconductor-rgadem|

   :versions: 2.30.0-0, 2.28.0-0, 2.26.0-0, 2.24.0-0, 2.22.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-seqlogo: >=1.48.0,<1.49.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgadem

   and update with::

      conda update bioconductor-rgadem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgadem:<tag>

   (see `bioconductor-rgadem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgadem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgadem.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgadem| image:: https://quay.io/repository/biocontainers/bioconductor-rgadem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgadem
.. _`bioconductor-rgadem/tags`: https://quay.io/repository/biocontainers/bioconductor-rgadem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgadem/README.html