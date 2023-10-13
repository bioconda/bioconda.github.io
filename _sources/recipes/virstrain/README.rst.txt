:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virstrain'
.. highlight: bash

virstrain
=========

.. conda:recipe:: virstrain
   :replaces_section_title:
   :noindex:

   An RNA\/DNA virus strain\-level identification tool for short reads.

   :homepage: https://github.com/liaoherui/VirStrain
   :license: MIT / MIT
   :recipe: /`virstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virstrain/meta.yaml>`_

   


.. conda:package:: virstrain

   |downloads_virstrain| |docker_virstrain|

   :versions:
      
      

      ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10-0``,  ``1.9-0``

      

   
   :depends biopython: ``1.74``
   :depends matplotlib-base: ``3.1.2``
   :depends networkx: ``2.4``
   :depends numpy: ``1.17.3``
   :depends pandas: ``1.0.1``
   :depends plotly: ``3.10.0``
   :depends python: ``3.7.3``
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

      mamba install virstrain

   and update with::

      mamba update virstrain

  To create a new environment, run::

      mamba create --name myenvname virstrain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virstrain:<tag>

   (see `virstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_virstrain| image:: https://img.shields.io/conda/dn/bioconda/virstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/virstrain
   :alt:   (downloads)
.. |docker_virstrain| image:: https://quay.io/repository/biocontainers/virstrain/status
   :target: https://quay.io/repository/biocontainers/virstrain
.. _`virstrain/tags`: https://quay.io/repository/biocontainers/virstrain?tab=tags


.. raw:: html

    <script>
        var package = "virstrain";
        var versions = ["1.14","1.13","1.12","1.11","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virstrain/README.html