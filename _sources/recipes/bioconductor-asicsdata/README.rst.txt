:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asicsdata'
.. highlight: bash

bioconductor-asicsdata
======================

.. conda:recipe:: bioconductor-asicsdata
   :replaces_section_title:
   :noindex:

   Example of 1D NMR spectra data for ASICS package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ASICSdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asicsdata/meta.yaml>`_

   1D NMR example spectra and additional data for use with the ASICS package. Raw 1D Bruker spectral data files were found in the MetaboLights database \(https\:\/\/www.ebi.ac.uk\/metabolights\/\, study MTBLS1\).


.. conda:package:: bioconductor-asicsdata

   |downloads_bioconductor-asicsdata| |docker_bioconductor-asicsdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-asicsdata

   and update with::

      mamba update bioconductor-asicsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asicsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asicsdata:<tag>

   (see `bioconductor-asicsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asicsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asicsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asicsdata
   :alt:   (downloads)
.. |docker_bioconductor-asicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-asicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asicsdata
.. _`bioconductor-asicsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-asicsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asicsdata";
        var versions = ["1.22.0","1.20.0","1.17.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asicsdata/README.html