:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-modstrings'
.. highlight: bash

bioconductor-modstrings
=======================

.. conda:recipe:: bioconductor-modstrings
   :replaces_section_title:

   Representing nucleotide modifications in a nucleotide sequence is usually done via special characters from a number of sources. This represents a challenge to work with in R and the Biostrings package. The Modstrings package implements this functionallity for RNA and DNA sequences containing modified nucleotides by translating the character internally in order to work with the infrastructure of the Biostrings package. For this the ModRNAString and ModDNAString classes and derivates and functions to construct and modify these objects despite the encoding issues are implemenented. In addition the conversion from sequences to list like location information \(and the reverse operation\) is implemented as well.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Modstrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-modstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modstrings/meta.yaml>`_

   


.. conda:package:: bioconductor-modstrings

   |downloads_bioconductor-modstrings| |docker_bioconductor-modstrings|

   :versions: 1.0.3-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-xvector: >=0.24.0,<0.25.0
   :depends r-assertive: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-modstrings

   and update with::

      conda update bioconductor-modstrings

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-modstrings:<tag>

   (see `bioconductor-modstrings/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-modstrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-modstrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-modstrings
   :alt:   (downloads)
.. |docker_bioconductor-modstrings| image:: https://quay.io/repository/biocontainers/bioconductor-modstrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-modstrings
.. _`bioconductor-modstrings/tags`: https://quay.io/repository/biocontainers/bioconductor-modstrings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-modstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-modstrings/README.html