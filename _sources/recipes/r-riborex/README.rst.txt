:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-riborex'
.. highlight: bash

r-riborex
=========

.. conda:recipe:: r-riborex
   :replaces_section_title:

   Riborex is a R package for identification of differential translation from Ribo\-seq data.

   :homepage: https://github.com/smithlabcode/riborex
   :license: GPL-3.0
   :recipe: /`r-riborex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex/meta.yaml>`_

   


.. conda:package:: r-riborex

   |downloads_r-riborex| |docker_r-riborex|

   :versions: 2.4.0-0
   
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fdrtool: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-riborex

   and update with::

      conda update r-riborex

   or use the docker container::

      docker pull quay.io/biocontainers/r-riborex:<tag>

   (see `r-riborex/tags`_ for valid values for ``<tag>``)


.. |downloads_r-riborex| image:: https://img.shields.io/conda/dn/bioconda/r-riborex.svg?style=flat
   :target: https://anaconda.org/bioconda/r-riborex
   :alt:   (downloads)
.. |docker_r-riborex| image:: https://quay.io/repository/biocontainers/r-riborex/status
   :target: https://quay.io/repository/biocontainers/r-riborex
.. _`r-riborex/tags`: https://quay.io/repository/biocontainers/r-riborex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-riborex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-riborex/README.html