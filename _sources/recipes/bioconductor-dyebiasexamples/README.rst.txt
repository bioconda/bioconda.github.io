:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyebiasexamples'
.. highlight: bash

bioconductor-dyebiasexamples
============================

.. conda:recipe:: bioconductor-dyebiasexamples
   :replaces_section_title:

   Data for the dyebias package\, consisting of 4 self\-self hybrizations of self\-spotted yeast slides\, as well as data from Array Express accession E\-MTAB\-32

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/dyebiasexamples.html
   :license: GPL-3
   :recipe: /`bioconductor-dyebiasexamples <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples/meta.yaml>`_

   


.. conda:package:: bioconductor-dyebiasexamples

   |downloads_bioconductor-dyebiasexamples| |docker_bioconductor-dyebiasexamples|

   :versions: 1.22.0-0
   
   :depends bioconductor-geoquery: >=2.50.0,<2.51.0
   
   :depends bioconductor-marray: >=1.60.0,<1.61.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dyebiasexamples

   and update with::

      conda update bioconductor-dyebiasexamples

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyebiasexamples:<tag>

   (see `bioconductor-dyebiasexamples/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyebiasexamples| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyebiasexamples.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dyebiasexamples| image:: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples
.. _`bioconductor-dyebiasexamples/tags`: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html