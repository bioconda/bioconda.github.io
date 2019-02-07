.. title:: Package Recipe 'bioconductor-flowfit'
.. highlight: bash


bioconductor-flowfit
====================

.. conda:recipe:: bioconductor-flowfit
   :replaces_section_title:

   This package estimate the proliferation of a cell population in cell\-tracking dye studies. The package uses an R implementation of the Levenberg\-Marquardt algorithm \(minpack.lm\) to fit a set of peaks \(corresponding to different generations of cells\) over the proliferation\-tracking dye distribution in a FACS experiment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowFit.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowfit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowfit/meta.yaml>`_

   


.. conda:package:: bioconductor-flowfit

   |downloads_bioconductor-flowfit| |docker_bioconductor-flowfit|

   :versions: 1.20.1

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-kza`  :conda:package:`r-minpack.lm`  

   :required~by: |required_by_bioconductor-flowfit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowfit

   and update with::

      conda update bioconductor-flowfit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowfit


.. |required_by_bioconductor-flowfit| conda:required_by:: bioconductor-flowfit
.. |downloads_bioconductor-flowfit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowfit.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowfit| image:: https://quay.io/repository/biocontainers/bioconductor-flowfit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowfit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowfit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowfit/README.html

