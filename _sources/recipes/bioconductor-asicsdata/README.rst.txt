:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asicsdata'
.. highlight: bash

bioconductor-asicsdata
======================

.. conda:recipe:: bioconductor-asicsdata
   :replaces_section_title:

   1D NMR example spectra and additional data for use with the ASICS package. Raw 1D Bruker spectral data files were found in the MetaboLights database \(https\:\/\/www.ebi.ac.uk\/metabolights\/\, study MTBLS1\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ASICSdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-asicsdata

   |downloads_bioconductor-asicsdata| |docker_bioconductor-asicsdata|

   :versions: 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-asicsdata

   and update with::

      conda update bioconductor-asicsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asicsdata:<tag>

   (see `bioconductor-asicsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asicsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asicsdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-asicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-asicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asicsdata
.. _`bioconductor-asicsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-asicsdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html