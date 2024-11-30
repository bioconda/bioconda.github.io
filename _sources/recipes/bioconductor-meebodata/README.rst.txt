:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meebodata'
.. highlight: bash

bioconductor-meebodata
======================

.. conda:recipe:: bioconductor-meebodata
   :replaces_section_title:
   :noindex:

   MEEBO set and MEEBO controls.

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MEEBOdata.html
   :license: LGPL
   :recipe: /`bioconductor-meebodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meebodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meebodata/meta.yaml>`_

   R objects describing the MEEBO set.


.. conda:package:: bioconductor-meebodata

   |downloads_bioconductor-meebodata| |docker_bioconductor-meebodata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-meebodata

   and update with::

      mamba update bioconductor-meebodata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-meebodata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meebodata:<tag>

   (see `bioconductor-meebodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meebodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meebodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meebodata
   :alt:   (downloads)
.. |docker_bioconductor-meebodata| image:: https://quay.io/repository/biocontainers/bioconductor-meebodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meebodata
.. _`bioconductor-meebodata/tags`: https://quay.io/repository/biocontainers/bioconductor-meebodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meebodata";
        var versions = ["1.40.0","1.38.0","1.35.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meebodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meebodata/README.html