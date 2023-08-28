:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marge'
.. highlight: bash

marge
=====

.. conda:recipe:: marge
   :replaces_section_title:
   :noindex:

   Model\-based Analysis of Regulation of Gene Expression

   :homepage: http://cistrome.org/MARGE
   :license: MIT / MIT
   :recipe: /`marge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge/meta.yaml>`_

   


.. conda:package:: marge

   |downloads_marge| |docker_marge|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends hdf5: 
   :depends numpy: 
   :depends pytables: 
   :depends python: ``>3``
   :depends scikit-learn: 
   :depends scipy: 
   :depends snakemake: ``3.*``
   :depends twobitreader: 
   :depends ucsc-bedclip: 
   :depends ucsc-bigwigaverageoverbed: 
   :depends ucsc-bigwigsummary: 
   :depends ucsc-bigwigtobedgraph: 
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

      mamba install marge

   and update with::

      mamba update marge

  To create a new environment, run::

      mamba create --name myenvname marge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/marge:<tag>

   (see `marge/tags`_ for valid values for ``<tag>``)


.. |downloads_marge| image:: https://img.shields.io/conda/dn/bioconda/marge.svg?style=flat
   :target: https://anaconda.org/bioconda/marge
   :alt:   (downloads)
.. |docker_marge| image:: https://quay.io/repository/biocontainers/marge/status
   :target: https://quay.io/repository/biocontainers/marge
.. _`marge/tags`: https://quay.io/repository/biocontainers/marge?tab=tags


.. raw:: html

    <script>
        var package = "marge";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marge/README.html