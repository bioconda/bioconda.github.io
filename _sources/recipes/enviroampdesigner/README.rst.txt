:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enviroampdesigner'
.. highlight: bash

enviroampdesigner
=================

.. conda:recipe:: enviroampdesigner
   :replaces_section_title:
   :noindex:

   Tool for training model and classifying reads from environmental ONT amplicon sequencing.

   :homepage: https://github.com/AntonS-bio/EnviroAmpDesigner
   :documentation: https://github.com/AntonS-bio/EnviroAmpDesigner/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`enviroampdesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enviroampdesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enviroampdesigner/meta.yaml>`_

   Tool for training model and classifying reads from environmental ONT amplicon sequencing. 



.. conda:package:: enviroampdesigner

   |downloads_enviroampdesigner| |docker_enviroampdesigner|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: ``>=1.85``
   :depends blast: ``>=2.16.0``
   :depends mafft: ``>=7.520``
   :depends minimap2: 
   :depends numpy: ``>=1.20.*``
   :depends pandas: ``>=2.0.0``
   :depends primer3-py: ``>=2.0.*``
   :depends python: ``>=3.12``
   :depends tqdm: ``>=4.66.*``
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

      mamba install enviroampdesigner

   and update with::

      mamba update enviroampdesigner

  To create a new environment, run::

      mamba create --name myenvname enviroampdesigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enviroampdesigner:<tag>

   (see `enviroampdesigner/tags`_ for valid values for ``<tag>``)


.. |downloads_enviroampdesigner| image:: https://img.shields.io/conda/dn/bioconda/enviroampdesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/enviroampdesigner
   :alt:   (downloads)
.. |docker_enviroampdesigner| image:: https://quay.io/repository/biocontainers/enviroampdesigner/status
   :target: https://quay.io/repository/biocontainers/enviroampdesigner
.. _`enviroampdesigner/tags`: https://quay.io/repository/biocontainers/enviroampdesigner?tab=tags


.. raw:: html

    <script>
        var package = "enviroampdesigner";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enviroampdesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enviroampdesigner/README.html