:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riborex'
.. highlight: bash

riborex
=======

.. conda:recipe:: riborex
   :replaces_section_title:

   Riborex is a R package for identification of differential translation from Ribo\-seq data.

   :homepage: https://github.com/smithlabcode/riborex
   :license: GPL-3
   :recipe: /`riborex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riborex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riborex/meta.yaml>`_

   


.. conda:package:: riborex

   |downloads_riborex| |docker_riborex|

   :versions: 2.3.4-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-fdrtool: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riborex

   and update with::

      conda update riborex

   or use the docker container::

      docker pull quay.io/biocontainers/riborex:<tag>

   (see `riborex/tags`_ for valid values for ``<tag>``)


.. |downloads_riborex| image:: https://img.shields.io/conda/dn/bioconda/riborex.svg?style=flat
   :target: https://anaconda.org/bioconda/riborex
   :alt:   (downloads)
.. |docker_riborex| image:: https://quay.io/repository/biocontainers/riborex/status
   :target: https://quay.io/repository/biocontainers/riborex
.. _`riborex/tags`: https://quay.io/repository/biocontainers/riborex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riborex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riborex/README.html