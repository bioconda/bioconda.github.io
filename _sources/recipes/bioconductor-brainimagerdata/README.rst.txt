.. title:: Package Recipe 'bioconductor-brainimagerdata'
.. highlight: bash


bioconductor-brainimagerdata
============================

.. conda:recipe:: bioconductor-brainimagerdata
   :replaces_section_title:

   brainImageRdata contains image masks for the developing human and the adult human brain. These masks can be used in conjunction with the gene expression data to generate spatial gene set enrichment plots. It also contains the expression data for the 15 pcw human brain\, the adult human brain\, and the developing human brain.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/brainImageRdata.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-brainimagerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimagerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainimagerdata/meta.yaml>`_

   


.. conda:package:: bioconductor-brainimagerdata

   |downloads_bioconductor-brainimagerdata| |docker_bioconductor-brainimagerdata|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-brainimagerdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainimagerdata

   and update with::

      conda update bioconductor-brainimagerdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-brainimagerdata


.. |required_by_bioconductor-brainimagerdata| conda:required_by:: bioconductor-brainimagerdata
.. |downloads_bioconductor-brainimagerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainimagerdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-brainimagerdata| image:: https://quay.io/repository/biocontainers/bioconductor-brainimagerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainimagerdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainimagerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainimagerdata/README.html

