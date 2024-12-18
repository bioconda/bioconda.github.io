:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mouse4302barcodevecs'
.. highlight: bash

bioconductor-mouse4302barcodevecs
=================================

.. conda:recipe:: bioconductor-mouse4302barcodevecs
   :replaces_section_title:
   :noindex:

   mouse4302 data for barcode

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/mouse4302barcodevecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mouse4302barcodevecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302barcodevecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302barcodevecs/meta.yaml>`_

   Data used by the barcode package for microarrays of type mouse4302.


.. conda:package:: bioconductor-mouse4302barcodevecs

   |downloads_bioconductor-mouse4302barcodevecs| |docker_bioconductor-mouse4302barcodevecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
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

      mamba install bioconductor-mouse4302barcodevecs

   and update with::

      mamba update bioconductor-mouse4302barcodevecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mouse4302barcodevecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mouse4302barcodevecs:<tag>

   (see `bioconductor-mouse4302barcodevecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mouse4302barcodevecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mouse4302barcodevecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mouse4302barcodevecs
   :alt:   (downloads)
.. |docker_bioconductor-mouse4302barcodevecs| image:: https://quay.io/repository/biocontainers/bioconductor-mouse4302barcodevecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mouse4302barcodevecs
.. _`bioconductor-mouse4302barcodevecs/tags`: https://quay.io/repository/biocontainers/bioconductor-mouse4302barcodevecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mouse4302barcodevecs";
        var versions = ["1.44.0","1.40.0","1.38.0","1.35.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mouse4302barcodevecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mouse4302barcodevecs/README.html