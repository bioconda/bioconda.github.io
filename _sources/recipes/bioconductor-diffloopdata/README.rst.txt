:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffloopdata'
.. highlight: bash

bioconductor-diffloopdata
=========================

.. conda:recipe:: bioconductor-diffloopdata
   :replaces_section_title:
   :noindex:

   Example ChIA\-PET Datasets for the diffloop Package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/diffloopdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffloopdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloopdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloopdata/meta.yaml>`_

   ChIA\-PET example datasets and additional data for use with the diffloop package.


.. conda:package:: bioconductor-diffloopdata

   |downloads_bioconductor-diffloopdata| |docker_bioconductor-diffloopdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
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

      mamba install bioconductor-diffloopdata

   and update with::

      mamba update bioconductor-diffloopdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diffloopdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffloopdata:<tag>

   (see `bioconductor-diffloopdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffloopdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffloopdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffloopdata
   :alt:   (downloads)
.. |docker_bioconductor-diffloopdata| image:: https://quay.io/repository/biocontainers/bioconductor-diffloopdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffloopdata
.. _`bioconductor-diffloopdata/tags`: https://quay.io/repository/biocontainers/bioconductor-diffloopdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffloopdata";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffloopdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffloopdata/README.html