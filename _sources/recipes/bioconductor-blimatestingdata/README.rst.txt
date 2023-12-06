:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blimatestingdata'
.. highlight: bash

bioconductor-blimatestingdata
=============================

.. conda:recipe:: bioconductor-blimatestingdata
   :replaces_section_title:
   :noindex:

   Data for testing of the package blima.

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/blimaTestingData.html
   :license: GPL-3
   :recipe: /`bioconductor-blimatestingdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blimatestingdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blimatestingdata/meta.yaml>`_

   Experiment data package. The set were prepared using microarray images of human mesenchymal cells treated with various supplements. This package is intended to provide example data to test functionality provided by blima.


.. conda:package:: bioconductor-blimatestingdata

   |downloads_bioconductor-blimatestingdata| |docker_bioconductor-blimatestingdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-blimatestingdata

   and update with::

      mamba update bioconductor-blimatestingdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-blimatestingdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blimatestingdata:<tag>

   (see `bioconductor-blimatestingdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blimatestingdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blimatestingdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blimatestingdata
   :alt:   (downloads)
.. |docker_bioconductor-blimatestingdata| image:: https://quay.io/repository/biocontainers/bioconductor-blimatestingdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blimatestingdata
.. _`bioconductor-blimatestingdata/tags`: https://quay.io/repository/biocontainers/bioconductor-blimatestingdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-blimatestingdata";
        var versions = ["1.22.0","1.20.0","1.17.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blimatestingdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blimatestingdata/README.html