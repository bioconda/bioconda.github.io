:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dchiprep'
.. highlight: bash

bioconductor-dchiprep
=====================

.. conda:recipe:: bioconductor-dchiprep
   :replaces_section_title:

   The DChIPRep package implements a methodology to assess differences between chromatin modification profiles in replicated ChIP\-Seq studies as described in Chabbert et. al \- http\:\/\/www.dx.doi.org\/10.15252\/msb.20145776. A detailed description of the method is given in the software paper at https\:\/\/doi.org\/10.7717\/peerj.1981

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DChIPRep.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-dchiprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dchiprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dchiprep/meta.yaml>`_
   :links: biotools: :biotools:`dchiprep`

   


.. conda:package:: bioconductor-dchiprep

   |downloads_bioconductor-dchiprep| |docker_bioconductor-dchiprep|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-chippeakanno: >=3.16.0,<3.17.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-soggi: >=1.14.0,<1.15.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-assertthat: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fdrtool: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-smoothmest: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dchiprep

   and update with::

      conda update bioconductor-dchiprep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dchiprep:<tag>

   (see `bioconductor-dchiprep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dchiprep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dchiprep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dchiprep
   :alt:   (downloads)
.. |docker_bioconductor-dchiprep| image:: https://quay.io/repository/biocontainers/bioconductor-dchiprep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dchiprep
.. _`bioconductor-dchiprep/tags`: https://quay.io/repository/biocontainers/bioconductor-dchiprep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dchiprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dchiprep/README.html