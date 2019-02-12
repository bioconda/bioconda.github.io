.. title:: Package Recipe 'bioconductor-bacon'
.. highlight: bash


bioconductor-bacon
==================

.. conda:recipe:: bioconductor-bacon
   :replaces_section_title:

   Bacon can be used to remove inflation and bias often observed in epigenome\- and transcriptome\-wide association studies. To this end bacon constructs an empirical null distribution using a Gibbs Sampling algorithm by fitting a three\-component normal mixture on z\-scores.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bacon.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bacon/meta.yaml>`_
   :links: biotools: :biotools:`bacon`

   


.. conda:package:: bioconductor-bacon

   |downloads_bioconductor-bacon| |docker_bioconductor-bacon|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ellipse`  :conda:package:`r-ggplot2`  

   :required~by: |required_by_bioconductor-bacon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bacon

   and update with::

      conda update bioconductor-bacon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bacon


.. |required_by_bioconductor-bacon| conda:required_by:: bioconductor-bacon
.. |downloads_bioconductor-bacon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bacon.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bacon| image:: https://quay.io/repository/biocontainers/bioconductor-bacon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bacon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bacon/README.html

