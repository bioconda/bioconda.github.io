:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impcdata'
.. highlight: bash

bioconductor-impcdata
=====================

.. conda:recipe:: bioconductor-impcdata
   :replaces_section_title:
   :noindex:

   Retrieves data from IMPC database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IMPCdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-impcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impcdata/meta.yaml>`_

   Package contains methods for data retrieval from IMPC Database.


.. conda:package:: bioconductor-impcdata

   |downloads_bioconductor-impcdata| |docker_bioconductor-impcdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjson: 
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

      mamba install bioconductor-impcdata

   and update with::

      mamba update bioconductor-impcdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-impcdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impcdata:<tag>

   (see `bioconductor-impcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-impcdata
   :alt:   (downloads)
.. |docker_bioconductor-impcdata| image:: https://quay.io/repository/biocontainers/bioconductor-impcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impcdata
.. _`bioconductor-impcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-impcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-impcdata";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impcdata/README.html