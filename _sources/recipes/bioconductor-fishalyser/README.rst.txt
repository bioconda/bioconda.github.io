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

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-ebimage` >=4.24.0,<4.25.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-fishalyser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fishalyser

   and update with::

      conda update bioconductor-fishalyser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fishalyser


.. |required_by_bioconductor-fishalyser| conda:required_by:: bioconductor-fishalyser
.. |downloads_bioconductor-fishalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fishalyser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fishalyser| image:: https://quay.io/repository/biocontainers/bioconductor-fishalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fishalyser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html

