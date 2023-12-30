:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicexperiment'
.. highlight: bash

bioconductor-hicexperiment
==========================

.. conda:recipe:: bioconductor-hicexperiment
   :replaces_section_title:
   :noindex:

   Bioconductor class for interacting with Hi\-C files in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HiCExperiment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicexperiment/meta.yaml>`_

   R generic interface to Hi\-C contact matrices in \`.\(m\)cool\`\, \`.hic\` or HiC\-Pro derived formats\, as well as other Hi\-C processed file formats. Contact matrices can be partially parsed using a random access method\, allowing a memory\-efficient representation of Hi\-C data in R. The \`HiCExperiment\` class stores the Hi\-C contacts parsed from local contact matrix files. \`HiCExperiment\` instances can be further investigated in R using the \`HiContacts\` analysis package.


.. conda:package:: bioconductor-hicexperiment

   |downloads_bioconductor-hicexperiment| |docker_bioconductor-hicexperiment|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocio: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends r-strawr: 
   :depends r-vroom: 
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

      mamba install bioconductor-hicexperiment

   and update with::

      mamba update bioconductor-hicexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicexperiment:<tag>

   (see `bioconductor-hicexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicexperiment
   :alt:   (downloads)
.. |docker_bioconductor-hicexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-hicexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicexperiment
.. _`bioconductor-hicexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-hicexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicexperiment";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicexperiment/README.html