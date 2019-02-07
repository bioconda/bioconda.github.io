.. title:: Package Recipe 'bioconductor-basespacer'
.. highlight: bash


bioconductor-basespacer
=======================

.. conda:recipe:: bioconductor-basespacer
   :replaces_section_title:

   A rich R interface to Illumina\'s BaseSpace cloud computing environment\, enabling the fast development of data analysis and visualisation tools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BaseSpaceR.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-basespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer/meta.yaml>`_
   :links: biotools: :biotools:`basespacer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-basespacer

   |downloads_bioconductor-basespacer| |docker_bioconductor-basespacer|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcurl`  :conda:package:`r-rjsonio`  

   :required~by: |required_by_bioconductor-basespacer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basespacer

   and update with::

      conda update bioconductor-basespacer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-basespacer


.. |required_by_bioconductor-basespacer| conda:required_by:: bioconductor-basespacer
.. |downloads_bioconductor-basespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basespacer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-basespacer| image:: https://quay.io/repository/biocontainers/bioconductor-basespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basespacer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basespacer/README.html

