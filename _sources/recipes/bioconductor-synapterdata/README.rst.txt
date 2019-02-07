.. title:: Package Recipe 'bioconductor-synapterdata'
.. highlight: bash


bioconductor-synapterdata
=========================

.. conda:recipe:: bioconductor-synapterdata
   :replaces_section_title:

   Data independant acquisition of UPS1 protein mix in an E. coli background obtained on a Waters Synapt G2 instrument.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/synapterdata.html
   :license: GPL-2
   :recipe: /`bioconductor-synapterdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapterdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapterdata/meta.yaml>`_

   


.. conda:package:: bioconductor-synapterdata

   |downloads_bioconductor-synapterdata| |docker_bioconductor-synapterdata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-synapter` >=2.6.0,<2.7.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-synapterdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synapterdata

   and update with::

      conda update bioconductor-synapterdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-synapterdata


.. |required_by_bioconductor-synapterdata| conda:required_by:: bioconductor-synapterdata
.. |downloads_bioconductor-synapterdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapterdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-synapterdata| image:: https://quay.io/repository/biocontainers/bioconductor-synapterdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapterdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapterdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapterdata/README.html

