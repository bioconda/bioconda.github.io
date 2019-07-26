:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plier'
.. highlight: bash

bioconductor-plier
==================

.. conda:recipe:: bioconductor-plier
   :replaces_section_title:

   The PLIER \(Probe Logarithmic Error Intensity Estimate\) method produces an improved signal by accounting for experimentally observed patterns in probe behavior and handling error at the appropriately at low and high signal values.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/plier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-plier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plier/meta.yaml>`_
   :links: biotools: :biotools:`plier`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-plier

   |downloads_bioconductor-plier| |docker_bioconductor-plier|

   :versions: 1.54.0-1, 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends bioconductor-affy: >=1.62.0,<1.63.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plier

   and update with::

      conda update bioconductor-plier

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plier:<tag>

   (see `bioconductor-plier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plier
   :alt:   (downloads)
.. |docker_bioconductor-plier| image:: https://quay.io/repository/biocontainers/bioconductor-plier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plier
.. _`bioconductor-plier/tags`: https://quay.io/repository/biocontainers/bioconductor-plier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plier/README.html