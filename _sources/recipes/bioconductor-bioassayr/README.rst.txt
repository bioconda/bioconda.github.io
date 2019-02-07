.. title:: Package Recipe 'bioconductor-bioassayr'
.. highlight: bash


bioconductor-bioassayr
======================

.. conda:recipe:: bioconductor-bioassayr
   :replaces_section_title:

   bioassayR is a computational tool that enables simultaneous analysis of thousands of bioassay experiments performed over a diverse set of compounds and biological targets. Unique features include support for large\-scale cross\-target analyses of both public and custom bioassays\, generation of high throughput screening fingerprints \(HTSFPs\)\, and an optional preloaded database that provides access to a substantial portion of publicly available bioactivity data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bioassayR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioassayr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr/meta.yaml>`_

   


.. conda:package:: bioconductor-bioassayr

   |downloads_bioconductor-bioassayr| |docker_bioconductor-bioassayr|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-chemminer` >=3.34.0,<3.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.3.1 :conda:package:`r-matrix`  :conda:package:`r-rjson`  :conda:package:`r-rsqlite` >=1.0.0 :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-bioassayr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioassayr

   and update with::

      conda update bioconductor-bioassayr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bioassayr


.. |required_by_bioconductor-bioassayr| conda:required_by:: bioconductor-bioassayr
.. |downloads_bioconductor-bioassayr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioassayr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bioassayr| image:: https://quay.io/repository/biocontainers/bioconductor-bioassayr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioassayr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html

