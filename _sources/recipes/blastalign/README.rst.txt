:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastalign'
.. highlight: bash

blastalign
==========

.. conda:recipe:: blastalign
   :replaces_section_title:
   :noindex:

   BlastAlign uses NCBI Blast to align nucleotide sequences that have large indels or are otherwise difficult to align globally.

   :homepage: http://evolve.zoo.ox.ac.uk/Evolve/Blastalign.html
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`blastalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign/meta.yaml>`_

   


.. conda:package:: blastalign

   |downloads_blastalign| |docker_blastalign|

   :versions:
      
      

      ``1.4-8``,  ``1.4-7``,  ``1.4-6``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends blast-legacy: 
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends python: 
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

      mamba install blastalign

   and update with::

      mamba update blastalign

  To create a new environment, run::

      mamba create --name myenvname blastalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blastalign:<tag>

   (see `blastalign/tags`_ for valid values for ``<tag>``)


.. |downloads_blastalign| image:: https://img.shields.io/conda/dn/bioconda/blastalign.svg?style=flat
   :target: https://anaconda.org/bioconda/blastalign
   :alt:   (downloads)
.. |docker_blastalign| image:: https://quay.io/repository/biocontainers/blastalign/status
   :target: https://quay.io/repository/biocontainers/blastalign
.. _`blastalign/tags`: https://quay.io/repository/biocontainers/blastalign?tab=tags


.. raw:: html

    <script>
        var package = "blastalign";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastalign/README.html