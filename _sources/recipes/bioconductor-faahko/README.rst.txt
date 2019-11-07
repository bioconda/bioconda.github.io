:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-faahko'
.. highlight: bash

bioconductor-faahko
===================

.. conda:recipe:: bioconductor-faahko
   :replaces_section_title:

   Saghatelian et al. \(2004\) FAAH knockout LC\/MS data

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/faahKO.html
   :license: LGPL
   :recipe: /`bioconductor-faahko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko/meta.yaml>`_

   Positive ionization mode data in NetCDF file format. Centroided subset from 200\-600 m\/z and 2500\-4500 seconds. Data originally reported in \"Assignment of Endogenous Substrates to Enzymes by Global Metabolite Profiling\" Biochemistry\; 2004\; 43\(45\). Also includes detected peaks in an xcmsSet.


.. conda:package:: bioconductor-faahko

   |downloads_bioconductor-faahko| |docker_bioconductor-faahko|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.18.0-0
   
   :depends bioconductor-xcms: >=3.8.0,<3.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-faahko

   and update with::

      conda update bioconductor-faahko

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-faahko:<tag>

   (see `bioconductor-faahko/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-faahko| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-faahko.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-faahko
   :alt:   (downloads)
.. |docker_bioconductor-faahko| image:: https://quay.io/repository/biocontainers/bioconductor-faahko/status
   :target: https://quay.io/repository/biocontainers/bioconductor-faahko
.. _`bioconductor-faahko/tags`: https://quay.io/repository/biocontainers/bioconductor-faahko?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-faahko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-faahko/README.html