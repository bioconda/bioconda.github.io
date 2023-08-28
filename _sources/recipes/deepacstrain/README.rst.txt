:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepacstrain'
.. highlight: bash

deepacstrain
============

.. conda:recipe:: deepacstrain
   :replaces_section_title:
   :noindex:

   Predicting pathogenic potentials of novel strains of known bacterial species.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :developer docs: https://gitlab.com/JakubBartoszewicz/deepac-strain
   :license: MIT / MIT
   :recipe: /`deepacstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacstrain/meta.yaml>`_

   


.. conda:package:: deepacstrain

   |downloads_deepacstrain| |docker_deepacstrain|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends deepac: ``>=0.11.0``
   :depends numpy: ``>=1.18.1``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.22.1``
   :depends tensorflow: ``>=2.1``
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

      mamba install deepacstrain

   and update with::

      mamba update deepacstrain

  To create a new environment, run::

      mamba create --name myenvname deepacstrain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepacstrain:<tag>

   (see `deepacstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_deepacstrain| image:: https://img.shields.io/conda/dn/bioconda/deepacstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/deepacstrain
   :alt:   (downloads)
.. |docker_deepacstrain| image:: https://quay.io/repository/biocontainers/deepacstrain/status
   :target: https://quay.io/repository/biocontainers/deepacstrain
.. _`deepacstrain/tags`: https://quay.io/repository/biocontainers/deepacstrain?tab=tags


.. raw:: html

    <script>
        var package = "deepacstrain";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepacstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepacstrain/README.html