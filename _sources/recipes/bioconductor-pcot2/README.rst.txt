:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcot2'
.. highlight: bash

bioconductor-pcot2
==================

.. conda:recipe:: bioconductor-pcot2
   :replaces_section_title:

   PCOT2 is a permutation\-based method for investigating changes in the activity of multi\-gene networks. It utilizes inter\-gene correlation information to detect significant alterations in gene network activities. Currently it can be applied to two\-sample comparisons.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pcot2.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pcot2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcot2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcot2/meta.yaml>`_
   :links: biotools: :biotools:`pcot2`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-pcot2

   |downloads_bioconductor-pcot2| |docker_bioconductor-pcot2|

   :versions: 1.50.0-0, 1.48.0-0, 1.46.0-0, 1.44.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-amap: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcot2

   and update with::

      conda update bioconductor-pcot2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pcot2:<tag>

   (see `bioconductor-pcot2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcot2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcot2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pcot2| image:: https://quay.io/repository/biocontainers/bioconductor-pcot2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcot2
.. _`bioconductor-pcot2/tags`: https://quay.io/repository/biocontainers/bioconductor-pcot2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcot2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcot2/README.html