.. title:: Package Recipe 'bioconductor-metcirc'
.. highlight: bash


bioconductor-metcirc
====================

.. conda:recipe:: bioconductor-metcirc
   :replaces_section_title:

   MetCirc comprises a workflow to interactively explore high\-resolution MS\/MS metabolomics data\: create an MSP object\, a format for MS\/MS library data\, bin m\/z values of precursors\, calculate similarity between precursors based on the normalised dot product and visualise similarities in a circular layout. Within the interactive framework the user can annotate MS\/MS features based on their similarity to \(known\) related MS\/MS features.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MetCirc.html
   :license: GPL-2
   :recipe: /`bioconductor-metcirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc/meta.yaml>`_
   :links: biotools: :biotools:`metcirc`, doi: :doi:`10.1093/bioinformatics/btx159`

   


.. conda:package:: bioconductor-metcirc

   |downloads_bioconductor-metcirc| |docker_bioconductor-metcirc|

   :versions: 1.12.1, 1.10.0, 1.6.0, 1.2.0

   :depends: :conda:package:`r-amap` >=0.8 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize` >=0.3.9 :conda:package:`r-scales` >=0.3.0 :conda:package:`r-shiny` >=1.0.0 

   :required~by: |required_by_bioconductor-metcirc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metcirc

   and update with::

      conda update bioconductor-metcirc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metcirc


.. |required_by_bioconductor-metcirc| conda:required_by:: bioconductor-metcirc
.. |downloads_bioconductor-metcirc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metcirc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metcirc| image:: https://quay.io/repository/biocontainers/bioconductor-metcirc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metcirc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metcirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metcirc/README.html

