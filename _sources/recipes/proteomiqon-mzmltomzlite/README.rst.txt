:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-mzmltomzlite'
.. highlight: bash

proteomiqon-mzmltomzlite
========================

.. conda:recipe:: proteomiqon-mzmltomzlite
   :replaces_section_title:
   :noindex:

   The tool MzMLToMzLite allows to convert mzML files to mzLite files.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/MzMLToMzLite.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-mzmltomzlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-mzmltomzlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-mzmltomzlite/meta.yaml>`_

   The success of modern proteomics was made possible by constant progression in the field of mass spectrometry. Over the course of the past years quite a few manufacturers of
   mass spectrometers have managed to establish themselfes in the field of biological research. Since aquisition and accession of mass spectra are performance critical processes\,
   various performance optimized\, but vendor specific and closed source formats have been developed to store raw MS data. This comes to the disadvantage for toolchain developers
   which want to provide tools for every scientist regardless of the format of their raw data.



.. conda:package:: proteomiqon-mzmltomzlite

   |downloads_proteomiqon-mzmltomzlite| |docker_proteomiqon-mzmltomzlite|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends dotnet-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-mzmltomzlite

   and update with::

      conda update proteomiqon-mzmltomzlite

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-mzmltomzlite:<tag>

   (see `proteomiqon-mzmltomzlite/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-mzmltomzlite| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-mzmltomzlite.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-mzmltomzlite
   :alt:   (downloads)
.. |docker_proteomiqon-mzmltomzlite| image:: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite
.. _`proteomiqon-mzmltomzlite/tags`: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html