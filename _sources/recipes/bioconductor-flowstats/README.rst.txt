.. title:: Package Recipe 'bioconductor-flowstats'
.. highlight: bash


bioconductor-flowstats
======================

.. conda:recipe:: bioconductor-flowstats
   :replaces_section_title:

   Methods and functionality to analyse flow data that is beyond the basic infrastructure provided by the flowCore package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowStats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowstats/meta.yaml>`_

   


.. conda:package:: bioconductor-flowstats

   |downloads_bioconductor-flowstats| |docker_bioconductor-flowstats|

   :versions: 3.40.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`bioconductor-flowworkspace` >=3.30.0,<3.31.0 :conda:package:`bioconductor-ncdfflow` >=2.28.0,<2.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-fda` >=2.2.6 :conda:package:`r-kernsmooth`  :conda:package:`r-ks`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-flowstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowstats

   and update with::

      conda update bioconductor-flowstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowstats


.. |required_by_bioconductor-flowstats| conda:required_by:: bioconductor-flowstats
.. |downloads_bioconductor-flowstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowstats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowstats| image:: https://quay.io/repository/biocontainers/bioconductor-flowstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowstats/README.html

