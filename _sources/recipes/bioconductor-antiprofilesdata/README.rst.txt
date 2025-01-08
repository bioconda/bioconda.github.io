:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-antiprofilesdata'
.. highlight: bash

bioconductor-antiprofilesdata
=============================

.. conda:recipe:: bioconductor-antiprofilesdata
   :replaces_section_title:
   :noindex:

   Normal colon and cancer preprocessed affy data for antiProfile building.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/antiProfilesData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-antiprofilesdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata/meta.yaml>`_

   Colon normal tissue and cancer samples used in Corrada Bravo\, et al. gene expression anti\-profiles paper\: BMC Bioinformatics 2012\, 13\:272 doi\:10.1186\/1471\-2105\-13\-272. Measurements are z\-scores obtained from the GeneExpression Barcode in the \'frma\' package


.. conda:package:: bioconductor-antiprofilesdata

   |downloads_bioconductor-antiprofilesdata| |docker_bioconductor-antiprofilesdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-antiprofilesdata

   and update with::

      mamba update bioconductor-antiprofilesdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-antiprofilesdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-antiprofilesdata:<tag>

   (see `bioconductor-antiprofilesdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-antiprofilesdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-antiprofilesdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-antiprofilesdata
   :alt:   (downloads)
.. |docker_bioconductor-antiprofilesdata| image:: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata
.. _`bioconductor-antiprofilesdata/tags`: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-antiprofilesdata";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html