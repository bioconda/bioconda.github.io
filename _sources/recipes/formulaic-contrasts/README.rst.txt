:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'formulaic-contrasts'
.. highlight: bash

formulaic-contrasts
===================

.. conda:recipe:: formulaic-contrasts
   :replaces_section_title:
   :noindex:

   Build contrasts for models defined with formulaic

   :homepage: https://github.com/scverse/formulaic-contrasts
   :documentation: https://formulaic-contrasts.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`formulaic-contrasts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/formulaic-contrasts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/formulaic-contrasts/meta.yaml>`_

   


.. conda:package:: formulaic-contrasts

   |downloads_formulaic-contrasts| |docker_formulaic-contrasts|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends formulaic: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends session-info: 
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

      mamba install formulaic-contrasts

   and update with::

      mamba update formulaic-contrasts

  To create a new environment, run::

      mamba create --name myenvname formulaic-contrasts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/formulaic-contrasts:<tag>

   (see `formulaic-contrasts/tags`_ for valid values for ``<tag>``)


.. |downloads_formulaic-contrasts| image:: https://img.shields.io/conda/dn/bioconda/formulaic-contrasts.svg?style=flat
   :target: https://anaconda.org/bioconda/formulaic-contrasts
   :alt:   (downloads)
.. |docker_formulaic-contrasts| image:: https://quay.io/repository/biocontainers/formulaic-contrasts/status
   :target: https://quay.io/repository/biocontainers/formulaic-contrasts
.. _`formulaic-contrasts/tags`: https://quay.io/repository/biocontainers/formulaic-contrasts?tab=tags


.. raw:: html

    <script>
        var package = "formulaic-contrasts";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/formulaic-contrasts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/formulaic-contrasts/README.html