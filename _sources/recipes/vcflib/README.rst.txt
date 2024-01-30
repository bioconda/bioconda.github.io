:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcflib'
.. highlight: bash

vcflib
======

.. conda:recipe:: vcflib
   :replaces_section_title:
   :noindex:

   Command\-line tools for manipulating VCF files

   :homepage: https://github.com/vcflib/vcflib
   :license: MIT / MIT
   :recipe: /`vcflib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflib/meta.yaml>`_
   :links: biotools: :biotools:`vcflib`, doi: :doi:`10.1371/journal.pcbi.1009123`, usegalaxy-eu: :usegalaxy-eu:`vcfsort`

   


.. conda:package:: vcflib

   |downloads_vcflib| |docker_vcflib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  </span></summary>
      

      ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.0_rc3-0``,  ``1.0.0_rc2-2``,  ``1.0.0_rc2-1``,  ``1.0.0_rc2-0``,  ``1.0.0_rc1-3``,  ``1.0.0_rc1-1``,  ``1.0.0_rc1-0``,  ``1.0.0_rc0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends eigen: 
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends jsoncpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends python: ``>=3``
   :depends tabixpp: ``>=1.1.2,<1.1.3.0a0``
   :depends wfa2-lib: ``>=2.3.4,<2.4.0a0``
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

      mamba install vcflib

   and update with::

      mamba update vcflib

  To create a new environment, run::

      mamba create --name myenvname vcflib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcflib:<tag>

   (see `vcflib/tags`_ for valid values for ``<tag>``)


.. |downloads_vcflib| image:: https://img.shields.io/conda/dn/bioconda/vcflib.svg?style=flat
   :target: https://anaconda.org/bioconda/vcflib
   :alt:   (downloads)
.. |docker_vcflib| image:: https://quay.io/repository/biocontainers/vcflib/status
   :target: https://quay.io/repository/biocontainers/vcflib
.. _`vcflib/tags`: https://quay.io/repository/biocontainers/vcflib?tab=tags


.. raw:: html

    <script>
        var package = "vcflib";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcflib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcflib/README.html