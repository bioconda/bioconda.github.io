:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dresscheck'
.. highlight: bash

bioconductor-dresscheck
=======================

.. conda:recipe:: bioconductor-dresscheck
   :replaces_section_title:
   :noindex:

   data and software for checking Dressman JCO 25\(5\) 2007

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/dressCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dresscheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck/meta.yaml>`_

   data and software for checking Dressman JCO 25\(5\) 2007


.. conda:package:: bioconductor-dresscheck

   |downloads_bioconductor-dresscheck| |docker_bioconductor-dresscheck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.27.0-0</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
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

      mamba install bioconductor-dresscheck

   and update with::

      mamba update bioconductor-dresscheck

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dresscheck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dresscheck:<tag>

   (see `bioconductor-dresscheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dresscheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dresscheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dresscheck
   :alt:   (downloads)
.. |docker_bioconductor-dresscheck| image:: https://quay.io/repository/biocontainers/bioconductor-dresscheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dresscheck
.. _`bioconductor-dresscheck/tags`: https://quay.io/repository/biocontainers/bioconductor-dresscheck?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dresscheck";
        var versions = ["0.40.0","0.38.0","0.36.0","0.32.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html