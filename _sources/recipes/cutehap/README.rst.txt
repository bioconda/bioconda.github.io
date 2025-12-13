:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutehap'
.. highlight: bash

cutehap
=======

.. conda:recipe:: cutehap
   :replaces_section_title:
   :noindex:

   Haplotype\-Aware Structural Variant Detector

   :homepage: https://github.com/Meltpinkg/cuteHap
   :license: MIT
   :recipe: /`cutehap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutehap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutehap/meta.yaml>`_

   


.. conda:package:: cutehap

   |downloads_cutehap| |docker_cutehap|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends biopython: 
   :depends cigar: 
   :depends cython: 
   :depends libgcc: ``>=13``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends scipy: 
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

      mamba install cutehap

   and update with::

      mamba update cutehap

  To create a new environment, run::

      mamba create --name myenvname cutehap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cutehap:<tag>

   (see `cutehap/tags`_ for valid values for ``<tag>``)


.. |downloads_cutehap| image:: https://img.shields.io/conda/dn/bioconda/cutehap.svg?style=flat
   :target: https://anaconda.org/bioconda/cutehap
   :alt:   (downloads)
.. |docker_cutehap| image:: https://quay.io/repository/biocontainers/cutehap/status
   :target: https://quay.io/repository/biocontainers/cutehap
.. _`cutehap/tags`: https://quay.io/repository/biocontainers/cutehap?tab=tags


.. raw:: html

    <script>
        var package = "cutehap";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutehap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutehap/README.html