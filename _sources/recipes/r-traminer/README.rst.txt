:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-traminer'
.. highlight: bash

r-traminer
==========

.. conda:recipe:: r-traminer
   :replaces_section_title:

   Toolbox for the manipulation\, description and rendering of sequences\, and more generally the mining of sequence data in the field of social sciences. Although the toolbox is primarily intended for analyzing state or event sequences that describe life courses such as family formation histories or professional careers\, its features also apply to many other kinds of categorical sequence data. It accepts many different sequence representations as input and provides tools for converting sequences from one format to another. It offers several functions for describing and rendering sequences\, for computing distances between sequences with different metrics \(among which optimal matching\)\, original dissimilarity\-based analysis tools\, and simple functions for extracting the most frequent subsequences and identifying the most discriminating ones among them. A user\'s guide can be found on the TraMineR web page.

   :homepage: http://traminer.unige.ch
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-traminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-traminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-traminer/meta.yaml>`_

   


.. conda:package:: r-traminer

   |downloads_r-traminer| |docker_r-traminer|

   :versions: 2.0_9-2, 2.0_9-1, 2.0_9-0, 2.0_8-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-boot: 
   :depends r-cluster: 
   :depends r-hmisc: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-traminer

   and update with::

      conda update r-traminer

   or use the docker container::

      docker pull quay.io/biocontainers/r-traminer:<tag>

   (see `r-traminer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-traminer| image:: https://img.shields.io/conda/dn/bioconda/r-traminer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-traminer
   :alt:   (downloads)
.. |docker_r-traminer| image:: https://quay.io/repository/biocontainers/r-traminer/status
   :target: https://quay.io/repository/biocontainers/r-traminer
.. _`r-traminer/tags`: https://quay.io/repository/biocontainers/r-traminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-traminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-traminer/README.html