:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pancake'
.. highlight: bash

pancake
=======

.. conda:recipe:: pancake
   :replaces_section_title:
   :noindex:

   A Data Structure for Pangenomes \-\- Identification of Singletons and Core Regions Dependent on Pairwise Sequence Similarities

   :homepage: https://bitbucket.org/CorinnaErnst/pancake
   :license: MIT / MIT License
   :recipe: /`pancake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake/meta.yaml>`_

   


.. conda:package:: pancake

   |downloads_pancake| |docker_pancake|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install pancake

   and update with::

      mamba update pancake

  To create a new environment, run::

      mamba create --name myenvname pancake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pancake:<tag>

   (see `pancake/tags`_ for valid values for ``<tag>``)


.. |downloads_pancake| image:: https://img.shields.io/conda/dn/bioconda/pancake.svg?style=flat
   :target: https://anaconda.org/bioconda/pancake
   :alt:   (downloads)
.. |docker_pancake| image:: https://quay.io/repository/biocontainers/pancake/status
   :target: https://quay.io/repository/biocontainers/pancake
.. _`pancake/tags`: https://quay.io/repository/biocontainers/pancake?tab=tags


.. raw:: html

    <script>
        var package = "pancake";
        var versions = ["1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pancake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pancake/README.html