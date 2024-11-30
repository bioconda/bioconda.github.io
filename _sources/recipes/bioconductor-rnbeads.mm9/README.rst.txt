:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnbeads.mm9'
.. highlight: bash

bioconductor-rnbeads.mm9
========================

.. conda:recipe:: bioconductor-rnbeads.mm9
   :replaces_section_title:
   :noindex:

   RnBeads.mm9

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/RnBeads.mm9.html
   :license: GPL-3
   :recipe: /`bioconductor-rnbeads.mm9 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads.mm9>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads.mm9/meta.yaml>`_

   Automatically generated RnBeads annotation package for the assembly mm9.


.. conda:package:: bioconductor-rnbeads.mm9

   |downloads_bioconductor-rnbeads.mm9| |docker_bioconductor-rnbeads.mm9|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
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

      mamba install bioconductor-rnbeads.mm9

   and update with::

      mamba update bioconductor-rnbeads.mm9

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnbeads.mm9

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnbeads.mm9:<tag>

   (see `bioconductor-rnbeads.mm9/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnbeads.mm9| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnbeads.mm9.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnbeads.mm9
   :alt:   (downloads)
.. |docker_bioconductor-rnbeads.mm9| image:: https://quay.io/repository/biocontainers/bioconductor-rnbeads.mm9/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnbeads.mm9
.. _`bioconductor-rnbeads.mm9/tags`: https://quay.io/repository/biocontainers/bioconductor-rnbeads.mm9?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnbeads.mm9";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnbeads.mm9/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnbeads.mm9/README.html