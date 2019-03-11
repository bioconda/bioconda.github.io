:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fishalyser'
.. highlight: bash

bioconductor-fishalyser
=======================

.. conda:recipe:: bioconductor-fishalyser
   :replaces_section_title:

   FISHalyseR provides functionality to process and analyse digital cell culture images\, in particular to quantify FISH probes within nuclei. Furthermore\, it extract the spatial location of each nucleus as well as each probe enabling spatial co\-localisation analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FISHalyseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fishalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fishalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fishalyser/meta.yaml>`_
   :links: biotools: :biotools:`fishalyser`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-fishalyser

   |downloads_bioconductor-fishalyser| |docker_bioconductor-fishalyser|

   :versions: 1.16.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-ebimage: >=4.24.0,<4.25.0
   
   :depends r-abind: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fishalyser

   and update with::

      conda update bioconductor-fishalyser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fishalyser:<tag>

   (see `bioconductor-fishalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fishalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fishalyser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fishalyser| image:: https://quay.io/repository/biocontainers/bioconductor-fishalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fishalyser
.. _`bioconductor-fishalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-fishalyser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html