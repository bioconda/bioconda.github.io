:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowbin'
.. highlight: bash

bioconductor-flowbin
====================

.. conda:recipe:: bioconductor-flowbin
   :replaces_section_title:
   :noindex:

   Combining multitube flow cytometry data by binning

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowBin.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbin/meta.yaml>`_

   Software to combine flow cytometry data that has been multiplexed into multiple tubes with common markers between them\, by establishing common bins across tubes in terms of the common markers\, then determining expression within each tube for each bin in terms of the tube\-specific markers.


.. conda:package:: bioconductor-flowbin

   |downloads_bioconductor-flowbin| |docker_bioconductor-flowbin|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowfp: ``>=1.48.0,<1.49.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-flowbin
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