:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spia'
.. highlight: bash

bioconductor-spia
=================

.. conda:recipe:: bioconductor-spia
   :replaces_section_title:

   This package implements the Signaling Pathway Impact Analysis \(SPIA\) which uses the information form a list of differentially expressed genes and their log fold changes together with signaling pathways topology\, in order to identify the pathways most relevant to the condition under the study.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SPIA.html
   :license: file LICENSE
   :recipe: /`bioconductor-spia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spia/meta.yaml>`_
   :links: biotools: :biotools:`spia`, doi: :doi:`10.1093/bioinformatics/btn577`

   


.. conda:package:: bioconductor-spia

   |downloads_bioconductor-spia| |docker_bioconductor-spia|

   :versions: 2.38.0-0, 2.36.0-1, 2.34.0-0, 2.32.0-0, 2.30.0-0, 2.28.0-0
   
   :depends bioconductor-kegggraph: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spia

   and update with::

      conda update bioconductor-spia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spia:<tag>

   (see `bioconductor-spia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spia
   :alt:   (downloads)
.. |docker_bioconductor-spia| image:: https://quay.io/repository/biocontainers/bioconductor-spia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spia
.. _`bioconductor-spia/tags`: https://quay.io/repository/biocontainers/bioconductor-spia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spia/README.html