:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpeff'
.. highlight: bash

snpeff
======

.. conda:recipe:: snpeff
   :replaces_section_title:

   Genetic variant annotation and effect prediction toolbox

   :homepage: http://snpeff.sourceforge.net/
   :license: LGPLv3
   :recipe: /`snpeff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpeff/meta.yaml>`_
   :links: biotools: :biotools:`snpeff`

   


.. conda:package:: snpeff

   |downloads_snpeff| |docker_snpeff|

   :versions: 4.3.1t-3, 4.3.1t-2, 4.3.1t-1, 4.3.1t-0, 4.3.1r-0, 4.3.1q-0, 4.3.1p-1, 4.3.1p-0, 4.3.1o-0, 4.3.1m-0, 4.3.1k-0, 4.3-3, 4.3-2, 4.3-1, 4.3-0, 4.3k-0, 4.3i-0, 4.3g-0, 4.3b-0, 4.2-0, 4.1l-5, 4.1l-4, 4.1l-3, 4.1l-2, 4.1l-1, 4.1l-0
   
   :depends openjdk: 
   :depends python: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpeff

   and update with::

      conda update snpeff

   or use the docker container::

      docker pull quay.io/biocontainers/snpeff:<tag>

   (see `snpeff/tags`_ for valid values for ``<tag>``)


.. |downloads_snpeff| image:: https://img.shields.io/conda/dn/bioconda/snpeff.svg?style=flat
   :target: https://anaconda.org/bioconda/snpeff
   :alt:   (downloads)
.. |docker_snpeff| image:: https://quay.io/repository/biocontainers/snpeff/status
   :target: https://quay.io/repository/biocontainers/snpeff
.. _`snpeff/tags`: https://quay.io/repository/biocontainers/snpeff?tab=tags






Notes
-----
The tool is available as command \`snpEff\`. Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpeff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpeff/README.html