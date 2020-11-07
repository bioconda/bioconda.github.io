:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-progeny'
.. highlight: bash

bioconductor-progeny
====================

.. conda:recipe:: bioconductor-progeny
   :replaces_section_title:
   :noindex:

   Pathway RespOnsive GENes for activity inference from gene expression

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/progeny.html
   :license: Apache License (== 2.0) | file LICENSE
   :recipe: /`bioconductor-progeny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-progeny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-progeny/meta.yaml>`_

   This package provides a function to infer pathway activity from gene expression using PROGENy. It contains the linear model we inferred in the publication \"Perturbation\-response genes reveal signaling footprints in cancer gene expression\".


.. conda:package:: bioconductor-progeny

   |downloads_bioconductor-progeny| |docker_bioconductor-progeny|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-progeny

   and update with::

      conda update bioconductor-progeny

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-progeny:<tag>

   (see `bioconductor-progeny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-progeny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-progeny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-progeny
   :alt:   (downloads)
.. |docker_bioconductor-progeny| image:: https://quay.io/repository/biocontainers/bioconductor-progeny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-progeny
.. _`bioconductor-progeny/tags`: https://quay.io/repository/biocontainers/bioconductor-progeny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-progeny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-progeny/README.html