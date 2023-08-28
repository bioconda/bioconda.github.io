:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderdata'
.. highlight: bash

bioconductor-derfinderdata
==========================

.. conda:recipe:: bioconductor-derfinderdata
   :replaces_section_title:
   :noindex:

   Processed BigWigs from BrainSpan for examples

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/derfinderData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderdata/meta.yaml>`_

   Processed 22 samples from BrainSpan keeping only the information for chromosome 21. Data is stored in the BigWig format and is used for examples in other packages.


.. conda:package:: bioconductor-derfinderdata

   |downloads_bioconductor-derfinderdata| |docker_bioconductor-derfinderdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.15.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-0</code>,  <code>2.7.1-0</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.15.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.1-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-derfinderdata

   and update with::

      mamba update bioconductor-derfinderdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-derfinderdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinderdata:<tag>

   (see `bioconductor-derfinderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinderdata
   :alt:   (downloads)
.. |docker_bioconductor-derfinderdata| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderdata
.. _`bioconductor-derfinderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-derfinderdata";
        var versions = ["2.18.0","2.15.0","2.12.0","2.12.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderdata/README.html