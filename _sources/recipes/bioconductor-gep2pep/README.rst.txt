.. title:: Package Recipe 'bioconductor-gep2pep'
.. highlight: bash


bioconductor-gep2pep
====================

.. conda:recipe:: bioconductor-gep2pep
   :replaces_section_title:

   Pathway Expression Profiles \(PEPs\) are based on the expression of pathways \(defined as sets of genes\) as opposed to individual genes. This package converts gene expression profiles to PEPs and performs enrichment analysis of both pathways and experimental conditions\, such as \"drug set enrichment analysis\" and \"gene2drug\" drug discovery analysis respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gep2pep.html
   :license: GPL-3
   :recipe: /`bioconductor-gep2pep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep/meta.yaml>`_

   


.. conda:package:: bioconductor-gep2pep

   |downloads_bioconductor-gep2pep| |docker_bioconductor-gep2pep|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-digest`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-repo` >=2.1.1 :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-gep2pep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gep2pep

   and update with::

      conda update bioconductor-gep2pep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gep2pep


.. |required_by_bioconductor-gep2pep| conda:required_by:: bioconductor-gep2pep
.. |downloads_bioconductor-gep2pep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gep2pep.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gep2pep| image:: https://quay.io/repository/biocontainers/bioconductor-gep2pep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gep2pep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html

