:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eastr'
.. highlight: bash

eastr
=====

.. conda:recipe:: eastr
   :replaces_section_title:
   :noindex:

   Tool for emending alignments of spuriously spliced transcript reads.

   :homepage: https://ccb.jhu.edu/eastr/
   :documentation: https://ccb.jhu.edu/eastr/#usage
   
   :developer docs: https://github.com/ishinder/EASTR
   :license: MIT / MIT
   :recipe: /`eastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eastr/meta.yaml>`_
   :links: biotools: :biotools:`eastr`, usegalaxy-eu: :usegalaxy-eu:`eastr`, doi: :doi:`10.1038/s41467-023-43017-4`

   


.. conda:package:: eastr

   |downloads_eastr| |docker_eastr|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends biopython: ``>=1.81,<2.0``
   :depends bowtie2: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mappy: ``>=2.26,<3.0``
   :depends numpy: ``>=1.26.1``
   :depends pandas: ``>=2.1.2,<2.3``
   :depends pysam: ``>=0.22.0,<0.23``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
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

      mamba install eastr

   and update with::

      mamba update eastr

  To create a new environment, run::

      mamba create --name myenvname eastr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eastr:<tag>

   (see `eastr/tags`_ for valid values for ``<tag>``)


.. |downloads_eastr| image:: https://img.shields.io/conda/dn/bioconda/eastr.svg?style=flat
   :target: https://anaconda.org/bioconda/eastr
   :alt:   (downloads)
.. |docker_eastr| image:: https://quay.io/repository/biocontainers/eastr/status
   :target: https://quay.io/repository/biocontainers/eastr
.. _`eastr/tags`: https://quay.io/repository/biocontainers/eastr?tab=tags


.. raw:: html

    <script>
        var package = "eastr";
        var versions = ["1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eastr/README.html