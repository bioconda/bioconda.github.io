:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imman'
.. highlight: bash

bioconductor-imman
==================

.. conda:recipe:: bioconductor-imman
   :replaces_section_title:
   :noindex:

   Interlog protein network reconstruction by Mapping and Mining ANalysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IMMAN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-imman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman/meta.yaml>`_

   Reconstructing Interlog Protein Network \(IPN\) integrated from several Protein protein Interaction Networks \(PPINs\). Using this package\, overlaying different PPINs to mine conserved common networks between diverse species will be applicable.


.. conda:package:: bioconductor-imman

   |downloads_bioconductor-imman| |docker_bioconductor-imman|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.7.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-stringdb: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-seqinr: 
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

      mamba install bioconductor-imman

   and update with::

      mamba update bioconductor-imman

  To create a new environment, run::

      mamba create --name myenvname bioconductor-imman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imman:<tag>

   (see `bioconductor-imman/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imman| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imman.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imman
   :alt:   (downloads)
.. |docker_bioconductor-imman| image:: https://quay.io/repository/biocontainers/bioconductor-imman/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imman
.. _`bioconductor-imman/tags`: https://quay.io/repository/biocontainers/bioconductor-imman?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imman";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imman/README.html