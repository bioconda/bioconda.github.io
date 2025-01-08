:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xhybcasneuf'
.. highlight: bash

bioconductor-xhybcasneuf
========================

.. conda:recipe:: bioconductor-xhybcasneuf
   :replaces_section_title:
   :noindex:

   EBI\/PSB cross\-hybridisation study package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/XhybCasneuf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xhybcasneuf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf/meta.yaml>`_

   Cross\-hybridisation study on the ATH1 Affymetrix GeneChip


.. conda:package:: bioconductor-xhybcasneuf

   |downloads_bioconductor-xhybcasneuf| |docker_bioconductor-xhybcasneuf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-ath1121501cdf: ``>=2.18.0,<2.19.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-tinesath1cdf: ``>=1.44.0,<1.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-xhybcasneuf

   and update with::

      mamba update bioconductor-xhybcasneuf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xhybcasneuf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xhybcasneuf:<tag>

   (see `bioconductor-xhybcasneuf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xhybcasneuf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xhybcasneuf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xhybcasneuf
   :alt:   (downloads)
.. |docker_bioconductor-xhybcasneuf| image:: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf
.. _`bioconductor-xhybcasneuf/tags`: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xhybcasneuf";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html