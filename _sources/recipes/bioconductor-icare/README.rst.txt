:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icare'
.. highlight: bash

bioconductor-icare
==================

.. conda:recipe:: bioconductor-icare
   :replaces_section_title:

   An R package to compute Individualized Coherent Absolute Risk Estimators.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/iCARE.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-icare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icare/meta.yaml>`_

   


.. conda:package:: bioconductor-icare

   |downloads_bioconductor-icare| |docker_bioconductor-icare|

   :versions: 1.12.0-1, 1.12.0-0, 1.10.3-0, 1.10.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icare

   and update with::

      conda update bioconductor-icare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icare:<tag>

   (see `bioconductor-icare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icare
   :alt:   (downloads)
.. |docker_bioconductor-icare| image:: https://quay.io/repository/biocontainers/bioconductor-icare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icare
.. _`bioconductor-icare/tags`: https://quay.io/repository/biocontainers/bioconductor-icare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icare/README.html