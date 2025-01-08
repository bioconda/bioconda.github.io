:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tartare'
.. highlight: bash

bioconductor-tartare
====================

.. conda:recipe:: bioconductor-tartare
   :replaces_section_title:
   :noindex:

   Raw ground spectra recorded on Thermo Fisher Scientific mass spectrometers

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/tartare.html
   :license: GPL-3
   :recipe: /`bioconductor-tartare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tartare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tartare/meta.yaml>`_

   Provides raw files recorded on different Liquid Chromatography Mass Spectrometry \(LC\-MS\) instruments. All included MS instruments are manufactured by Thermo Fisher Scientific and belong to the Orbitrap Tribrid or Q Exactive Orbitrap family of instruments. Despite their common origin and shared hardware components\, e.g.\, Orbitrap mass analyser\, the above instruments tend to write data in different \"dialects\" in a shared binary file format \(.raw\). The intention behind tartare is to provide complex but slim real\-world files that can be used to make code robust with respect to this diversity. In other words\, it is intended for enhanced unit testing. The package is considered to be used with the rawrr package and the Spectra MsBackends.


.. conda:package:: bioconductor-tartare

   |downloads_bioconductor-tartare| |docker_bioconductor-tartare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends curl: 
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

      mamba install bioconductor-tartare

   and update with::

      mamba update bioconductor-tartare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tartare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tartare:<tag>

   (see `bioconductor-tartare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tartare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tartare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tartare
   :alt:   (downloads)
.. |docker_bioconductor-tartare| image:: https://quay.io/repository/biocontainers/bioconductor-tartare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tartare
.. _`bioconductor-tartare/tags`: https://quay.io/repository/biocontainers/bioconductor-tartare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tartare";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tartare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tartare/README.html