:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simwalk2'
.. highlight: bash

simwalk2
========

.. conda:recipe:: simwalk2
   :replaces_section_title:
   :noindex:

   Stochastic Statistical Analysis of Qualitative Traits

   :homepage: http://www.genetics.ucla.edu/software/
   :license: INDIVIDUAL
   :recipe: /`simwalk2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk2/meta.yaml>`_

   


.. conda:package:: simwalk2

   |downloads_simwalk2| |docker_simwalk2|

   :versions:
      
      

      ``2.91-7``,  ``2.91-6``,  ``2.91-5``,  ``2.91-4``,  ``2.91-3``,  ``2.91-2``,  ``2.91-1``,  ``2.91-0``

      

   
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
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

      mamba install simwalk2

   and update with::

      mamba update simwalk2

  To create a new environment, run::

      mamba create --name myenvname simwalk2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simwalk2:<tag>

   (see `simwalk2/tags`_ for valid values for ``<tag>``)


.. |downloads_simwalk2| image:: https://img.shields.io/conda/dn/bioconda/simwalk2.svg?style=flat
   :target: https://anaconda.org/bioconda/simwalk2
   :alt:   (downloads)
.. |docker_simwalk2| image:: https://quay.io/repository/biocontainers/simwalk2/status
   :target: https://quay.io/repository/biocontainers/simwalk2
.. _`simwalk2/tags`: https://quay.io/repository/biocontainers/simwalk2?tab=tags


.. raw:: html

    <script>
        var package = "simwalk2";
        var versions = ["2.91","2.91","2.91","2.91","2.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simwalk2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simwalk2/README.html