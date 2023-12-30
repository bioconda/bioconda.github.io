:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-faahko'
.. highlight: bash

bioconductor-faahko
===================

.. conda:recipe:: bioconductor-faahko
   :replaces_section_title:
   :noindex:

   Saghatelian et al. \(2004\) FAAH knockout LC\/MS data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/faahKO.html
   :license: LGPL
   :recipe: /`bioconductor-faahko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-faahko/meta.yaml>`_

   Positive ionization mode data in NetCDF file format. Centroided subset from 200\-600 m\/z and 2500\-4500 seconds. Data originally reported in \"Assignment of Endogenous Substrates to Enzymes by Global Metabolite Profiling\" Biochemistry\; 2004\; 43\(45\). Also includes detected peaks in an xcmsSet.


.. conda:package:: bioconductor-faahko

   |downloads_bioconductor-faahko| |docker_bioconductor-faahko|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-xcms: ``>=4.0.0,<4.1.0``
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

      mamba install bioconductor-faahko

   and update with::

      mamba update bioconductor-faahko

  To create a new environment, run::

      mamba create --name myenvname bioconductor-faahko

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-faahko:<tag>

   (see `bioconductor-faahko/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-faahko| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-faahko.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-faahko
   :alt:   (downloads)
.. |docker_bioconductor-faahko| image:: https://quay.io/repository/biocontainers/bioconductor-faahko/status
   :target: https://quay.io/repository/biocontainers/bioconductor-faahko
.. _`bioconductor-faahko/tags`: https://quay.io/repository/biocontainers/bioconductor-faahko?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-faahko";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-faahko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-faahko/README.html