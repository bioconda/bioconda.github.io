:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iclusterplus'
.. highlight: bash

bioconductor-iclusterplus
=========================

.. conda:recipe:: bioconductor-iclusterplus
   :replaces_section_title:
   :noindex:

   Integrative clustering of multi\-type genomic data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iClusterPlus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iclusterplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iclusterplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iclusterplus/meta.yaml>`_

   Integrative clustering of multiple genomic data using a joint latent variable model.


.. conda:package:: bioconductor-iclusterplus

   |downloads_bioconductor-iclusterplus| |docker_bioconductor-iclusterplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-iclusterplus

   and update with::

      mamba update bioconductor-iclusterplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iclusterplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iclusterplus:<tag>

   (see `bioconductor-iclusterplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iclusterplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iclusterplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iclusterplus
   :alt:   (downloads)
.. |docker_bioconductor-iclusterplus| image:: https://quay.io/repository/biocontainers/bioconductor-iclusterplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iclusterplus
.. _`bioconductor-iclusterplus/tags`: https://quay.io/repository/biocontainers/bioconductor-iclusterplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iclusterplus";
        var versions = ["1.38.0","1.38.0","1.38.0","1.36.1","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iclusterplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iclusterplus/README.html