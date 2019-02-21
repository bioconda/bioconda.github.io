:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-porcinecdf'
.. highlight: bash

bioconductor-porcinecdf
=======================

.. conda:recipe:: bioconductor-porcinecdf
   :replaces_section_title:

   A package containing an environment representing the Porcine.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/porcinecdf.html
   :license: LGPL
   :recipe: /`bioconductor-porcinecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcinecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcinecdf/meta.yaml>`_

   


.. conda:package:: bioconductor-porcinecdf

   |downloads_bioconductor-porcinecdf| |docker_bioconductor-porcinecdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-porcinecdf

   and update with::

      conda update bioconductor-porcinecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-porcinecdf:<tag>

   (see `bioconductor-porcinecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-porcinecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-porcinecdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-porcinecdf| image:: https://quay.io/repository/biocontainers/bioconductor-porcinecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-porcinecdf
.. _`bioconductor-porcinecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-porcinecdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-porcinecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-porcinecdf/README.html