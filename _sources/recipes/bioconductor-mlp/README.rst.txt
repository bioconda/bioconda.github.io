:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlp'
.. highlight: bash

bioconductor-mlp
================

.. conda:recipe:: bioconductor-mlp
   :replaces_section_title:
   :noindex:

   MLP

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MLP.html
   :license: GPL-3
   :recipe: /`bioconductor-mlp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp/meta.yaml>`_
   :links: biotools: :biotools:`mlp`, doi: :doi:`10.1007/978-3-642-24007-2_12`

   Mean Log P Analysis


.. conda:package:: bioconductor-mlp

   |downloads_bioconductor-mlp| |docker_bioconductor-mlp|

   :versions:
      
      

      ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gdata: 
   :depends r-gmodels: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlp

   and update with::

      conda update bioconductor-mlp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlp:<tag>

   (see `bioconductor-mlp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlp
   :alt:   (downloads)
.. |docker_bioconductor-mlp| image:: https://quay.io/repository/biocontainers/bioconductor-mlp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlp
.. _`bioconductor-mlp/tags`: https://quay.io/repository/biocontainers/bioconductor-mlp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlp/README.html