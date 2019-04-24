:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bhc'
.. highlight: bash

bioconductor-bhc
================

.. conda:recipe:: bioconductor-bhc
   :replaces_section_title:

   The method performs bottom\-up hierarchical clustering\, using a Dirichlet Process \(infinite mixture\) to model uncertainty in the data and Bayesian model selection to decide at each step which clusters to merge.  This avoids several limitations of traditional methods\, for example how many clusters there should be and how to choose a principled distance metric.  This implementation accepts multinomial \(i.e. discrete\, with 2\+ categories\) or time\-series data. This version also includes a randomised algorithm which is more efficient for larger data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BHC.html
   :license: GPL-3
   :recipe: /`bioconductor-bhc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bhc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bhc/meta.yaml>`_
   :links: biotools: :biotools:`bhc`, doi: :doi:`10.1186/1471-2105-10-242`

   


.. conda:package:: bioconductor-bhc

   |downloads_bioconductor-bhc| |docker_bioconductor-bhc|

   :versions: 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bhc

   and update with::

      conda update bioconductor-bhc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bhc:<tag>

   (see `bioconductor-bhc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bhc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bhc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bhc| image:: https://quay.io/repository/biocontainers/bioconductor-bhc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bhc
.. _`bioconductor-bhc/tags`: https://quay.io/repository/biocontainers/bioconductor-bhc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bhc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bhc/README.html