:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycompdata'
.. highlight: bash

bioconductor-affycompdata
=========================

.. conda:recipe:: bioconductor-affycompdata
   :replaces_section_title:
   :noindex:

   affycomp data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/affycompData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affycompdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompdata/meta.yaml>`_

   Data needed by the affycomp package.


.. conda:package:: bioconductor-affycompdata

   |downloads_bioconductor-affycompdata| |docker_bioconductor-affycompdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-2``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affycomp: ``>=1.82.0,<1.83.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-affycompdata

   and update with::

      mamba update bioconductor-affycompdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affycompdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affycompdata:<tag>

   (see `bioconductor-affycompdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycompdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycompdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affycompdata
   :alt:   (downloads)
.. |docker_bioconductor-affycompdata| image:: https://quay.io/repository/biocontainers/bioconductor-affycompdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycompdata
.. _`bioconductor-affycompdata/tags`: https://quay.io/repository/biocontainers/bioconductor-affycompdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affycompdata";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycompdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycompdata/README.html