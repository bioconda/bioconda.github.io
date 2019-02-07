.. title:: Package Recipe 'bioconductor-made4'
.. highlight: bash


bioconductor-made4
==================

.. conda:recipe:: bioconductor-made4
   :replaces_section_title:

   Multivariate data analysis and graphical display of microarray data. Functions include between group analysis and coinertia analysis. It contains functions that require ADE4.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/made4.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-made4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-made4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-made4/meta.yaml>`_
   :links: biotools: :biotools:`made4`

   


.. conda:package:: bioconductor-made4

   |downloads_bioconductor-made4| |docker_bioconductor-made4|

   :versions: 1.56.0, 1.54.0, 1.52.0, 1.50.0, 1.44.0

   :depends: :conda:package:`r-ade4`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-scatterplot3d`  

   :required~by: |required_by_bioconductor-made4|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-made4

   and update with::

      conda update bioconductor-made4

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-made4


.. |required_by_bioconductor-made4| conda:required_by:: bioconductor-made4
.. |downloads_bioconductor-made4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-made4.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-made4| image:: https://quay.io/repository/biocontainers/bioconductor-made4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-made4







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-made4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-made4/README.html

