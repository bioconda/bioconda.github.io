:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nugomm1a520177probe'
.. highlight: bash

bioconductor-nugomm1a520177probe
================================

.. conda:recipe:: bioconductor-nugomm1a520177probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type nugomm1a520177

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/nugomm1a520177probe.html
   :license: LGPL
   :recipe: /`bioconductor-nugomm1a520177probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugomm1a520177probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugomm1a520177probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.20. The probe sequence data was obtained from http\:\/\/www.affymetrix.com.


.. conda:package:: bioconductor-nugomm1a520177probe

   |downloads_bioconductor-nugomm1a520177probe| |docker_bioconductor-nugomm1a520177probe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  <code>3.4.0-3</code>,  </span></summary>
      

      ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-nugomm1a520177probe

   and update with::

      mamba update bioconductor-nugomm1a520177probe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nugomm1a520177probe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nugomm1a520177probe:<tag>

   (see `bioconductor-nugomm1a520177probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nugomm1a520177probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nugomm1a520177probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nugomm1a520177probe
   :alt:   (downloads)
.. |docker_bioconductor-nugomm1a520177probe| image:: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177probe
.. _`bioconductor-nugomm1a520177probe/tags`: https://quay.io/repository/biocontainers/bioconductor-nugomm1a520177probe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nugomm1a520177probe";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nugomm1a520177probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nugomm1a520177probe/README.html