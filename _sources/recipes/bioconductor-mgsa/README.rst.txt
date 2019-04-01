:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgsa'
.. highlight: bash

bioconductor-mgsa
=================

.. conda:recipe:: bioconductor-mgsa
   :replaces_section_title:

   Model\-based Gene Set Analysis \(MGSA\) is a Bayesian modeling approach for gene set enrichment. The package mgsa implements MGSA and tools to use MGSA together with the Gene Ontology.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mgsa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgsa/meta.yaml>`_
   :links: biotools: :biotools:`mgsa`, doi: :doi:`10.1093/nar/gkq045`

   


.. conda:package:: bioconductor-mgsa

   |downloads_bioconductor-mgsa| |docker_bioconductor-mgsa|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-0, 1.24.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-gplots: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mgsa

   and update with::

      conda update bioconductor-mgsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgsa:<tag>

   (see `bioconductor-mgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mgsa| image:: https://quay.io/repository/biocontainers/bioconductor-mgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgsa
.. _`bioconductor-mgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mgsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgsa/README.html