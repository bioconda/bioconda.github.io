:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2parquet'
.. highlight: bash

vcf2parquet
===========

.. conda:recipe:: vcf2parquet
   :replaces_section_title:
   :noindex:

   Convert a vcf in parquet.

   :homepage: https://github.com/natir/vcf2parquet
   :license: MIT / MIT
   :recipe: /`vcf2parquet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet/meta.yaml>`_

   


.. conda:package:: vcf2parquet

   |downloads_vcf2parquet| |docker_vcf2parquet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2-0</code>,  </span></summary>
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install vcf2parquet

   and update with::

      mamba update vcf2parquet

  To create a new environment, run::

      mamba create --name myenvname vcf2parquet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2parquet:<tag>

   (see `vcf2parquet/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2parquet| image:: https://img.shields.io/conda/dn/bioconda/vcf2parquet.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2parquet
   :alt:   (downloads)
.. |docker_vcf2parquet| image:: https://quay.io/repository/biocontainers/vcf2parquet/status
   :target: https://quay.io/repository/biocontainers/vcf2parquet
.. _`vcf2parquet/tags`: https://quay.io/repository/biocontainers/vcf2parquet?tab=tags


.. raw:: html

    <script>
        var package = "vcf2parquet";
        var versions = ["0.5.0","0.5.0","0.4.1","0.4.0","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2parquet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2parquet/README.html