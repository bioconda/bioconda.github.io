:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyebiasexamples'
.. highlight: bash

bioconductor-dyebiasexamples
============================

.. conda:recipe:: bioconductor-dyebiasexamples
   :replaces_section_title:
   :noindex:

   Example data for the dyebias package\, which implements the GASSCO method.

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/dyebiasexamples.html
   :license: GPL-3
   :recipe: /`bioconductor-dyebiasexamples <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples/meta.yaml>`_

   Data for the dyebias package\, consisting of 4 self\-self hybrizations of self\-spotted yeast slides\, as well as data from Array Express accession E\-MTAB\-32


.. conda:package:: bioconductor-dyebiasexamples

   |downloads_bioconductor-dyebiasexamples| |docker_bioconductor-dyebiasexamples|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-dyebiasexamples

   and update with::

      mamba update bioconductor-dyebiasexamples

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dyebiasexamples

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyebiasexamples:<tag>

   (see `bioconductor-dyebiasexamples/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyebiasexamples| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyebiasexamples.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyebiasexamples
   :alt:   (downloads)
.. |docker_bioconductor-dyebiasexamples| image:: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples
.. _`bioconductor-dyebiasexamples/tags`: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dyebiasexamples";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html