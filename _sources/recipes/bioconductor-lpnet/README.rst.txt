:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpnet'
.. highlight: bash

bioconductor-lpnet
==================

.. conda:recipe:: bioconductor-lpnet
   :replaces_section_title:
   :noindex:

   Linear Programming Model for Network Inference

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/lpNet.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-lpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpnet/meta.yaml>`_
   :links: biotools: :biotools:`lpnet`, doi: :doi:`10.1093/bioinformatics/btv327`

   lpNet aims at infering biological networks\, in particular signaling and gene networks. For that it takes perturbation data\, either steady\-state or time\-series\, as input and generates an LP model which allows the inference of signaling networks. For parameter identification either leave\-one\-out cross\-validation or stratified n\-fold cross\-validation can be used.


.. conda:package:: bioconductor-lpnet

   |downloads_bioconductor-lpnet| |docker_bioconductor-lpnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lpsolve: 
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

      mamba install bioconductor-lpnet

   and update with::

      mamba update bioconductor-lpnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lpnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpnet:<tag>

   (see `bioconductor-lpnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpnet
   :alt:   (downloads)
.. |docker_bioconductor-lpnet| image:: https://quay.io/repository/biocontainers/bioconductor-lpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpnet
.. _`bioconductor-lpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-lpnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpnet";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpnet/README.html