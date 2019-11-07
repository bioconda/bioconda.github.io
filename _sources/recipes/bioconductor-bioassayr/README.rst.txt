:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioassayr'
.. highlight: bash

bioconductor-bioassayr
======================

.. conda:recipe:: bioconductor-bioassayr
   :replaces_section_title:

   Cross\-target analysis of small molecule bioactivity

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/bioassayR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioassayr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr/meta.yaml>`_

   bioassayR is a computational tool that enables simultaneous analysis of thousands of bioassay experiments performed over a diverse set of compounds and biological targets. Unique features include support for large\-scale cross\-target analyses of both public and custom bioassays\, generation of high throughput screening fingerprints \(HTSFPs\)\, and an optional preloaded database that provides access to a substantial portion of publicly available bioactivity data.


.. conda:package:: bioconductor-bioassayr

   |downloads_bioconductor-bioassayr| |docker_bioconductor-bioassayr|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.1-0, 1.20.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-chemminer: >=3.38.0,<3.39.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: >=0.3.1
   :depends r-matrix: 
   :depends r-rjson: 
   :depends r-rsqlite: >=1.0.0
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioassayr

   and update with::

      conda update bioconductor-bioassayr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioassayr:<tag>

   (see `bioconductor-bioassayr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioassayr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioassayr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioassayr
   :alt:   (downloads)
.. |docker_bioconductor-bioassayr| image:: https://quay.io/repository/biocontainers/bioconductor-bioassayr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioassayr
.. _`bioconductor-bioassayr/tags`: https://quay.io/repository/biocontainers/bioconductor-bioassayr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html