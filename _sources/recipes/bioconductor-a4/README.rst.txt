.. title:: Package Recipe 'bioconductor-a4'
.. highlight: bash


bioconductor-a4
===============

.. conda:recipe:: bioconductor-a4
   :replaces_section_title:

   Automated Affymetrix Array Analysis Umbrella Package

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/a4.html
   :license: GPL-3
   :recipe: /`bioconductor-a4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4/meta.yaml>`_

   


.. conda:package:: bioconductor-a4

   |downloads_bioconductor-a4| |docker_bioconductor-a4|

   :versions: 1.30.0

   :depends: :conda:package:`bioconductor-a4base` >=1.30.0,<1.31.0 :conda:package:`bioconductor-a4classif` >=1.30.0,<1.31.0 :conda:package:`bioconductor-a4core` >=1.30.0,<1.31.0 :conda:package:`bioconductor-a4preproc` >=1.30.0,<1.31.0 :conda:package:`bioconductor-a4reporting` >=1.30.0,<1.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-a4|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-a4

   and update with::

      conda update bioconductor-a4

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-a4


.. |required_by_bioconductor-a4| conda:required_by:: bioconductor-a4
.. |downloads_bioconductor-a4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-a4| image:: https://quay.io/repository/biocontainers/bioconductor-a4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4/README.html

