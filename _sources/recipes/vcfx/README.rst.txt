:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfx'
.. highlight: bash

vcfx
====

.. conda:recipe:: vcfx
   :replaces_section_title:
   :noindex:

   VCFX\: A Comprehensive VCF Manipulation Toolkit

   :homepage: https://github.com/jorgeMFS/VCFX
   :documentation: https://ieeta-pt.github.io/VCFX/
   
   :developer docs: https://github.com/ieeta-pt/VCFX
   :license: MIT
   :recipe: /`vcfx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfx/meta.yaml>`_

   VCFX is a collection of specialized command\-line tools designed for efficient
   manipulation\, analysis\, and transformation of VCF \(Variant Call Format\) files
   used in genomic research and bioinformatics. The toolkit follows the Unix
   philosophy\, creating small\, focused tools that do one thing well and can be
   combined into powerful workflows.



.. conda:package:: vcfx

   |downloads_vcfx| |docker_vcfx|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
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

      mamba install vcfx

   and update with::

      mamba update vcfx

  To create a new environment, run::

      mamba create --name myenvname vcfx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfx:<tag>

   (see `vcfx/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfx| image:: https://img.shields.io/conda/dn/bioconda/vcfx.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfx
   :alt:   (downloads)
.. |docker_vcfx| image:: https://quay.io/repository/biocontainers/vcfx/status
   :target: https://quay.io/repository/biocontainers/vcfx
.. _`vcfx/tags`: https://quay.io/repository/biocontainers/vcfx?tab=tags


.. raw:: html

    <script>
        var package = "vcfx";
        var versions = ["1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfx/README.html