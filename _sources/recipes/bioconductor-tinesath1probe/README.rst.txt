:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tinesath1probe'
.. highlight: bash

bioconductor-tinesath1probe
===========================

.. conda:recipe:: bioconductor-tinesath1probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type tinesath1

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/tinesath1probe.html
   :license: LGPL
   :recipe: /`bioconductor-tinesath1probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tinesath1probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tinesath1probe/meta.yaml>`_

   This package was automatically created by package matchprobes version 1.4.0. The probe sequence data was obtained from http\:\/\/www.affymetrix.com.


.. conda:package:: bioconductor-tinesath1probe

   |downloads_bioconductor-tinesath1probe| |docker_bioconductor-tinesath1probe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-tinesath1probe

   and update with::

      mamba update bioconductor-tinesath1probe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tinesath1probe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tinesath1probe:<tag>

   (see `bioconductor-tinesath1probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tinesath1probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tinesath1probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tinesath1probe
   :alt:   (downloads)
.. |docker_bioconductor-tinesath1probe| image:: https://quay.io/repository/biocontainers/bioconductor-tinesath1probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tinesath1probe
.. _`bioconductor-tinesath1probe/tags`: https://quay.io/repository/biocontainers/bioconductor-tinesath1probe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tinesath1probe";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tinesath1probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tinesath1probe/README.html