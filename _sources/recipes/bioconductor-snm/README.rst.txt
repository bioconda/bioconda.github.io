:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snm'
.. highlight: bash

bioconductor-snm
================

.. conda:recipe:: bioconductor-snm
   :replaces_section_title:
   :noindex:

   Supervised Normalization of Microarrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/snm.html
   :license: LGPL
   :recipe: /`bioconductor-snm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snm/meta.yaml>`_
   :links: biotools: :biotools:`snm`

   SNM is a modeling strategy especially designed for normalizing high\-throughput genomic data. The underlying premise of our approach is that your data is a function of what we refer to as study\-specific variables. These variables are either biological variables that represent the target of the statistical analysis\, or adjustment variables that represent factors arising from the experimental or biological setting the data is drawn from. The SNM approach aims to simultaneously model all study\-specific variables in order to more accurately characterize the biological or clinical variables of interest.


.. conda:package:: bioconductor-snm

   |downloads_bioconductor-snm| |docker_bioconductor-snm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-lme4: ``>=1.0``
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

      mamba install bioconductor-snm

   and update with::

      mamba update bioconductor-snm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snm:<tag>

   (see `bioconductor-snm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snm
   :alt:   (downloads)
.. |docker_bioconductor-snm| image:: https://quay.io/repository/biocontainers/bioconductor-snm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snm
.. _`bioconductor-snm/tags`: https://quay.io/repository/biocontainers/bioconductor-snm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snm";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snm/README.html