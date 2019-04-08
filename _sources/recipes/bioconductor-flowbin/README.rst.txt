:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowbin'
.. highlight: bash

bioconductor-flowbin
====================

.. conda:recipe:: bioconductor-flowbin
   :replaces_section_title:

   Software to combine flow cytometry data that has been multiplexed into multiple tubes with common markers between them\, by establishing common bins across tubes in terms of the common markers\, then determining expression within each tube for each bin in terms of the tube\-specific markers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowBin.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbin/meta.yaml>`_

   


.. conda:package:: bioconductor-flowbin

   |downloads_bioconductor-flowbin| |docker_bioconductor-flowbin|

   :versions: 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   :depends bioconductor-flowfp: >=1.40.0,<1.41.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-class: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowbin

   and update with::

      conda update bioconductor-flowbin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowbin:<tag>

   (see `bioconductor-flowbin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowbin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowbin.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowbin| image:: https://quay.io/repository/biocontainers/bioconductor-flowbin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowbin
.. _`bioconductor-flowbin/tags`: https://quay.io/repository/biocontainers/bioconductor-flowbin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowbin/README.html