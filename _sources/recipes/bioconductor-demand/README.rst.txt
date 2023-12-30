:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demand'
.. highlight: bash

bioconductor-demand
===================

.. conda:recipe:: bioconductor-demand
   :replaces_section_title:
   :noindex:

   DeMAND

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DeMAND.html
   :license: file LICENSE
   :recipe: /`bioconductor-demand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demand/meta.yaml>`_
   :links: biotools: :biotools:`demand`, doi: :doi:`10.1038/nmeth.3252`

   DEMAND predicts Drug MoA by interrogating a cell context specific regulatory network with a small number \(N \>\= 6\) of compound\-induced gene expression signatures\, to elucidate specific proteins whose interactions in the network is dysregulated by the compound.


.. conda:package:: bioconductor-demand

   |downloads_bioconductor-demand| |docker_bioconductor-demand|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-demand

   and update with::

      mamba update bioconductor-demand

  To create a new environment, run::

      mamba create --name myenvname bioconductor-demand

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-demand:<tag>

   (see `bioconductor-demand/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-demand| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demand.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demand
   :alt:   (downloads)
.. |docker_bioconductor-demand| image:: https://quay.io/repository/biocontainers/bioconductor-demand/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demand
.. _`bioconductor-demand/tags`: https://quay.io/repository/biocontainers/bioconductor-demand?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demand";
        var versions = ["1.32.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demand/README.html