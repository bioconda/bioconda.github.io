:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowfp'
.. highlight: bash

bioconductor-flowfp
===================

.. conda:recipe:: bioconductor-flowfp
   :replaces_section_title:
   :noindex:

   Fingerprinting for Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/flowFP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfp/meta.yaml>`_
   :links: biotools: :biotools:`flowfp`, doi: :doi:`10.1155/2009/193947`

   Fingerprint generation of flow cytometry data\, used to facilitate the application of machine learning and datamining tools for flow cytometry.


.. conda:package:: bioconductor-flowfp

   |downloads_bioconductor-flowfp| |docker_bioconductor-flowfp|

   :versions:
      
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowviz: ``>=1.54.0,<1.55.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-flowfp
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