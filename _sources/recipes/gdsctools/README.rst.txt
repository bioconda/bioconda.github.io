:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdsctools'
.. highlight: bash

gdsctools
=========

.. conda:recipe:: gdsctools
   :replaces_section_title:
   :noindex:

   Set of tools and pipelines to analyse GDSC data \(cancerrxgene.org\)

   :homepage: http://pypi.python.org/pypi/gdsctools
   :license: BSD / BSD
   :recipe: /`gdsctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools/meta.yaml>`_

   


.. conda:package:: gdsctools

   |downloads_gdsctools| |docker_gdsctools|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``0.20.1-0``,  ``0.19.0-0``

      

   
   :depends biokit: ``0.4.1``
   :depends colorlog: 
   :depends colormap: ``1.0.1``
   :depends easydev: ``>=0.9.34``
   :depends jinja2: 
   :depends matplotlib: ``>=1.4.3``
   :depends numexpr: 
   :depends numpy: 
   :depends pandas: ``0.20.1``
   :depends python: 
   :depends reports: ``0.3.1``
   :depends scikit-learn: ``0.18.2``
   :depends scipy: ``0.19.1``
   :depends statsmodels: ``0.8.0``
   :depends xlrd: 
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

      mamba install gdsctools

   and update with::

      mamba update gdsctools

  To create a new environment, run::

      mamba create --name myenvname gdsctools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gdsctools:<tag>

   (see `gdsctools/tags`_ for valid values for ``<tag>``)


.. |downloads_gdsctools| image:: https://img.shields.io/conda/dn/bioconda/gdsctools.svg?style=flat
   :target: https://anaconda.org/bioconda/gdsctools
   :alt:   (downloads)
.. |docker_gdsctools| image:: https://quay.io/repository/biocontainers/gdsctools/status
   :target: https://quay.io/repository/biocontainers/gdsctools
.. _`gdsctools/tags`: https://quay.io/repository/biocontainers/gdsctools?tab=tags


.. raw:: html

    <script>
        var package = "gdsctools";
        var versions = ["1.0.1","1.0.1","0.20.1","0.19.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdsctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdsctools/README.html