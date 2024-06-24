:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dodge'
.. highlight: bash

dodge
=====

.. conda:recipe:: dodge
   :replaces_section_title:
   :noindex:

   Dynamic Outbreak Detection for Genomic Epidemiology. Automated point source bacterial outbreak detection using cumulative long term genomic surveillance.

   :homepage: https://github.com/LanLab/dodge
   :license: GPL-3.0-or-later
   :recipe: /`dodge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dodge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dodge/meta.yaml>`_

   


.. conda:package:: dodge

   |downloads_dodge| |docker_dodge|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends pandas: ``>=1.3``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.0``
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

      mamba install dodge

   and update with::

      mamba update dodge

  To create a new environment, run::

      mamba create --name myenvname dodge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dodge:<tag>

   (see `dodge/tags`_ for valid values for ``<tag>``)


.. |downloads_dodge| image:: https://img.shields.io/conda/dn/bioconda/dodge.svg?style=flat
   :target: https://anaconda.org/bioconda/dodge
   :alt:   (downloads)
.. |docker_dodge| image:: https://quay.io/repository/biocontainers/dodge/status
   :target: https://quay.io/repository/biocontainers/dodge
.. _`dodge/tags`: https://quay.io/repository/biocontainers/dodge?tab=tags


.. raw:: html

    <script>
        var package = "dodge";
        var versions = ["1.0.1","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dodge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dodge/README.html