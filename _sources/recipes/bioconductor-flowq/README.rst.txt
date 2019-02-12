:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowq'
.. highlight: bash

bioconductor-flowq
==================

.. conda:recipe:: bioconductor-flowq
   :replaces_section_title:

   Provides quality control and quality assessment tools for flow cytometry data.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/flowQ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowq/meta.yaml>`_
   :links: biotools: :biotools:`flowq`, doi: :doi:`10.1155/2009/584603`

   


.. conda:package:: bioconductor-flowq

   |downloads_bioconductor-flowq| |docker_bioconductor-flowq|

   :versions: 1.40.0-0, 1.38.0-0
   
   :depends bioconductor-biocgenerics: >=0.26.0,<0.28.0
   
   :depends bioconductor-biodist: >=1.52.0,<1.54.0
   
   :depends bioconductor-flowcore: >=1.46.2,<1.48.0
   
   :depends bioconductor-flowviz: >=1.44.0,<1.46.0
   
   :depends bioconductor-geneplotter: >=1.58.0,<1.60.0
   
   :depends bioconductor-iranges: >=2.14.12,<2.16.0
   
   :depends bioconductor-parody: >=1.38.0,<1.40.0
   
   :depends imagemagick: 
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-lattice: 
   
   :depends r-latticeextra: 
   
   :depends r-mvoutlier: 
   
   :depends r-outliers: 
   
   :depends r-rcolorbrewer: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowq

   and update with::

      conda update bioconductor-flowq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowq:<tag>

   (see `bioconductor-flowq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowq| image:: https://quay.io/repository/biocontainers/bioconductor-flowq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowq
.. _`bioconductor-flowq/tags`: https://quay.io/repository/biocontainers/bioconductor-flowq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowq/README.html