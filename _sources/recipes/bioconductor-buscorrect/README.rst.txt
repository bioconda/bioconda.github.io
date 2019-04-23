:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-buscorrect'
.. highlight: bash

bioconductor-buscorrect
=======================

.. conda:recipe:: bioconductor-buscorrect
   :replaces_section_title:

   High\-throughput experimental data are accumulating exponentially in public databases. However\, mining valid scientific discoveries from these abundant resources is hampered by technical artifacts and inherent biological heterogeneity. The former are usually termed \"batch effects\,\" and the latter is often modelled by \"subtypes.\" The R package BUScorrect fits a Bayesian hierarchical model\, the Batch\-effects\-correction\-with\-Unknown\-Subtypes model \(BUS\)\, to correct batch effects in the presence of unknown subtypes. BUS is capable of \(a\) correcting batch effects explicitly\, \(b\) grouping samples that share similar characteristics into subtypes\, \(c\) identifying features that distinguish subtypes\, and \(d\) enjoying a linear\-order computation complexity.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BUScorrect.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-buscorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-buscorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-buscorrect/meta.yaml>`_

   


.. conda:package:: bioconductor-buscorrect

   |downloads_bioconductor-buscorrect| |docker_bioconductor-buscorrect|

   :versions: 1.0.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-buscorrect

   and update with::

      conda update bioconductor-buscorrect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-buscorrect:<tag>

   (see `bioconductor-buscorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-buscorrect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-buscorrect.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-buscorrect| image:: https://quay.io/repository/biocontainers/bioconductor-buscorrect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-buscorrect
.. _`bioconductor-buscorrect/tags`: https://quay.io/repository/biocontainers/bioconductor-buscorrect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html