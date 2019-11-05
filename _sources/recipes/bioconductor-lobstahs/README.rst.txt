:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lobstahs'
.. highlight: bash

bioconductor-lobstahs
=====================

.. conda:recipe:: bioconductor-lobstahs
   :replaces_section_title:

   LOBSTAHS is a multifunction package for screening\, annotation\, and putative identification of mass spectral features in large\, HPLC\-MS lipid datasets. In silico data for a wide range of lipids\, oxidized lipids\, and oxylipins can be generated from user\-supplied structural criteria with a database generation function. LOBSTAHS then applies these databases to assign putative compound identities to features in any high\-mass accuracy dataset that has been processed using xcms and CAMERA. Users can then apply a series of orthogonal screening criteria based on adduct ion formation patterns\, chromatographic retention time\, and other properties\, to evaluate and assign confidence scores to this list of preliminary assignments. During the screening routine\, LOBSTAHS rejects assignments that do not meet the specified criteria\, identifies potential isomers and isobars\, and assigns a variety of annotation codes to assist the user in evaluating the accuracy of each assignment.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/LOBSTAHS.html
   :license: GPL (>= 3) + file LICENSE
   :recipe: /`bioconductor-lobstahs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lobstahs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lobstahs/meta.yaml>`_
   :links: biotools: :biotools:`lobstahs`

   


.. conda:package:: bioconductor-lobstahs

   |downloads_bioconductor-lobstahs| |docker_bioconductor-lobstahs|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.1-0, 1.4.0-0
   
   :depends bioconductor-camera: >=1.42.0,<1.43.0
   :depends bioconductor-xcms: >=3.8.0,<3.9.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lobstahs

   and update with::

      conda update bioconductor-lobstahs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lobstahs:<tag>

   (see `bioconductor-lobstahs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lobstahs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lobstahs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lobstahs
   :alt:   (downloads)
.. |docker_bioconductor-lobstahs| image:: https://quay.io/repository/biocontainers/bioconductor-lobstahs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lobstahs
.. _`bioconductor-lobstahs/tags`: https://quay.io/repository/biocontainers/bioconductor-lobstahs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html