:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsweep'
.. highlight: bash

bioconductor-rsweep
===================

.. conda:recipe:: bioconductor-rsweep
   :replaces_section_title:
   :noindex:

   Functions to creation of low dimensional comparative matrices of Amino Acid Sequence occurrences

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rSWeeP.html
   :license: GPL-3
   :recipe: /`bioconductor-rsweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsweep/meta.yaml>`_

   The SWeeP method was developed to favor the analizes between amino acids sequences and to assist alignment free phylogenetic studies. This method is based on the concept of sparse words\, which is applied in the scan of biological sequences and its the conversion in a matrix of ocurrences. Aiming the generation of low dimensional matrices of Amino Acid Sequence occurrences.


.. conda:package:: bioconductor-rsweep

   |downloads_bioconductor-rsweep| |docker_bioconductor-rsweep|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-pracma: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsweep

   and update with::

      conda update bioconductor-rsweep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsweep:<tag>

   (see `bioconductor-rsweep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsweep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsweep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsweep
   :alt:   (downloads)
.. |docker_bioconductor-rsweep| image:: https://quay.io/repository/biocontainers/bioconductor-rsweep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsweep
.. _`bioconductor-rsweep/tags`: https://quay.io/repository/biocontainers/bioconductor-rsweep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsweep/README.html