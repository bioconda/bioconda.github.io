:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-etec16s'
.. highlight: bash

bioconductor-etec16s
====================

.. conda:recipe:: bioconductor-etec16s
   :replaces_section_title:

   16S rRNA gene sequencing data to study changes in the faecal microbiota of 12 volunteers during a human challenge study with ETEC \(H10407\) and subsequent treatment with ciprofloxacin.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/etec16s.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-etec16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-etec16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-etec16s/meta.yaml>`_

   


.. conda:package:: bioconductor-etec16s

   |downloads_bioconductor-etec16s| |docker_bioconductor-etec16s|

   :versions: 1.10.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-metagenomeseq: >=1.24.0,<1.25.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-etec16s

   and update with::

      conda update bioconductor-etec16s

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-etec16s:<tag>

   (see `bioconductor-etec16s/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-etec16s| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-etec16s.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-etec16s| image:: https://quay.io/repository/biocontainers/bioconductor-etec16s/status
   :target: https://quay.io/repository/biocontainers/bioconductor-etec16s
.. _`bioconductor-etec16s/tags`: https://quay.io/repository/biocontainers/bioconductor-etec16s?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-etec16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-etec16s/README.html