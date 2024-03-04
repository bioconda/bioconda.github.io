:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pscbs'
.. highlight: bash

r-pscbs
=======

.. conda:recipe:: r-pscbs
   :replaces_section_title:
   :noindex:

   Segmentation of allele\-specific DNA copy number data and detection of regions with abnormal copy number within each parental chromosome.  Both tumor\-normal paired and tumor\-only analyses are supported.

   :homepage: https://github.com/HenrikBengtsson/PSCBS
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-pscbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pscbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pscbs/meta.yaml>`_

   


.. conda:package:: r-pscbs

   |downloads_r-pscbs| |docker_r-pscbs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.67.0-0</code>,  <code>0.66.0-2</code>,  <code>0.66.0-1</code>,  <code>0.66.0-0</code>,  <code>0.65.0-5</code>,  <code>0.65.0-4</code>,  <code>0.65.0-3</code>,  <code>0.65.0-2</code>,  <code>0.65.0-1</code>,  </span></summary>
      

      ``0.67.0-0``,  ``0.66.0-2``,  ``0.66.0-1``,  ``0.66.0-0``,  ``0.65.0-5``,  ``0.65.0-4``,  ``0.65.0-3``,  ``0.65.0-2``,  ``0.65.0-1``,  ``0.65.0-0``,  ``0.64.0-2``,  ``0.64.0-1``,  ``0.64.0-0``,  ``0.63.0-0``,  ``0.61.0-0``,  ``0.60.3-0``,  ``0.60.0-2``,  ``0.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-aroma.light: ``>=2.4.0``
   :depends bioconductor-dnacopy: ``>=1.42.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-future: ``>=1.28.0``
   :depends r-listenv: ``>=0.8.0``
   :depends r-matrixstats: ``>=0.62.0``
   :depends r-r.cache: ``>=0.16.0``
   :depends r-r.methodss3: ``>=1.8.2``
   :depends r-r.oo: ``>=1.25.0``
   :depends r-r.utils: ``>=2.12.0``
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

      mamba install r-pscbs

   and update with::

      mamba update r-pscbs

  To create a new environment, run::

      mamba create --name myenvname r-pscbs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pscbs:<tag>

   (see `r-pscbs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pscbs| image:: https://img.shields.io/conda/dn/bioconda/r-pscbs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pscbs
   :alt:   (downloads)
.. |docker_r-pscbs| image:: https://quay.io/repository/biocontainers/r-pscbs/status
   :target: https://quay.io/repository/biocontainers/r-pscbs
.. _`r-pscbs/tags`: https://quay.io/repository/biocontainers/r-pscbs?tab=tags


.. raw:: html

    <script>
        var package = "r-pscbs";
        var versions = ["0.67.0","0.66.0","0.66.0","0.66.0","0.65.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pscbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pscbs/README.html