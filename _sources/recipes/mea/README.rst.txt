:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mea'
.. highlight: bash

mea
===

.. conda:recipe:: mea
   :replaces_section_title:
   :noindex:

   Mea was developed as part of the lab class \"Bioinformatik von RNA\- und Proteinstrukturen \(Praktikum\, Modul 10\-202\-2208\)\". The package predicts maximum expected accuracy \(MEA\) RNA secondary structures from dot plots of RNAs while correcting the score in dependence of base pair span. Furthermore\, it provides tools to evaluate predictions and optimize parameters.

   :homepage: http://www.bioinf.uni-leipzig.de/Software/mea/
   :license: GPLv3
   :recipe: /`mea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mea/meta.yaml>`_

   


.. conda:package:: mea

   |downloads_mea| |docker_mea|

   :versions:
      
      

      ``0.6.4-9``,  ``0.6.4-8``,  ``0.6.4-7``,  ``0.6.4-6``,  ``0.6.4-5``,  ``0.6.4-4``,  ``0.6.4-3``,  ``0.6.4-2``,  ``0.6.4-1``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install mea

   and update with::

      mamba update mea

  To create a new environment, run::

      mamba create --name myenvname mea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mea:<tag>

   (see `mea/tags`_ for valid values for ``<tag>``)


.. |downloads_mea| image:: https://img.shields.io/conda/dn/bioconda/mea.svg?style=flat
   :target: https://anaconda.org/bioconda/mea
   :alt:   (downloads)
.. |docker_mea| image:: https://quay.io/repository/biocontainers/mea/status
   :target: https://quay.io/repository/biocontainers/mea
.. _`mea/tags`: https://quay.io/repository/biocontainers/mea?tab=tags


.. raw:: html

    <script>
        var package = "mea";
        var versions = ["0.6.4","0.6.4","0.6.4","0.6.4","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mea/README.html