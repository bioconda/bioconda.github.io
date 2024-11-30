:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppinfer'
.. highlight: bash

bioconductor-ppinfer
====================

.. conda:recipe:: bioconductor-ppinfer
   :replaces_section_title:
   :noindex:

   Inferring functionally related proteins using protein interaction networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PPInfer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ppinfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppinfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppinfer/meta.yaml>`_

   Interactions between proteins occur in many\, if not most\, biological processes. Most proteins perform their functions in networks associated with other proteins and other biomolecules. This fact has motivated the development of a variety of experimental methods for the identification of protein interactions. This variety has in turn ushered in the development of numerous different computational approaches for modeling and predicting protein interactions. Sometimes an experiment is aimed at identifying proteins closely related to some interesting proteins. A network based statistical learning method is used to infer the putative functions of proteins from the known functions of its neighboring proteins on a PPI network. This package identifies such proteins often involved in the same or similar biological functions.


.. conda:package:: bioconductor-ppinfer

   |downloads_bioconductor-ppinfer| |docker_bioconductor-ppinfer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-stringdb: ``>=2.14.0,<2.15.0``
   :depends bioconductor-yeastexpdata: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-kernlab: 
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

      mamba install bioconductor-ppinfer

   and update with::

      mamba update bioconductor-ppinfer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ppinfer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ppinfer:<tag>

   (see `bioconductor-ppinfer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ppinfer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppinfer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ppinfer
   :alt:   (downloads)
.. |docker_bioconductor-ppinfer| image:: https://quay.io/repository/biocontainers/bioconductor-ppinfer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppinfer
.. _`bioconductor-ppinfer/tags`: https://quay.io/repository/biocontainers/bioconductor-ppinfer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ppinfer";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html