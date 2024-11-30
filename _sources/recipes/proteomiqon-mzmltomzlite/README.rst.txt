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
      
      

      ``0.0.8-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install proteomiqon-mzmltomzlite

   and update with::

      mamba update proteomiqon-mzmltomzlite

  To create a new environment, run::

      mamba create --name myenvname proteomiqon-mzmltomzlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-mzmltomzlite:<tag>

   (see `proteomiqon-mzmltomzlite/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-mzmltomzlite| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-mzmltomzlite.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-mzmltomzlite
   :alt:   (downloads)
.. |docker_proteomiqon-mzmltomzlite| image:: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite
.. _`proteomiqon-mzmltomzlite/tags`: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-mzmltomzlite";
        var versions = ["0.0.8","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html