:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucpos'
.. highlight: bash

bioconductor-nucpos
===================

.. conda:recipe:: bioconductor-nucpos
   :replaces_section_title:

   nuCpos\, a derivative of NuPoP\, is an R package for prediction of nucleosome positions. In nuCpos\, a duration hidden Markov model is trained with a chemical map of nucleosomes either from budding yeast\, fission yeast\, or mouse embryonic stem cells. nuCpos outputs the Viterbi \(most probable\) path of nucleosome\-linker states\, predicted nucleosome occupancy scores and histone binding affinity \(HBA\) scores as NuPoP does. nuCpos can also calculate local and whole nucleosomal HBA scores for a given 147\-bp sequence. Furthermore\, effect of genetic alterations on nucleosome occupancy can be predicted with this package. The parental package NuPoP\, which is based on an MNase\-seq\-based map of budding yeast nucleosomes\, was developed by Ji\-Ping Wang and Liqun Xi\, licensed under GPL\-2.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nuCpos.html
   :license: GPL-2
   :recipe: /`bioconductor-nucpos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos/meta.yaml>`_

   


.. conda:package:: bioconductor-nucpos

   |downloads_bioconductor-nucpos| |docker_bioconductor-nucpos|

   :versions: 1.2.0-0, 1.0.1-0, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nucpos

   and update with::

      conda update bioconductor-nucpos

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucpos:<tag>

   (see `bioconductor-nucpos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucpos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucpos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nucpos
   :alt:   (downloads)
.. |docker_bioconductor-nucpos| image:: https://quay.io/repository/biocontainers/bioconductor-nucpos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucpos
.. _`bioconductor-nucpos/tags`: https://quay.io/repository/biocontainers/bioconductor-nucpos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucpos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucpos/README.html