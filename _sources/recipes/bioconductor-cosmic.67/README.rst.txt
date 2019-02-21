:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmic.67'
.. highlight: bash

bioconductor-cosmic.67
======================

.. conda:recipe:: bioconductor-cosmic.67
   :replaces_section_title:

   COSMIC\: Catalogue Of Somatic Mutations In Cancer\, version 67 \(2013\-10\-24\)

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/COSMIC.67.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmic.67 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmic.67>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmic.67/meta.yaml>`_

   


.. conda:package:: bioconductor-cosmic.67

   |downloads_bioconductor-cosmic.67| |docker_bioconductor-cosmic.67|

   :versions: 1.18.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosmic.67

   and update with::

      conda update bioconductor-cosmic.67

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmic.67:<tag>

   (see `bioconductor-cosmic.67/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmic.67| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmic.67.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cosmic.67| image:: https://quay.io/repository/biocontainers/bioconductor-cosmic.67/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmic.67
.. _`bioconductor-cosmic.67/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmic.67?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmic.67/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmic.67/README.html