:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harshlight'
.. highlight: bash

bioconductor-harshlight
=======================

.. conda:recipe:: bioconductor-harshlight
   :replaces_section_title:
   :noindex:

   A \"corrective make\-up\" program for microarray chips

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Harshlight.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-harshlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harshlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harshlight/meta.yaml>`_
   :links: biotools: :biotools:`harshlight`, doi: :doi:`10.1186/1471-2105-6-294`

   The package is used to detect extended\, diffuse and compact blemishes on microarray chips. Harshlight automatically marks the areas in a collection of chips \(affybatch objects\) and a corrected AffyBatch object is returned\, in which the defected areas are substituted with NAs or the median of the values of the same probe in the other chips in the collection. The new version handle the substitute value as whole matrix to solve the memory problem.


.. conda:package:: bioconductor-harshlight

   |downloads_bioconductor-harshlight| |docker_bioconductor-harshlight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.66.0-2</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.66.0-2``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-altcdfenvs: ``>=2.68.0,<2.69.0``
   :depends bioconductor-altcdfenvs: ``>=2.68.0,<2.69.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-harshlight

   and update with::

      mamba update bioconductor-harshlight

  To create a new environment, run::

      mamba create --name myenvname bioconductor-harshlight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harshlight:<tag>

   (see `bioconductor-harshlight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harshlight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harshlight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harshlight
   :alt:   (downloads)
.. |docker_bioconductor-harshlight| image:: https://quay.io/repository/biocontainers/bioconductor-harshlight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harshlight
.. _`bioconductor-harshlight/tags`: https://quay.io/repository/biocontainers/bioconductor-harshlight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harshlight";
        var versions = ["1.78.0","1.74.0","1.72.0","1.70.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harshlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harshlight/README.html