:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyrnadegradation'
.. highlight: bash

bioconductor-affyrnadegradation
===============================

.. conda:recipe:: bioconductor-affyrnadegradation
   :replaces_section_title:
   :noindex:

   Analyze and correct probe positional bias in microarray data due to RNA degradation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AffyRNADegradation.html
   :license: GPL-2
   :recipe: /`bioconductor-affyrnadegradation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyrnadegradation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyrnadegradation/meta.yaml>`_
   :links: biotools: :biotools:`affyrnadegradation`

   The package helps with the assessment and correction of RNA degradation effects in Affymetrix 3\' expression arrays. The parameter d gives a robust and accurate measure of RNA integrity. The correction removes the probe positional bias\, and thus improves comparability of samples that are affected by RNA degradation.


.. conda:package:: bioconductor-affyrnadegradation

   |downloads_bioconductor-affyrnadegradation| |docker_bioconductor-affyrnadegradation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-affyrnadegradation

   and update with::

      mamba update bioconductor-affyrnadegradation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affyrnadegradation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyrnadegradation:<tag>

   (see `bioconductor-affyrnadegradation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyrnadegradation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyrnadegradation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyrnadegradation
   :alt:   (downloads)
.. |docker_bioconductor-affyrnadegradation| image:: https://quay.io/repository/biocontainers/bioconductor-affyrnadegradation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyrnadegradation
.. _`bioconductor-affyrnadegradation/tags`: https://quay.io/repository/biocontainers/bioconductor-affyrnadegradation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyrnadegradation";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyrnadegradation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyrnadegradation/README.html