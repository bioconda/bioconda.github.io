.. title:: Package Recipe 'bioconductor-spia'
.. highlight: bash


bioconductor-spia
=================

.. conda:recipe:: bioconductor-spia
   :replaces_section_title:

   This package implements the Signaling Pathway Impact Analysis \(SPIA\) which uses the information form a list of differentially expressed genes and their log fold changes together with signaling pathways topology\, in order to identify the pathways most relevant to the condition under the study.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SPIA.html
   :license: file LICENSE
   :recipe: /`bioconductor-spia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia/meta.yaml>`_
   :links: biotools: :biotools:`spia`, doi: :doi:`10.1093/bioinformatics/btn577`

   


.. conda:package:: bioconductor-spia

   |downloads_bioconductor-spia| |docker_bioconductor-spia|

   :versions: 2.34.0, 2.32.0, 2.30.0, 2.28.0

   :depends: :conda:package:`bioconductor-kegggraph` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-spia|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spia

   and update with::

      conda update bioconductor-spia

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-spia


.. |required_by_bioconductor-spia| conda:required_by:: bioconductor-spia
.. |downloads_bioconductor-spia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spia.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-spia| image:: https://quay.io/repository/biocontainers/bioconductor-spia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spia







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spia/README.html

