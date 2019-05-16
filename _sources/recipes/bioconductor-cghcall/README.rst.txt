:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghcall'
.. highlight: bash

bioconductor-cghcall
====================

.. conda:recipe:: bioconductor-cghcall
   :replaces_section_title:

   Calls aberrations for array CGH data using a six state mixture model as well as several biological concepts that are ignored by existing algorithms. Visualization of profiles is also provided.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CGHcall.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall/meta.yaml>`_
   :links: biotools: :biotools:`cghcall`, doi: :doi:`10.1093/bioinformatics/btm030`

   


.. conda:package:: bioconductor-cghcall

   |downloads_bioconductor-cghcall| |docker_bioconductor-cghcall|

   :versions: 2.44.0-1, 2.44.0-0, 2.42.0-0, 2.40.0-0, 2.38.0-0, 2.34.1-0, 2.34.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-cghbase: >=1.42.0,<1.43.0
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-impute: >=1.56.0,<1.57.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghcall

   and update with::

      conda update bioconductor-cghcall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghcall:<tag>

   (see `bioconductor-cghcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghcall
   :alt:   (downloads)
.. |docker_bioconductor-cghcall| image:: https://quay.io/repository/biocontainers/bioconductor-cghcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghcall
.. _`bioconductor-cghcall/tags`: https://quay.io/repository/biocontainers/bioconductor-cghcall?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghcall/README.html