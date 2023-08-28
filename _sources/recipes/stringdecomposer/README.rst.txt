:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringdecomposer'
.. highlight: bash

stringdecomposer
================

.. conda:recipe:: stringdecomposer
   :replaces_section_title:
   :noindex:

   A tool for decomposing of strings into a set of given monomers

   :homepage: https://github.com/ablab/stringdecomposer
   :license: GPL / GPLv2
   :recipe: /`stringdecomposer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringdecomposer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringdecomposer/meta.yaml>`_

   StringDecomposer \(SD\) algorithm takes the set of monomers and a long error\-prone read \(or a genomic segment\) and partitions this read into distinct monomers.


.. conda:package:: stringdecomposer

   |downloads_stringdecomposer| |docker_stringdecomposer|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-edlib: 
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install stringdecomposer

   and update with::

      mamba update stringdecomposer

  To create a new environment, run::

      mamba create --name myenvname stringdecomposer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stringdecomposer:<tag>

   (see `stringdecomposer/tags`_ for valid values for ``<tag>``)


.. |downloads_stringdecomposer| image:: https://img.shields.io/conda/dn/bioconda/stringdecomposer.svg?style=flat
   :target: https://anaconda.org/bioconda/stringdecomposer
   :alt:   (downloads)
.. |docker_stringdecomposer| image:: https://quay.io/repository/biocontainers/stringdecomposer/status
   :target: https://quay.io/repository/biocontainers/stringdecomposer
.. _`stringdecomposer/tags`: https://quay.io/repository/biocontainers/stringdecomposer?tab=tags


.. raw:: html

    <script>
        var package = "stringdecomposer";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringdecomposer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringdecomposer/README.html