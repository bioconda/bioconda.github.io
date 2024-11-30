:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-snvphyl-plugin'
.. highlight: bash

bcftools-snvphyl-plugin
=======================

.. conda:recipe:: bcftools-snvphyl-plugin
   :replaces_section_title:
   :noindex:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying Single Nucleotide Variants \(SNV\) within a collection\\ of microbial genomes and constructing a phylogenetic tree. This package is the bcftools C plugin

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: Apache / Apache-2.0
   :recipe: /`bcftools-snvphyl-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-snvphyl-plugin

   |downloads_bcftools-snvphyl-plugin| |docker_bcftools-snvphyl-plugin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9-7</code>,  <code>1.9-6</code>,  <code>1.9-5</code>,  <code>1.9-4</code>,  <code>1.9-3</code>,  <code>1.9-2</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  <code>1.8-2</code>,  </span></summary>
      

      ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``1.9.*``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
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

      mamba install bcftools-snvphyl-plugin

   and update with::

      mamba update bcftools-snvphyl-plugin

  To create a new environment, run::

      mamba create --name myenvname bcftools-snvphyl-plugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcftools-snvphyl-plugin:<tag>

   (see `bcftools-snvphyl-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools-snvphyl-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-snvphyl-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-snvphyl-plugin
   :alt:   (downloads)
.. |docker_bcftools-snvphyl-plugin| image:: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin
.. _`bcftools-snvphyl-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin?tab=tags


.. raw:: html

    <script>
        var package = "bcftools-snvphyl-plugin";
        var versions = ["1.9","1.9","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html