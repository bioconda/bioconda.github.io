.. title:: Package Recipe 'bioconductor-flowviz'
.. highlight: bash


bioconductor-flowviz
====================

.. conda:recipe:: bioconductor-flowviz
   :replaces_section_title:

   Provides visualization tools for flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz/meta.yaml>`_
   :links: biotools: :biotools:`flowviz`, doi: :doi:`10.1093/bioinformatics/btn021`

   


.. conda:package:: bioconductor-flowviz

   |downloads_bioconductor-flowviz| |docker_bioconductor-flowviz|

   :versions: 1.46.0, 1.44.0, 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hexbin`  :conda:package:`r-idpmisc`  :conda:package:`r-kernsmooth`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-mass`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-flowviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowviz

   and update with::

      conda update bioconductor-flowviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowviz


.. |required_by_bioconductor-flowviz| conda:required_by:: bioconductor-flowviz
.. |downloads_bioconductor-flowviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowviz| image:: https://quay.io/repository/biocontainers/bioconductor-flowviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowviz/README.html

