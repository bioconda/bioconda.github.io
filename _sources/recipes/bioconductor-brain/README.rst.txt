.. title:: Package Recipe 'bioconductor-brain'
.. highlight: bash


bioconductor-brain
==================

.. conda:recipe:: bioconductor-brain
   :replaces_section_title:

   Package for calculating aggregated isotopic distribution and exact center\-masses for chemical substances \(in this version composed of C\, H\, N\, O and S\). This is an implementation of the BRAIN algorithm described in the paper by J. Claesen\, P. Dittwald\, T. Burzykowski and D. Valkenborg.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BRAIN.html
   :license: GPL-2
   :recipe: /`bioconductor-brain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain/meta.yaml>`_
   :links: biotools: :biotools:`brain`, doi: :doi:`10.1021/ac303439m`

   


.. conda:package:: bioconductor-brain

   |downloads_bioconductor-brain| |docker_bioconductor-brain|

   :versions: 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-polynomf`  

   :required~by: |required_by_bioconductor-brain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brain

   and update with::

      conda update bioconductor-brain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-brain


.. |required_by_bioconductor-brain| conda:required_by:: bioconductor-brain
.. |downloads_bioconductor-brain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brain.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-brain| image:: https://quay.io/repository/biocontainers/bioconductor-brain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brain/README.html

