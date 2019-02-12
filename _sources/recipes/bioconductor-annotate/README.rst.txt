:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotate'
.. highlight: bash

bioconductor-annotate
=====================

.. conda:recipe:: bioconductor-annotate
   :replaces_section_title:

   Using R enviroments for annotation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/annotate.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotate/meta.yaml>`_
   :links: biotools: :biotools:`annotate`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-annotate

   |downloads_bioconductor-annotate| |docker_bioconductor-annotate|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.50.0-1, 1.50.0-0, 1.48.0-1, 1.48.0-0, 1.46.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-rcurl: 
   
   :depends r-xml: 
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotate

   and update with::

      conda update bioconductor-annotate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annotate:<tag>

   (see `bioconductor-annotate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotate.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annotate| image:: https://quay.io/repository/biocontainers/bioconductor-annotate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotate
.. _`bioconductor-annotate/tags`: https://quay.io/repository/biocontainers/bioconductor-annotate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotate/README.html