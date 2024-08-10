:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poolsnp'
.. highlight: bash

poolsnp
=======

.. conda:recipe:: poolsnp
   :replaces_section_title:
   :noindex:

   PoolSNP is a heuristic SNP caller\, which uses an MPILEUP file and a reference genome in FASTA format as inputs.

   :homepage: https://github.com/capoony/PoolSNP
   :license: Apache-2.0
   :recipe: /`poolsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poolsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poolsnp/meta.yaml>`_

   


.. conda:package:: poolsnp

   |downloads_poolsnp| |docker_poolsnp|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends parallel: 
   :depends python: 
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

      mamba install poolsnp

   and update with::

      mamba update poolsnp

  To create a new environment, run::

      mamba create --name myenvname poolsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poolsnp:<tag>

   (see `poolsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_poolsnp| image:: https://img.shields.io/conda/dn/bioconda/poolsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/poolsnp
   :alt:   (downloads)
.. |docker_poolsnp| image:: https://quay.io/repository/biocontainers/poolsnp/status
   :target: https://quay.io/repository/biocontainers/poolsnp
.. _`poolsnp/tags`: https://quay.io/repository/biocontainers/poolsnp?tab=tags


.. raw:: html

    <script>
        var package = "poolsnp";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poolsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poolsnp/README.html