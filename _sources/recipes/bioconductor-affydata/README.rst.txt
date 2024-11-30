:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affydata'
.. highlight: bash

bioconductor-affydata
=====================

.. conda:recipe:: bioconductor-affydata
   :replaces_section_title:
   :noindex:

   Affymetrix Data for Demonstration Purpose

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/affydata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affydata/meta.yaml>`_

   Example datasets of a slightly large size. They represent \'real world examples\'\, unlike the artificial examples included in the package affy.


.. conda:package:: bioconductor-affydata

   |downloads_bioconductor-affydata| |docker_bioconductor-affydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.1-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.1-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-affydata

   and update with::

      mamba update bioconductor-affydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affydata:<tag>

   (see `bioconductor-affydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affydata
   :alt:   (downloads)
.. |docker_bioconductor-affydata| image:: https://quay.io/repository/biocontainers/bioconductor-affydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affydata
.. _`bioconductor-affydata/tags`: https://quay.io/repository/biocontainers/bioconductor-affydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affydata";
        var versions = ["1.50.0","1.48.1","1.48.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affydata/README.html