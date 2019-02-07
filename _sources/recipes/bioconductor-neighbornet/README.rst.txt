.. title:: Package Recipe 'bioconductor-neighbornet'
.. highlight: bash


bioconductor-neighbornet
========================

.. conda:recipe:: bioconductor-neighbornet
   :replaces_section_title:

   Identify the putative mechanism explaining the active interactions between genes in the investigated phenotype.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NeighborNet.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-neighbornet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet/meta.yaml>`_

   


.. conda:package:: bioconductor-neighbornet

   |downloads_bioconductor-neighbornet| |docker_bioconductor-neighbornet|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-neighbornet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-neighbornet

   and update with::

      conda update bioconductor-neighbornet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-neighbornet


.. |required_by_bioconductor-neighbornet| conda:required_by:: bioconductor-neighbornet
.. |downloads_bioconductor-neighbornet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neighbornet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-neighbornet| image:: https://quay.io/repository/biocontainers/bioconductor-neighbornet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neighbornet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html

