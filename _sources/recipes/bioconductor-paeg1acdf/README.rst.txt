:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paeg1acdf'
.. highlight: bash

bioconductor-paeg1acdf
======================

.. conda:recipe:: bioconductor-paeg1acdf
   :replaces_section_title:

   A package containing an environment representing the Pae\_G1a.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/paeg1acdf.html
   :license: LGPL
   :recipe: /`bioconductor-paeg1acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1acdf/meta.yaml>`_

   


.. conda:package:: bioconductor-paeg1acdf

   |downloads_bioconductor-paeg1acdf| |docker_bioconductor-paeg1acdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-paeg1acdf

   and update with::

      conda update bioconductor-paeg1acdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paeg1acdf:<tag>

   (see `bioconductor-paeg1acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paeg1acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paeg1acdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-paeg1acdf| image:: https://quay.io/repository/biocontainers/bioconductor-paeg1acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paeg1acdf
.. _`bioconductor-paeg1acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-paeg1acdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paeg1acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paeg1acdf/README.html