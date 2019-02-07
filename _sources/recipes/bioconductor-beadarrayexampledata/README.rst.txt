.. title:: Package Recipe 'bioconductor-beadarrayexampledata'
.. highlight: bash


bioconductor-beadarrayexampledata
=================================

.. conda:recipe:: bioconductor-beadarrayexampledata
   :replaces_section_title:

   An small dataset that can be used to run examples from the beadarray vignette and examples

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/beadarrayExampleData.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarrayexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayexampledata/meta.yaml>`_

   


.. conda:package:: bioconductor-beadarrayexampledata

   |downloads_bioconductor-beadarrayexampledata| |docker_bioconductor-beadarrayexampledata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-beadarray` >=2.32.0,<2.33.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-beadarrayexampledata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarrayexampledata

   and update with::

      conda update bioconductor-beadarrayexampledata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-beadarrayexampledata


.. |required_by_bioconductor-beadarrayexampledata| conda:required_by:: bioconductor-beadarrayexampledata
.. |downloads_bioconductor-beadarrayexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarrayexampledata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beadarrayexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-beadarrayexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarrayexampledata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarrayexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarrayexampledata/README.html

