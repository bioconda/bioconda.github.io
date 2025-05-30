:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-optimalflowdata'
.. highlight: bash

bioconductor-optimalflowdata
============================

.. conda:recipe:: bioconductor-optimalflowdata
   :replaces_section_title:
   :noindex:

   optimalFlowData

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/optimalFlowData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-optimalflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-optimalflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-optimalflowdata/meta.yaml>`_

   Data files used as examples and for testing of the software provided in the optimalFlow package.


.. conda:package:: bioconductor-optimalflowdata

   |downloads_bioconductor-optimalflowdata| |docker_bioconductor-optimalflowdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
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

      mamba install bioconductor-optimalflowdata

   and update with::

      mamba update bioconductor-optimalflowdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-optimalflowdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-optimalflowdata:<tag>

   (see `bioconductor-optimalflowdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-optimalflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-optimalflowdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-optimalflowdata
   :alt:   (downloads)
.. |docker_bioconductor-optimalflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-optimalflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-optimalflowdata
.. _`bioconductor-optimalflowdata/tags`: https://quay.io/repository/biocontainers/bioconductor-optimalflowdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-optimalflowdata";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-optimalflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-optimalflowdata/README.html