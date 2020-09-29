:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-sage'
.. highlight: bash

hmftools-sage
=============

.. conda:recipe:: hmftools-sage
   :replaces_section_title:
   :noindex:

   SAGE is a somatic SNV\, MNV and small INDEL caller optimised to call narrow regions of the genome with high prior chance of a variant with very high sensitivity.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/sage
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-sage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sage/meta.yaml>`_

   


.. conda:package:: hmftools-sage

   |downloads_hmftools-sage| |docker_hmftools-sage|

   :versions:
      
      

      ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``1.0-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-variantannotation: 
   :depends openjdk: ``>=8``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-tidyr: 
   :depends xorg-libxt: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-sage

   and update with::

      conda update hmftools-sage

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-sage:<tag>

   (see `hmftools-sage/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-sage| image:: https://img.shields.io/conda/dn/bioconda/hmftools-sage.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-sage
   :alt:   (downloads)
.. |docker_hmftools-sage| image:: https://quay.io/repository/biocontainers/hmftools-sage/status
   :target: https://quay.io/repository/biocontainers/hmftools-sage
.. _`hmftools-sage/tags`: https://quay.io/repository/biocontainers/hmftools-sage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-sage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-sage/README.html