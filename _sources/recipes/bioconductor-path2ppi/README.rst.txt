.. title:: Package Recipe 'bioconductor-path2ppi'
.. highlight: bash


bioconductor-path2ppi
=====================

.. conda:recipe:: bioconductor-path2ppi
   :replaces_section_title:

   Package to predict protein\-protein interaction \(PPI\) networks in target organisms for which only a view information about PPIs is available. Path2PPI predicts PPI networks based on sets of proteins which can belong to a certain pathway from well\-established model organisms. It helps to combine and transfer information of a certain pathway or biological process from several reference organisms to one target organism. Path2PPI only depends on the sequence similarity of the involved proteins.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Path2PPI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-path2ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-path2ppi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-path2ppi/meta.yaml>`_
   :links: biotools: :biotools:`path2ppi`

   


.. conda:package:: bioconductor-path2ppi

   |downloads_bioconductor-path2ppi| |docker_bioconductor-path2ppi|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph` >=1.0.1 

   :required~by: |required_by_bioconductor-path2ppi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-path2ppi

   and update with::

      conda update bioconductor-path2ppi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-path2ppi


.. |required_by_bioconductor-path2ppi| conda:required_by:: bioconductor-path2ppi
.. |downloads_bioconductor-path2ppi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-path2ppi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-path2ppi| image:: https://quay.io/repository/biocontainers/bioconductor-path2ppi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-path2ppi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-path2ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-path2ppi/README.html

