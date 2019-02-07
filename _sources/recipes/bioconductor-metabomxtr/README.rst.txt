.. title:: Package Recipe 'bioconductor-metabomxtr'
.. highlight: bash


bioconductor-metabomxtr
=======================

.. conda:recipe:: bioconductor-metabomxtr
   :replaces_section_title:

   The functions in this package return optimized parameter estimates and log likelihoods for mixture models of truncated data with normal or lognormal distributions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metabomxtr.html
   :license: GPL-2
   :recipe: /`bioconductor-metabomxtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr/meta.yaml>`_

   


.. conda:package:: bioconductor-metabomxtr

   |downloads_bioconductor-metabomxtr| |docker_bioconductor-metabomxtr|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-formula`  :conda:package:`r-ggplot2`  :conda:package:`r-optimx`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-metabomxtr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabomxtr

   and update with::

      conda update bioconductor-metabomxtr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metabomxtr


.. |required_by_bioconductor-metabomxtr| conda:required_by:: bioconductor-metabomxtr
.. |downloads_bioconductor-metabomxtr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabomxtr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metabomxtr| image:: https://quay.io/repository/biocontainers/bioconductor-metabomxtr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabomxtr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html

