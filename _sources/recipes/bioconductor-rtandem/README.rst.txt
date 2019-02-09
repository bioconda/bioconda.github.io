.. title:: Package Recipe 'bioconductor-rtandem'
.. highlight: bash


bioconductor-rtandem
====================

.. conda:recipe:: bioconductor-rtandem
   :replaces_section_title:

   This package interfaces the tandem protein identification algorithm in R. Identification can be launched in the X\!Tandem style\, by using as sole parameter the path to a parameter file. But rTANDEM aslo provides extended syntax and functions to streamline launching analyses\, as well as function to convert results\, parameters and taxonomy to\/from R. A related package\, shinyTANDEM\, provides visualization interface for result objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rTANDEM.html
   :license: Artistic-1.0 | file LICENSE
   :recipe: /`bioconductor-rtandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtandem/meta.yaml>`_

   


.. conda:package:: bioconductor-rtandem

   |downloads_bioconductor-rtandem| |docker_bioconductor-rtandem|

   :versions: 1.22.1, 1.22.0

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.8.8 :conda:package:`r-rcpp`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-rtandem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtandem

   and update with::

      conda update bioconductor-rtandem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rtandem


.. |required_by_bioconductor-rtandem| conda:required_by:: bioconductor-rtandem
.. |downloads_bioconductor-rtandem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtandem.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rtandem| image:: https://quay.io/repository/biocontainers/bioconductor-rtandem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtandem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtandem/README.html

