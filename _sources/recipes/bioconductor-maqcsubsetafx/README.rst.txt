.. title:: Package Recipe 'bioconductor-maqcsubsetafx'
.. highlight: bash


bioconductor-maqcsubsetafx
==========================

.. conda:recipe:: bioconductor-maqcsubsetafx
   :replaces_section_title:

   MAQC data subset for the Affymetrix platform

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MAQCsubsetAFX.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-maqcsubsetafx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubsetafx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubsetafx/meta.yaml>`_

   


.. conda:package:: bioconductor-maqcsubsetafx

   |downloads_bioconductor-maqcsubsetafx| |docker_bioconductor-maqcsubsetafx|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-maqcsubsetafx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maqcsubsetafx

   and update with::

      conda update bioconductor-maqcsubsetafx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-maqcsubsetafx


.. |required_by_bioconductor-maqcsubsetafx| conda:required_by:: bioconductor-maqcsubsetafx
.. |downloads_bioconductor-maqcsubsetafx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcsubsetafx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-maqcsubsetafx| image:: https://quay.io/repository/biocontainers/bioconductor-maqcsubsetafx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcsubsetafx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcsubsetafx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcsubsetafx/README.html

