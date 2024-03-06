:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-sage'
.. highlight: bash

hmftools-sage
=============

.. conda:recipe:: hmftools-sage
   :replaces_section_title:
   :noindex:

   SAGE is a somatic SNV\, MNV and small INDEL caller optimised 100x tumor \/ 40x normal coverage\, but has a flexible set of filters that can be adapted to lower or higher depth coverage.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/sage
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-sage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sage/meta.yaml>`_

   


.. conda:package:: hmftools-sage

   |downloads_hmftools-sage| |docker_hmftools-sage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.2.3-0</code>,  <code>3.1-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  </span></summary>
      

      ``3.4.2-0``,  ``3.4.1-0``,  ``3.4-1``,  ``3.4-0``,  ``3.2.3-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.8-1``,  ``2.8-0``,  ``2.7-1``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-variantannotation: 
   :depends font-ttf-dejavu: 
   :depends openjdk: ``>=8``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-tidyr: 
   :depends xorg-libxt: 
   :depends zlib: 
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

      mamba install hmftools-sage

   and update with::

      mamba update hmftools-sage

  To create a new environment, run::

      mamba create --name myenvname hmftools-sage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-sage:<tag>

   (see `hmftools-sage/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-sage| image:: https://img.shields.io/conda/dn/bioconda/hmftools-sage.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-sage
   :alt:   (downloads)
.. |docker_hmftools-sage| image:: https://quay.io/repository/biocontainers/hmftools-sage/status
   :target: https://quay.io/repository/biocontainers/hmftools-sage
.. _`hmftools-sage/tags`: https://quay.io/repository/biocontainers/hmftools-sage?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-sage";
        var versions = ["3.4.2","3.4.1","3.4","3.4","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-sage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-sage/README.html