:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnbeads'
.. highlight: bash

bioconductor-rnbeads
====================

.. conda:recipe:: bioconductor-rnbeads
   :replaces_section_title:
   :noindex:

   RnBeads

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RnBeads.html
   :license: GPL-3
   :recipe: /`bioconductor-rnbeads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnbeads/meta.yaml>`_

   RnBeads facilitates comprehensive analysis of various types of DNA methylation data at the genome scale.


.. conda:package:: bioconductor-rnbeads

   |downloads_bioconductor-rnbeads| |docker_bioconductor-rnbeads|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.2-0</code>,  <code>2.10.0-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.2-0``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.0-0``,  ``1.12.1-0``,  ``1.10.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-illuminaio: ``>=0.42.0,<0.43.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-methylumi: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-ff: 
   :depends r-fields: 
   :depends r-ggplot2: ``>=0.9.2``
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-plyr: 
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

      mamba install bioconductor-rnbeads

   and update with::

      mamba update bioconductor-rnbeads

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnbeads

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnbeads:<tag>

   (see `bioconductor-rnbeads/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnbeads| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnbeads.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnbeads
   :alt:   (downloads)
.. |docker_bioconductor-rnbeads| image:: https://quay.io/repository/biocontainers/bioconductor-rnbeads/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnbeads
.. _`bioconductor-rnbeads/tags`: https://quay.io/repository/biocontainers/bioconductor-rnbeads?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnbeads";
        var versions = ["2.18.0","2.16.0","2.12.2","2.10.0","2.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnbeads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnbeads/README.html