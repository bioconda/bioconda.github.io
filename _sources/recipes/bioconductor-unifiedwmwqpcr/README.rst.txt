:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-unifiedwmwqpcr'
.. highlight: bash

bioconductor-unifiedwmwqpcr
===========================

.. conda:recipe:: bioconductor-unifiedwmwqpcr
   :replaces_section_title:

   This packages implements the unified Wilcoxon\-Mann\-Whitney Test for qPCR data. This modified test allows for testing differential expression in qPCR data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/unifiedWMWqPCR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-unifiedwmwqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-unifiedwmwqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-unifiedwmwqpcr/meta.yaml>`_
   :links: biotools: :biotools:`unifiedwmwqpcr`

   


.. conda:package:: bioconductor-unifiedwmwqpcr

   |downloads_bioconductor-unifiedwmwqpcr| |docker_bioconductor-unifiedwmwqpcr|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-htqpcr: >=1.36.0,<1.37.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-unifiedwmwqpcr

   and update with::

      conda update bioconductor-unifiedwmwqpcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr:<tag>

   (see `bioconductor-unifiedwmwqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-unifiedwmwqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-unifiedwmwqpcr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-unifiedwmwqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr
.. _`bioconductor-unifiedwmwqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-unifiedwmwqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-unifiedwmwqpcr/README.html