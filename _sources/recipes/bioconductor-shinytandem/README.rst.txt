.. title:: Package Recipe 'bioconductor-shinytandem'
.. highlight: bash


bioconductor-shinytandem
========================

.. conda:recipe:: bioconductor-shinytandem
   :replaces_section_title:

   This package provides a GUI interface for rTANDEM. The GUI is primarily designed to visualize rTANDEM result object or result xml files. But it will also provides an interface for creating parameter objects\, launching searches or performing conversions between R objects and xml files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/shinyTANDEM.html
   :license: GPL-3
   :recipe: /`bioconductor-shinytandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinytandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinytandem/meta.yaml>`_

   


.. conda:package:: bioconductor-shinytandem

   |downloads_bioconductor-shinytandem| |docker_bioconductor-shinytandem|

   :versions: 1.20.1

   :depends: :conda:package:`bioconductor-rtandem` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mixtools`  :conda:package:`r-shiny`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-shinytandem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinytandem

   and update with::

      conda update bioconductor-shinytandem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-shinytandem


.. |required_by_bioconductor-shinytandem| conda:required_by:: bioconductor-shinytandem
.. |downloads_bioconductor-shinytandem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinytandem.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-shinytandem| image:: https://quay.io/repository/biocontainers/bioconductor-shinytandem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinytandem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinytandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinytandem/README.html

