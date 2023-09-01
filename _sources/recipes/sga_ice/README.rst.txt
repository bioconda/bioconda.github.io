:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sga_ice'
.. highlight: bash

sga_ice
=======

.. conda:recipe:: sga_ice
   :replaces_section_title:
   :noindex:

   Iterative error correction of long 250 or 300 bp Illumina reads minimizes the total amount of erroneous reads\, which improves contig assembly 


   :homepage: https://github.com/hillerlab/IterativeErrorCorrection
   :license: MIT license
   :recipe: /`sga_ice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga_ice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga_ice/meta.yaml>`_

   


.. conda:package:: sga_ice

   |downloads_sga_ice| |docker_sga_ice|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends python: 
   :depends sga: 
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

      mamba install sga_ice

   and update with::

      mamba update sga_ice

  To create a new environment, run::

      mamba create --name myenvname sga_ice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sga_ice:<tag>

   (see `sga_ice/tags`_ for valid values for ``<tag>``)


.. |downloads_sga_ice| image:: https://img.shields.io/conda/dn/bioconda/sga_ice.svg?style=flat
   :target: https://anaconda.org/bioconda/sga_ice
   :alt:   (downloads)
.. |docker_sga_ice| image:: https://quay.io/repository/biocontainers/sga_ice/status
   :target: https://quay.io/repository/biocontainers/sga_ice
.. _`sga_ice/tags`: https://quay.io/repository/biocontainers/sga_ice?tab=tags


.. raw:: html

    <script>
        var package = "sga_ice";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga_ice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga_ice/README.html