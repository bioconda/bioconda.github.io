:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-massspecwavelet'
.. highlight: bash

bioconductor-massspecwavelet
============================

.. conda:recipe:: bioconductor-massspecwavelet
   :replaces_section_title:

   Mass spectrum processing by wavelet\-based algorithms

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MassSpecWavelet.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-massspecwavelet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massspecwavelet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massspecwavelet/meta.yaml>`_
   :links: biotools: :biotools:`massspecwavelet`

   Processing Mass Spectrometry spectrum by using wavelet based algorithm


.. conda:package:: bioconductor-massspecwavelet

   |downloads_bioconductor-massspecwavelet| |docker_bioconductor-massspecwavelet|

   :versions: 1.52.0-0, 1.50.0-1, 1.50.0-0, 1.48.1-0, 1.48.0-0, 1.46.0-0, 1.44.0-0, 1.42.0-0, 1.40.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-waveslim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-massspecwavelet

   and update with::

      conda update bioconductor-massspecwavelet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-massspecwavelet:<tag>

   (see `bioconductor-massspecwavelet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-massspecwavelet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massspecwavelet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-massspecwavelet
   :alt:   (downloads)
.. |docker_bioconductor-massspecwavelet| image:: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet
.. _`bioconductor-massspecwavelet/tags`: https://quay.io/repository/biocontainers/bioconductor-massspecwavelet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massspecwavelet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massspecwavelet/README.html