:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pileup'
.. highlight: bash

snp-pileup
==========

.. conda:recipe:: snp-pileup
   :replaces_section_title:
   :noindex:

   Compute SNP pileup at reference positions in one or more input bam files. Output is ready for the R package facets

   :homepage: https://github.com/mskcc/facets
   :license: MIT / MIT
   :recipe: /`snp-pileup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup/meta.yaml>`_

   


.. conda:package:: snp-pileup

   |downloads_snp-pileup| |docker_snp-pileup|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-8</code>,  <code>0.6.2-7</code>,  <code>0.6.2-6</code>,  <code>0.6.2-5</code>,  <code>0.6.2-4</code>,  <code>0.6.2-3</code>,  <code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.6.2-8``,  ``0.6.2-7``,  ``0.6.2-6``,  ``0.6.2-5``,  ``0.6.2-4``,  ``0.6.2-3``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.14-3``,  ``0.5.14-2``,  ``0.5.14-1``,  ``0.5.14-0``,  ``v0.5.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snp-pileup

   and update with::

      mamba update snp-pileup

  To create a new environment, run::

      mamba create --name myenvname snp-pileup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp-pileup:<tag>

   (see `snp-pileup/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-pileup| image:: https://img.shields.io/conda/dn/bioconda/snp-pileup.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pileup
   :alt:   (downloads)
.. |docker_snp-pileup| image:: https://quay.io/repository/biocontainers/snp-pileup/status
   :target: https://quay.io/repository/biocontainers/snp-pileup
.. _`snp-pileup/tags`: https://quay.io/repository/biocontainers/snp-pileup?tab=tags


.. raw:: html

    <script>
        var package = "snp-pileup";
        var versions = ["0.6.2","0.6.2","0.6.2","0.6.2","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pileup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pileup/README.html