:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplcretrainer'
.. highlight: bash

deeplcretrainer
===============

.. conda:recipe:: deeplcretrainer
   :replaces_section_title:
   :noindex:

   Evaluating DeepLC performance and retraining prediction models.

   :homepage: https://github.com/RobbinBouwmeester/DeepLCRetrainer
   :license: Apache-2.0
   :recipe: /`deeplcretrainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer/meta.yaml>`_

   


.. conda:package:: deeplcretrainer

   |downloads_deeplcretrainer| |docker_deeplcretrainer|

   :versions:
      
      

      ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.19-0``,  ``0.1.17-0``

      

   
   :depends python: 
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

      mamba install deeplcretrainer

   and update with::

      mamba update deeplcretrainer

  To create a new environment, run::

      mamba create --name myenvname deeplcretrainer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deeplcretrainer:<tag>

   (see `deeplcretrainer/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplcretrainer| image:: https://img.shields.io/conda/dn/bioconda/deeplcretrainer.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplcretrainer
   :alt:   (downloads)
.. |docker_deeplcretrainer| image:: https://quay.io/repository/biocontainers/deeplcretrainer/status
   :target: https://quay.io/repository/biocontainers/deeplcretrainer
.. _`deeplcretrainer/tags`: https://quay.io/repository/biocontainers/deeplcretrainer?tab=tags


.. raw:: html

    <script>
        var package = "deeplcretrainer";
        var versions = ["0.1.22","0.1.21","0.1.19","0.1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplcretrainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplcretrainer/README.html