:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyilm'
.. highlight: bash

bioconductor-affyilm
====================

.. conda:recipe:: bioconductor-affyilm
   :replaces_section_title:
   :noindex:

   Linear Model of background subtraction and the Langmuir isotherm

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/affyILM.html
   :license: GPL-3
   :recipe: /`bioconductor-affyilm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyilm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyilm/meta.yaml>`_
   :links: biotools: :biotools:`affyilm`, doi: :doi:`10.1186/1748-7188-4-15`

   affyILM is a preprocessing tool which estimates gene expression levels for Affymetrix Gene Chips. Input from physical chemistry is employed to first background subtract intensities before calculating concentrations on behalf of the Langmuir model.


.. conda:package:: bioconductor-affyilm

   |downloads_bioconductor-affyilm| |docker_bioconductor-affyilm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.74.0,<1.75.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-gcrma: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-affyilm

   and update with::

      mamba update bioconductor-affyilm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affyilm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyilm:<tag>

   (see `bioconductor-affyilm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyilm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyilm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyilm
   :alt:   (downloads)
.. |docker_bioconductor-affyilm| image:: https://quay.io/repository/biocontainers/bioconductor-affyilm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyilm
.. _`bioconductor-affyilm/tags`: https://quay.io/repository/biocontainers/bioconductor-affyilm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyilm";
        var versions = ["1.54.0","1.52.0","1.50.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyilm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyilm/README.html