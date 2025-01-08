:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vcdata'
.. highlight: bash

bioconductor-h5vcdata
=====================

.. conda:recipe:: bioconductor-h5vcdata
   :replaces_section_title:
   :noindex:

   Example data for the h5vc package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/h5vcData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata/meta.yaml>`_

   This package contains the data used in the vignettes and examples of the \'h5vc\' package


.. conda:package:: bioconductor-h5vcdata

   |downloads_bioconductor-h5vcdata| |docker_bioconductor-h5vcdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.17.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.17.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-h5vcdata

   and update with::

      mamba update bioconductor-h5vcdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-h5vcdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vcdata:<tag>

   (see `bioconductor-h5vcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5vcdata
   :alt:   (downloads)
.. |docker_bioconductor-h5vcdata| image:: https://quay.io/repository/biocontainers/bioconductor-h5vcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vcdata
.. _`bioconductor-h5vcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h5vcdata";
        var versions = ["2.26.0","2.22.0","2.20.0","2.18.0","2.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html