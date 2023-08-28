:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-progeny'
.. highlight: bash

bioconductor-progeny
====================

.. conda:recipe:: bioconductor-progeny
   :replaces_section_title:
   :noindex:

   Pathway RespOnsive GENes for activity inference from gene expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/progeny.html
   :license: Apache License (== 2.0) | file LICENSE
   :recipe: /`bioconductor-progeny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-progeny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-progeny/meta.yaml>`_

   PROGENy is resource that leverages a large compendium of publicly available signaling perturbation experiments to yield a common core of pathway responsive genes for human and mouse. These\, coupled with any statistical method\, can be used to infer pathway activities from bulk or single\-cell transcriptomics.


.. conda:package:: bioconductor-progeny

   |downloads_bioconductor-progeny| |docker_bioconductor-progeny|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-decoupler: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-reshape2: 
   :depends r-tidyr: 
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

      mamba install bioconductor-progeny

   and update with::

      mamba update bioconductor-progeny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-progeny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-progeny:<tag>

   (see `bioconductor-progeny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-progeny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-progeny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-progeny
   :alt:   (downloads)
.. |docker_bioconductor-progeny| image:: https://quay.io/repository/biocontainers/bioconductor-progeny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-progeny
.. _`bioconductor-progeny/tags`: https://quay.io/repository/biocontainers/bioconductor-progeny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-progeny";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-progeny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-progeny/README.html