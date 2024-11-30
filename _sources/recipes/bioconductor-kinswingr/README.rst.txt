:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kinswingr'
.. highlight: bash

bioconductor-kinswingr
======================

.. conda:recipe:: bioconductor-kinswingr
   :replaces_section_title:
   :noindex:

   KinSwingR\: network\-based kinase activity prediction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/KinSwingR.html
   :license: GPL-3
   :recipe: /`bioconductor-kinswingr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kinswingr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kinswingr/meta.yaml>`_

   KinSwingR integrates phosphosite data derived from mass\-spectrometry data and kinase\-substrate predictions to predict kinase activity. Several functions allow the user to build PWM models of kinase\-subtrates\, statistically infer PWM\:substrate matches\, and integrate these data to infer kinase activity.


.. conda:package:: bioconductor-kinswingr

   |downloads_bioconductor-kinswingr| |docker_bioconductor-kinswingr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-sqldf: 
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

      mamba install bioconductor-kinswingr

   and update with::

      mamba update bioconductor-kinswingr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kinswingr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kinswingr:<tag>

   (see `bioconductor-kinswingr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kinswingr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kinswingr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kinswingr
   :alt:   (downloads)
.. |docker_bioconductor-kinswingr| image:: https://quay.io/repository/biocontainers/bioconductor-kinswingr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kinswingr
.. _`bioconductor-kinswingr/tags`: https://quay.io/repository/biocontainers/bioconductor-kinswingr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kinswingr";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kinswingr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kinswingr/README.html