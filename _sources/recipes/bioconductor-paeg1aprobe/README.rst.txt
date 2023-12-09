:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paeg1aprobe'
.. highlight: bash

bioconductor-paeg1aprobe
========================

.. conda:recipe:: bioconductor-paeg1aprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type paeg1a

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/paeg1aprobe.html
   :license: LGPL
   :recipe: /`bioconductor-paeg1aprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1aprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1aprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was P\\\_aeg1a\\\_probe\\\_tab.


.. conda:package:: bioconductor-paeg1aprobe

   |downloads_bioconductor-paeg1aprobe| |docker_bioconductor-paeg1aprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-13</code>,  <code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  </span></summary>
      

      ``2.18.0-13``,  ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      
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

      mamba install bioconductor-paeg1aprobe

   and update with::

      mamba update bioconductor-paeg1aprobe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-paeg1aprobe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paeg1aprobe:<tag>

   (see `bioconductor-paeg1aprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paeg1aprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paeg1aprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paeg1aprobe
   :alt:   (downloads)
.. |docker_bioconductor-paeg1aprobe| image:: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe
.. _`bioconductor-paeg1aprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-paeg1aprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paeg1aprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paeg1aprobe/README.html