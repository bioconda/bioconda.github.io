:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebcoexpress'
.. highlight: bash

bioconductor-ebcoexpress
========================

.. conda:recipe:: bioconductor-ebcoexpress
   :replaces_section_title:

   An Empirical Bayesian Approach to Differential Co\-Expression Analysis at the Gene\-Pair Level

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EBcoexpress.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ebcoexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebcoexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebcoexpress/meta.yaml>`_

   


.. conda:package:: bioconductor-ebcoexpress

   |downloads_bioconductor-ebcoexpress| |docker_bioconductor-ebcoexpress|

   :versions: 1.26.0-0
   
   :depends bioconductor-ebarrays: >=2.46.0,<2.47.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mclust: 
   :depends r-minqa: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebcoexpress

   and update with::

      conda update bioconductor-ebcoexpress

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebcoexpress:<tag>

   (see `bioconductor-ebcoexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebcoexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebcoexpress.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ebcoexpress| image:: https://quay.io/repository/biocontainers/bioconductor-ebcoexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebcoexpress
.. _`bioconductor-ebcoexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-ebcoexpress?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebcoexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebcoexpress/README.html