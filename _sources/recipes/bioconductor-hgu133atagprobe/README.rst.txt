:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133atagprobe'
.. highlight: bash

bioconductor-hgu133atagprobe
============================

.. conda:recipe:: bioconductor-hgu133atagprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type hgu133atag

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/hgu133atagprobe.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133atagprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133atagprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133atagprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HG\-U133A\\\_tag\\\_probe\\\_tab.


.. conda:package:: bioconductor-hgu133atagprobe

   |downloads_bioconductor-hgu133atagprobe| |docker_bioconductor-hgu133atagprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-hgu133atagprobe

   and update with::

      mamba update bioconductor-hgu133atagprobe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu133atagprobe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133atagprobe:<tag>

   (see `bioconductor-hgu133atagprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133atagprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133atagprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133atagprobe
   :alt:   (downloads)
.. |docker_bioconductor-hgu133atagprobe| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe
.. _`bioconductor-hgu133atagprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133atagprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133atagprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133atagprobe/README.html