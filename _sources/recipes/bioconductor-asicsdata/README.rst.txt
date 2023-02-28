:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asicsdata'
.. highlight: bash

bioconductor-asicsdata
======================

.. conda:recipe:: bioconductor-asicsdata
   :replaces_section_title:
   :noindex:

   Example of 1D NMR spectra data for ASICS package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/ASICSdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata/meta.yaml>`_

   1D NMR example spectra and additional data for use with the ASICS package. Raw 1D Bruker spectral data files were found in the MetaboLights database \(https\:\/\/www.ebi.ac.uk\/metabolights\/\, study MTBLS1\).


.. conda:package:: bioconductor-asicsdata

   |downloads_bioconductor-asicsdata| |docker_bioconductor-asicsdata|

   :versions:
      
      

      ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-asicsdata
   :alt:   (downloads)
.. |docker_bioconductor-asicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-asicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asicsdata
.. _`bioconductor-asicsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-asicsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asicsdata";
        var versions = ["1.17.0","1.14.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html