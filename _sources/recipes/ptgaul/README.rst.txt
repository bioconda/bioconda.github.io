:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptgaul'
.. highlight: bash

ptgaul
======

.. conda:recipe:: ptgaul
   :replaces_section_title:
   :noindex:

   Plastid Genome Assembly Using long\-read data \(ptGAUL\)

   :homepage: https://github.com/Bean061/ptgaul
   :license: MIT
   :recipe: /`ptgaul <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptgaul>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptgaul/meta.yaml>`_

   


.. conda:package:: ptgaul

   |downloads_ptgaul| |docker_ptgaul|

   :versions:
      
      

      ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      

   
   :depends assembly-stats: 
   :depends biopython: 
   :depends flye: ``2.7-0.*``
   :depends minimap2: 
   :depends python: ``>=3``
   :depends seqkit: 
   :depends seqtk: 
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

      mamba install ptgaul

   and update with::

      mamba update ptgaul

  To create a new environment, run::

      mamba create --name myenvname ptgaul

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ptgaul:<tag>

   (see `ptgaul/tags`_ for valid values for ``<tag>``)


.. |downloads_ptgaul| image:: https://img.shields.io/conda/dn/bioconda/ptgaul.svg?style=flat
   :target: https://anaconda.org/bioconda/ptgaul
   :alt:   (downloads)
.. |docker_ptgaul| image:: https://quay.io/repository/biocontainers/ptgaul/status
   :target: https://quay.io/repository/biocontainers/ptgaul
.. _`ptgaul/tags`: https://quay.io/repository/biocontainers/ptgaul?tab=tags


.. raw:: html

    <script>
        var package = "ptgaul";
        var versions = ["1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptgaul/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptgaul/README.html