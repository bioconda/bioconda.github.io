:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dbchip'
.. highlight: bash

bioconductor-dbchip
===================

.. conda:recipe:: bioconductor-dbchip
   :replaces_section_title:

   DBChIP detects differentially bound sharp binding sites across multiple conditions\, with or without matching control samples.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DBChIP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dbchip/meta.yaml>`_

   


.. conda:package:: bioconductor-dbchip

   |downloads_bioconductor-dbchip| |docker_bioconductor-dbchip|

   :versions: 1.28.0-1, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-deseq: >=1.36.0,<1.37.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dbchip

   and update with::

      conda update bioconductor-dbchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dbchip:<tag>

   (see `bioconductor-dbchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dbchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dbchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dbchip
   :alt:   (downloads)
.. |docker_bioconductor-dbchip| image:: https://quay.io/repository/biocontainers/bioconductor-dbchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dbchip
.. _`bioconductor-dbchip/tags`: https://quay.io/repository/biocontainers/bioconductor-dbchip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dbchip/README.html