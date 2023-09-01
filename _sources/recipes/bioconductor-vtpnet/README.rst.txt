:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vtpnet'
.. highlight: bash

bioconductor-vtpnet
===================

.. conda:recipe:: bioconductor-vtpnet
   :replaces_section_title:
   :noindex:

   variant\-transcription factor\-phenotype networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/vtpnet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vtpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet/meta.yaml>`_

   variant\-transcription factor\-phenotype networks\, inspired by Maurano et al.\, Science \(2012\)\, PMID 22955828


.. conda:package:: bioconductor-vtpnet

   |downloads_bioconductor-vtpnet| |docker_bioconductor-vtpnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-1</code>,  <code>0.30.0-0</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  <code>0.24.0-1</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-gwascat: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
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

      mamba install bioconductor-vtpnet

   and update with::

      mamba update bioconductor-vtpnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vtpnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vtpnet:<tag>

   (see `bioconductor-vtpnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vtpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vtpnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vtpnet
   :alt:   (downloads)
.. |docker_bioconductor-vtpnet| image:: https://quay.io/repository/biocontainers/bioconductor-vtpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vtpnet
.. _`bioconductor-vtpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-vtpnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vtpnet";
        var versions = ["0.40.0","0.38.0","0.34.0","0.32.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html