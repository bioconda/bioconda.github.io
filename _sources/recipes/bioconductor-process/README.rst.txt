.. title:: Package Recipe 'bioconductor-process'
.. highlight: bash


bioconductor-process
====================

.. conda:recipe:: bioconductor-process
   :replaces_section_title:

   A package for processing protein mass spectrometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PROcess.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-process <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process/meta.yaml>`_
   :links: biotools: :biotools:`process`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-process

   |downloads_bioconductor-process| |docker_bioconductor-process|

   :versions: 1.58.1, 1.56.0, 1.54.0

   :depends: :conda:package:`bioconductor-icens` >=1.54.0,<1.55.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-process|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-process

   and update with::

      conda update bioconductor-process

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-process


.. |required_by_bioconductor-process| conda:required_by:: bioconductor-process
.. |downloads_bioconductor-process| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-process.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-process| image:: https://quay.io/repository/biocontainers/bioconductor-process/status
   :target: https://quay.io/repository/biocontainers/bioconductor-process







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-process/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-process/README.html

