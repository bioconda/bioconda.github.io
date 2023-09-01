:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamroaster'
.. highlight: bash

hamroaster
==========

.. conda:recipe:: hamroaster
   :replaces_section_title:
   :noindex:

   An analysis pipeline to compare the output of different AMR detection tools and provide metrics of their performance

   :homepage: https://github.com/ewissel/hAMRoaster
   :license: CC0
   :recipe: /`hamroaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster/meta.yaml>`_

   


.. conda:package:: hamroaster

   |downloads_hamroaster| |docker_hamroaster|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``

      

   
   :depends numpy: 
   :depends pandas: 
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

      mamba install hamroaster

   and update with::

      mamba update hamroaster

  To create a new environment, run::

      mamba create --name myenvname hamroaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hamroaster:<tag>

   (see `hamroaster/tags`_ for valid values for ``<tag>``)


.. |downloads_hamroaster| image:: https://img.shields.io/conda/dn/bioconda/hamroaster.svg?style=flat
   :target: https://anaconda.org/bioconda/hamroaster
   :alt:   (downloads)
.. |docker_hamroaster| image:: https://quay.io/repository/biocontainers/hamroaster/status
   :target: https://quay.io/repository/biocontainers/hamroaster
.. _`hamroaster/tags`: https://quay.io/repository/biocontainers/hamroaster?tab=tags


.. raw:: html

    <script>
        var package = "hamroaster";
        var versions = ["2.0","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamroaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamroaster/README.html