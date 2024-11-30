:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lungcanceracvssccgeo'
.. highlight: bash

bioconductor-lungcanceracvssccgeo
=================================

.. conda:recipe:: bioconductor-lungcanceracvssccgeo
   :replaces_section_title:
   :noindex:

   A lung cancer dataset that can be used with maPredictDSC package for developing outcome prediction models from Affymetrix CEL files.

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/LungCancerACvsSCCGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-lungcanceracvssccgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcanceracvssccgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcanceracvssccgeo/meta.yaml>`_

   This package contains 30 Affymetrix CEL files for 7 Adenocarcinoma \(AC\) and 8 Squamous cell carcinoma \(SCC\) lung cancer samples taken at random from 3 GEO datasets \(GSE10245\, GSE18842 and GSE2109\) and other 15 samples from a dataset produced by the organizers of the IMPROVER Diagnostic Signature Challenge available from GEO \(GSE43580\).


.. conda:package:: bioconductor-lungcanceracvssccgeo

   |downloads_bioconductor-lungcanceracvssccgeo| |docker_bioconductor-lungcanceracvssccgeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-3</code>,  <code>1.26.0-2</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-lungcanceracvssccgeo

   and update with::

      mamba update bioconductor-lungcanceracvssccgeo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lungcanceracvssccgeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lungcanceracvssccgeo:<tag>

   (see `bioconductor-lungcanceracvssccgeo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lungcanceracvssccgeo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lungcanceracvssccgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lungcanceracvssccgeo
   :alt:   (downloads)
.. |docker_bioconductor-lungcanceracvssccgeo| image:: https://quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo
.. _`bioconductor-lungcanceracvssccgeo/tags`: https://quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lungcanceracvssccgeo";
        var versions = ["1.38.0","1.36.0","1.34.0","1.33.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lungcanceracvssccgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lungcanceracvssccgeo/README.html