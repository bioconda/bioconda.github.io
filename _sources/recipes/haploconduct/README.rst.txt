:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploconduct'
.. highlight: bash

haploconduct
============

.. conda:recipe:: haploconduct
   :replaces_section_title:
   :noindex:

   HaploConduct is a package designed for reconstruction of individual haplotypes from next generation sequencing data\, in particular Illumina. It provides two methods\, SAVAGE and POLYTE\, which can be run through the haploconduct wrapper.

   :homepage: https://github.com/HaploConduct/HaploConduct
   :license: GPL3
   :recipe: /`haploconduct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct/meta.yaml>`_

   


.. conda:package:: haploconduct

   |downloads_haploconduct| |docker_haploconduct|

   :versions:
      
      

      ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bwa: 
   :depends kallisto: ``>=0.43.0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends rust-overlaps: 
   :depends samtools: ``>=1.4``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install haploconduct

   and update with::

      mamba update haploconduct

  To create a new environment, run::

      mamba create --name myenvname haploconduct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haploconduct:<tag>

   (see `haploconduct/tags`_ for valid values for ``<tag>``)


.. |downloads_haploconduct| image:: https://img.shields.io/conda/dn/bioconda/haploconduct.svg?style=flat
   :target: https://anaconda.org/bioconda/haploconduct
   :alt:   (downloads)
.. |docker_haploconduct| image:: https://quay.io/repository/biocontainers/haploconduct/status
   :target: https://quay.io/repository/biocontainers/haploconduct
.. _`haploconduct/tags`: https://quay.io/repository/biocontainers/haploconduct?tab=tags


.. raw:: html

    <script>
        var package = "haploconduct";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploconduct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploconduct/README.html