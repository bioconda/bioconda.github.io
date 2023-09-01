:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goseq'
.. highlight: bash

bioconductor-goseq
==================

.. conda:recipe:: bioconductor-goseq
   :replaces_section_title:
   :noindex:

   Gene Ontology analyser for RNA\-seq and other length biased data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/goseq.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-goseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goseq/meta.yaml>`_
   :links: biotools: :biotools:`goseq`

   Detects Gene Ontology and\/or other user defined categories which are over\/under represented in RNA\-seq data


.. conda:package:: bioconductor-goseq

   |downloads_bioconductor-goseq| |docker_bioconductor-goseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.36.0-1``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genelendatabase: ``>=1.36.0,<1.37.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biasedurn: 
   :depends r-mgcv: 
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

      mamba install bioconductor-goseq

   and update with::

      mamba update bioconductor-goseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-goseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-goseq:<tag>

   (see `bioconductor-goseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-goseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goseq
   :alt:   (downloads)
.. |docker_bioconductor-goseq| image:: https://quay.io/repository/biocontainers/bioconductor-goseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goseq
.. _`bioconductor-goseq/tags`: https://quay.io/repository/biocontainers/bioconductor-goseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-goseq";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goseq/README.html