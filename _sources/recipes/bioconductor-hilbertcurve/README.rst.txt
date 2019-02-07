.. title:: Package Recipe 'bioconductor-hilbertcurve'
.. highlight: bash


bioconductor-hilbertcurve
=========================

.. conda:recipe:: bioconductor-hilbertcurve
   :replaces_section_title:

   Hilbert curve is a type of space\-filling curves that fold one dimensional axis into a two dimensional space\, but with still preserves the locality. This package aims to provide an easy and flexible way to visualize data through Hilbert curve.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HilbertCurve.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hilbertcurve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve/meta.yaml>`_

   


.. conda:package:: bioconductor-hilbertcurve

   |downloads_bioconductor-hilbertcurve| |docker_bioconductor-hilbertcurve|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hilbertvis` >=1.40.0,<1.41.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize` >=0.3.3 :conda:package:`r-png`  

   :required~by: |required_by_bioconductor-hilbertcurve|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hilbertcurve

   and update with::

      conda update bioconductor-hilbertcurve

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hilbertcurve


.. |required_by_bioconductor-hilbertcurve| conda:required_by:: bioconductor-hilbertcurve
.. |downloads_bioconductor-hilbertcurve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertcurve.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hilbertcurve| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html

