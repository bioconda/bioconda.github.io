:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtreemix'
.. highlight: bash

bioconductor-rtreemix
=====================

.. conda:recipe:: bioconductor-rtreemix
   :replaces_section_title:
   :noindex:

   Rtreemix\: Mutagenetic trees mixture models.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rtreemix.html
   :license: LGPL
   :recipe: /`bioconductor-rtreemix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtreemix/meta.yaml>`_
   :links: biotools: :biotools:`rtreemix`, doi: :doi:`10.1093/bioinformatics/btn410`

   Rtreemix is a package that offers an environment for estimating the mutagenetic trees mixture models from cross\-sectional data and using them for various predictions. It includes functions for fitting the trees mixture models\, likelihood computations\, model comparisons\, waiting time estimations\, stability analysis\, etc.


.. conda:package:: bioconductor-rtreemix

   |downloads_bioconductor-rtreemix| |docker_bioconductor-rtreemix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hmisc: 
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

      mamba install bioconductor-rtreemix

   and update with::

      mamba update bioconductor-rtreemix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtreemix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtreemix:<tag>

   (see `bioconductor-rtreemix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtreemix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtreemix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtreemix
   :alt:   (downloads)
.. |docker_bioconductor-rtreemix| image:: https://quay.io/repository/biocontainers/bioconductor-rtreemix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtreemix
.. _`bioconductor-rtreemix/tags`: https://quay.io/repository/biocontainers/bioconductor-rtreemix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtreemix";
        var versions = ["1.64.0","1.62.0","1.60.0","1.60.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtreemix/README.html