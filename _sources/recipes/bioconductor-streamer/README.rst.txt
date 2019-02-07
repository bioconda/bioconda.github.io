.. title:: Package Recipe 'bioconductor-streamer'
.. highlight: bash


bioconductor-streamer
=====================

.. conda:recipe:: bioconductor-streamer
   :replaces_section_title:

   Large data files can be difficult to work with in R\, where data generally resides in memory. This package encourages a style of programming where data is \'streamed\' from disk into R via a \`producer\' and through a series of \`consumers\' that\, typically reduce the original data to a manageable size. The package provides useful Producer and Consumer stream components for operations such as data input\, sampling\, indexing\, and transformation\; see package\?Streamer for details.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Streamer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-streamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-streamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-streamer/meta.yaml>`_
   :links: biotools: :biotools:`streamer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-streamer

   |downloads_bioconductor-streamer| |docker_bioconductor-streamer|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-streamer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-streamer

   and update with::

      conda update bioconductor-streamer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-streamer


.. |required_by_bioconductor-streamer| conda:required_by:: bioconductor-streamer
.. |downloads_bioconductor-streamer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-streamer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-streamer| image:: https://quay.io/repository/biocontainers/bioconductor-streamer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-streamer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-streamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-streamer/README.html

