.. title:: Package Recipe 'bioconductor-faahko'
.. highlight: bash


bioconductor-faahko
===================

.. conda:recipe:: bioconductor-faahko
   :replaces_section_title:

   Positive ionization mode data in NetCDF file format. Centroided subset from 200\-600 m\/z and 2500\-4500 seconds. Data originally reported in \"Assignment of Endogenous Substrates to Enzymes by Global Metabolite Profiling\" Biochemistry\; 2004\; 43\(45\). Also includes detected peaks in an xcmsSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/faahKO.html
   :license: LGPL
   :recipe: /`bioconductor-faahko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko/meta.yaml>`_

   


.. conda:package:: bioconductor-faahko

   |downloads_bioconductor-faahko| |docker_bioconductor-faahko|

   :versions: 1.22.0, 1.18.0

   :depends: :conda:package:`bioconductor-xcms` >=3.4.0,<3.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-faahko|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-faahko

   and update with::

      conda update bioconductor-faahko

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-faahko


.. |required_by_bioconductor-faahko| conda:required_by:: bioconductor-faahko
.. |downloads_bioconductor-faahko| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-faahko.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-faahko| image:: https://quay.io/repository/biocontainers/bioconductor-faahko/status
   :target: https://quay.io/repository/biocontainers/bioconductor-faahko







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-faahko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-faahko/README.html

