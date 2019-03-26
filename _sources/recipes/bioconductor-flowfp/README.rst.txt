:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowfp'
.. highlight: bash

bioconductor-flowfp
===================

.. conda:recipe:: bioconductor-flowfp
   :replaces_section_title:

   Fingerprint generation of flow cytometry data\, used to facilitate the application of machine learning and datamining tools for flow cytometry.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowFP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp/meta.yaml>`_
   :links: biotools: :biotools:`flowfp`, doi: :doi:`10.1155/2009/193947`

   


.. conda:package:: bioconductor-flowfp

   |downloads_bioconductor-flowfp| |docker_bioconductor-flowfp|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0, 1.32.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   
   :depends bioconductor-flowviz: >=1.46.0,<1.47.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowfp

   and update with::

      conda update bioconductor-flowfp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowfp:<tag>

   (see `bioconductor-flowfp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowfp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowfp| image:: https://quay.io/repository/biocontainers/bioconductor-flowfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowfp
.. _`bioconductor-flowfp/tags`: https://quay.io/repository/biocontainers/bioconductor-flowfp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowfp/README.html