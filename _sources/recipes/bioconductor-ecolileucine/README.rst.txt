:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolileucine'
.. highlight: bash

bioconductor-ecolileucine
=========================

.. conda:recipe:: bioconductor-ecolileucine
   :replaces_section_title:
   :noindex:

   Experimental data with Affymetrix E. coli chips

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ecoliLeucine.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ecolileucine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolileucine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolileucine/meta.yaml>`_

   Experimental data with Affymetrix E. coli chips\, as reported in She\-pin Hung\, Pierre Baldi\, and G. Wesley Hatfield\, J. Biol. Chem.\, Vol. 277\, Issue 43\, 40309\-40323\, October 25\, 2002


.. conda:package:: bioconductor-ecolileucine

   |downloads_bioconductor-ecolileucine| |docker_bioconductor-ecolileucine|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-ecolicdf: ``>=2.18.0,<2.19.0``
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

      mamba install bioconductor-ecolileucine

   and update with::

      mamba update bioconductor-ecolileucine

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ecolileucine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolileucine:<tag>

   (see `bioconductor-ecolileucine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolileucine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolileucine.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolileucine
   :alt:   (downloads)
.. |docker_bioconductor-ecolileucine| image:: https://quay.io/repository/biocontainers/bioconductor-ecolileucine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolileucine
.. _`bioconductor-ecolileucine/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolileucine?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ecolileucine";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolileucine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolileucine/README.html