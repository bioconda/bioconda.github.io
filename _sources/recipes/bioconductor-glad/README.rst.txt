:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glad'
.. highlight: bash

bioconductor-glad
=================

.. conda:recipe:: bioconductor-glad
   :replaces_section_title:

   Gain and Loss Analysis of DNA

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GLAD.html
   :license: GPL-2
   :recipe: /`bioconductor-glad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glad/meta.yaml>`_

   Analysis of array CGH data \: detection of breakpoints in genomic profiles and assignment of a status \(gain\, normal or loss\) to each chromosomal regions identified.


.. conda:package:: bioconductor-glad

   |downloads_bioconductor-glad| |docker_bioconductor-glad|

   :versions: 2.50.0-0, 2.48.0-1, 2.48.0-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-aws: 
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-glad

   and update with::

      conda update bioconductor-glad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glad:<tag>

   (see `bioconductor-glad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glad
   :alt:   (downloads)
.. |docker_bioconductor-glad| image:: https://quay.io/repository/biocontainers/bioconductor-glad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glad
.. _`bioconductor-glad/tags`: https://quay.io/repository/biocontainers/bioconductor-glad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glad/README.html