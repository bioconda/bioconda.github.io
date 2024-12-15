:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntsm'
.. highlight: bash

ntsm
====

.. conda:recipe:: ntsm
   :replaces_section_title:
   :noindex:

   ntsm \- Nucleotide Sequence\/Sample Matcher

   :homepage: https://github.com/JustinChu/ntsm
   :documentation: https://github.com/JustinChu/ntsm/blob/1.2.1/README.md
   
   :license: MIT / MIT
   :recipe: /`ntsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsm/meta.yaml>`_

   


.. conda:package:: ntsm

   |downloads_ntsm| |docker_ntsm|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bwa: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends make: 
   :depends numpy: 
   :depends pandas: 
   :depends perl: 
   :depends pyfaidx: 
   :depends python: 
   :depends samtools: 
   :depends scikit-learn: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ntsm

   and update with::

      mamba update ntsm

  To create a new environment, run::

      mamba create --name myenvname ntsm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntsm:<tag>

   (see `ntsm/tags`_ for valid values for ``<tag>``)


.. |downloads_ntsm| image:: https://img.shields.io/conda/dn/bioconda/ntsm.svg?style=flat
   :target: https://anaconda.org/bioconda/ntsm
   :alt:   (downloads)
.. |docker_ntsm| image:: https://quay.io/repository/biocontainers/ntsm/status
   :target: https://quay.io/repository/biocontainers/ntsm
.. _`ntsm/tags`: https://quay.io/repository/biocontainers/ntsm?tab=tags


.. raw:: html

    <script>
        var package = "ntsm";
        var versions = ["1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntsm/README.html