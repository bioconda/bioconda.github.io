:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-linx'
.. highlight: bash

hmftools-linx
=============

.. conda:recipe:: hmftools-linx
   :replaces_section_title:

   LINX is an annotation\, interpretation and visualisation tool for structural variants

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/sv-linx
   :license: MIT / MIT
   :recipe: /`hmftools-linx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx/meta.yaml>`_

   


.. conda:package:: hmftools-linx

   |downloads_hmftools-linx| |docker_hmftools-linx|

   :versions: 1.5-0, 1.4-0
   
   :depends bioconductor-gviz: 
   :depends circos: >=0.69.6
   :depends openjdk: >=8
   :depends r-base: 3.6.*
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magick: 
   :depends r-tidyr: 
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-linx

   and update with::

      conda update hmftools-linx

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-linx:<tag>

   (see `hmftools-linx/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-linx| image:: https://img.shields.io/conda/dn/bioconda/hmftools-linx.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-linx
   :alt:   (downloads)
.. |docker_hmftools-linx| image:: https://quay.io/repository/biocontainers/hmftools-linx/status
   :target: https://quay.io/repository/biocontainers/hmftools-linx
.. _`hmftools-linx/tags`: https://quay.io/repository/biocontainers/hmftools-linx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-linx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-linx/README.html