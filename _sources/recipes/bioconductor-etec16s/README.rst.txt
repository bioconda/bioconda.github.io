:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-etec16s'
.. highlight: bash

bioconductor-etec16s
====================

.. conda:recipe:: bioconductor-etec16s
   :replaces_section_title:
   :noindex:

   Individual\-specific changes in the human gut microbiota after challenge with enterotoxigenic Escherichia coli and subsequent ciprofloxacin treatment

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/etec16s.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-etec16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-etec16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-etec16s/meta.yaml>`_

   16S rRNA gene sequencing data to study changes in the faecal microbiota of 12 volunteers during a human challenge study with ETEC \(H10407\) and subsequent treatment with ciprofloxacin.


.. conda:package:: bioconductor-etec16s

   |downloads_bioconductor-etec16s| |docker_bioconductor-etec16s|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-metagenomeseq: ``>=1.42.0,<1.43.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-etec16s

   and update with::

      mamba update bioconductor-etec16s

  To create a new environment, run::

      mamba create --name myenvname bioconductor-etec16s

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-etec16s:<tag>

   (see `bioconductor-etec16s/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-etec16s| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-etec16s.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-etec16s
   :alt:   (downloads)
.. |docker_bioconductor-etec16s| image:: https://quay.io/repository/biocontainers/bioconductor-etec16s/status
   :target: https://quay.io/repository/biocontainers/bioconductor-etec16s
.. _`bioconductor-etec16s/tags`: https://quay.io/repository/biocontainers/bioconductor-etec16s?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-etec16s";
        var versions = ["1.28.0","1.26.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-etec16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-etec16s/README.html