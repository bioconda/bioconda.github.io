:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneticsdesign'
.. highlight: bash

bioconductor-geneticsdesign
===========================

.. conda:recipe:: bioconductor-geneticsdesign
   :replaces_section_title:

   Functions for designing genetics studies

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GeneticsDesign.html
   :license: GPL-2
   :recipe: /`bioconductor-geneticsdesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsdesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsdesign/meta.yaml>`_
   :links: biotools: :biotools:`geneticsdesign`, doi: :doi:`10.1038/nmeth.3252`

   This package contains functions useful for designing genetics studies\, including power and sample\-size calculations.


.. conda:package:: bioconductor-geneticsdesign

   |downloads_bioconductor-geneticsdesign| |docker_bioconductor-geneticsdesign|

   :versions: 1.54.0-0, 1.52.0-1, 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-gmodels: 
   :depends r-gtools: >=2.4.0
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneticsdesign

   and update with::

      conda update bioconductor-geneticsdesign

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneticsdesign:<tag>

   (see `bioconductor-geneticsdesign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneticsdesign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneticsdesign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneticsdesign
   :alt:   (downloads)
.. |docker_bioconductor-geneticsdesign| image:: https://quay.io/repository/biocontainers/bioconductor-geneticsdesign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneticsdesign
.. _`bioconductor-geneticsdesign/tags`: https://quay.io/repository/biocontainers/bioconductor-geneticsdesign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneticsdesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneticsdesign/README.html