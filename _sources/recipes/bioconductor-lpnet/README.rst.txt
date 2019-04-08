:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpnet'
.. highlight: bash

bioconductor-lpnet
==================

.. conda:recipe:: bioconductor-lpnet
   :replaces_section_title:

   lpNet aims at infering biological networks\, in particular signaling and gene networks. For that it takes perturbation data\, either steady\-state or time\-series\, as input and generates an LP model which allows the inference of signaling networks. For parameter identification either leave\-one\-out cross\-validation or stratified n\-fold cross\-validation can be used.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lpNet.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-lpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet/meta.yaml>`_
   :links: biotools: :biotools:`lpnet`, doi: :doi:`10.1093/bioinformatics/btv327`

   


.. conda:package:: bioconductor-lpnet

   |downloads_bioconductor-lpnet| |docker_bioconductor-lpnet|

   :versions: 2.14.0-0, 2.12.0-0, 2.10.0-0
   
   :depends bioconductor-nem: >=2.56.0,<2.57.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lpsolve: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lpnet

   and update with::

      conda update bioconductor-lpnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpnet:<tag>

   (see `bioconductor-lpnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lpnet| image:: https://quay.io/repository/biocontainers/bioconductor-lpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpnet
.. _`bioconductor-lpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-lpnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpnet/README.html