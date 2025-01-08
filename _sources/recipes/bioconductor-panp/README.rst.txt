:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panp'
.. highlight: bash

bioconductor-panp
=================

.. conda:recipe:: bioconductor-panp
   :replaces_section_title:
   :noindex:

   Presence\-Absence Calls from Negative Strand Matching Probesets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/panp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-panp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panp/meta.yaml>`_
   :links: biotools: :biotools:`panp`, doi: :doi:`10.1109/BIBE.2007.4375552`

   A function to make gene presence\/absence calls based on distance from negative strand matching probesets \(NSMP\) which are derived from Affymetrix annotation. PANP is applied after gene expression values are created\, and therefore can be used after any preprocessing method such as MAS5 or GCRMA\, or PM\-only methods like RMA. NSMP sets have been established for the HGU133A and HGU133\-Plus\-2.0 chipsets to date.


.. conda:package:: bioconductor-panp

   |downloads_bioconductor-panp| |docker_bioconductor-panp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-panp

   and update with::

      mamba update bioconductor-panp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-panp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panp:<tag>

   (see `bioconductor-panp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panp
   :alt:   (downloads)
.. |docker_bioconductor-panp| image:: https://quay.io/repository/biocontainers/bioconductor-panp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panp
.. _`bioconductor-panp/tags`: https://quay.io/repository/biocontainers/bioconductor-panp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panp";
        var versions = ["1.76.0","1.72.0","1.70.0","1.68.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panp/README.html