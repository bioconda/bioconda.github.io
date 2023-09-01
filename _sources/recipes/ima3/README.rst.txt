:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ima3'
.. highlight: bash

ima3
====

.. conda:recipe:: ima3
   :replaces_section_title:
   :noindex:

   IMa3 can be used to solve a fundamental problem in evolutionary genetics\, which is to jointly consider phylogenetic history and pouplation genetic history\, including gene exchange. IMa3 can be used to estimate the rooted phylogenetic tree for multiple populations\, and does so while integrating over all possible Isolation\-with\-Migration models

   :homepage: https://github.com/jodyhey/IMa3
   :license: GPL (>= 3)
   :recipe: /`ima3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ima3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ima3/meta.yaml>`_

   


.. conda:package:: ima3

   |downloads_ima3| |docker_ima3|

   :versions:
      
      

      ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=1.8``
   :depends openmpi: ``>=4.1.5,<5.0a0``
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

      mamba install ima3

   and update with::

      mamba update ima3

  To create a new environment, run::

      mamba create --name myenvname ima3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ima3:<tag>

   (see `ima3/tags`_ for valid values for ``<tag>``)


.. |downloads_ima3| image:: https://img.shields.io/conda/dn/bioconda/ima3.svg?style=flat
   :target: https://anaconda.org/bioconda/ima3
   :alt:   (downloads)
.. |docker_ima3| image:: https://quay.io/repository/biocontainers/ima3/status
   :target: https://quay.io/repository/biocontainers/ima3
.. _`ima3/tags`: https://quay.io/repository/biocontainers/ima3?tab=tags


.. raw:: html

    <script>
        var package = "ima3";
        var versions = ["1.13","1.13","1.12","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ima3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ima3/README.html