.. title:: Package Recipe 'bioconductor-rama'
.. highlight: bash


bioconductor-rama
=================

.. conda:recipe:: bioconductor-rama
   :replaces_section_title:

   Robust estimation of cDNA microarray intensities with replicates. The package uses a Bayesian hierarchical model for the robust estimation. Outliers are modeled explicitly using a t\-distribution\, and the model also addresses classical issues such as design effects\, normalization\, transformation\, and nonconstant variance.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rama.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rama/meta.yaml>`_
   :links: biotools: :biotools:`rama`, doi: :doi:`10.1198/016214505000001096`

   


.. conda:package:: bioconductor-rama

   |downloads_bioconductor-rama| |docker_bioconductor-rama|

   :versions: 1.56.0, 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rama|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rama

   and update with::

      conda update bioconductor-rama

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rama


.. |required_by_bioconductor-rama| conda:required_by:: bioconductor-rama
.. |downloads_bioconductor-rama| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rama.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rama| image:: https://quay.io/repository/biocontainers/bioconductor-rama/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rama







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rama/README.html

