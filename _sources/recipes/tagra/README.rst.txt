:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagra'
.. highlight: bash

tagra
=====

.. conda:recipe:: tagra
   :replaces_section_title:
   :noindex:

   TaGra\: TAbular data preprocessing to GRAph representation.

   :homepage: https://github.com/davidetorre92/TaGra
   :license: MIT / MIT
   :recipe: /`tagra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagra/meta.yaml>`_

   


.. conda:package:: tagra

   |downloads_tagra| |docker_tagra|

   :versions:
      
      

      ``0.2.5-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.10``
   :depends scikit-learn: 
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

      mamba install tagra

   and update with::

      mamba update tagra

  To create a new environment, run::

      mamba create --name myenvname tagra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tagra:<tag>

   (see `tagra/tags`_ for valid values for ``<tag>``)


.. |downloads_tagra| image:: https://img.shields.io/conda/dn/bioconda/tagra.svg?style=flat
   :target: https://anaconda.org/bioconda/tagra
   :alt:   (downloads)
.. |docker_tagra| image:: https://quay.io/repository/biocontainers/tagra/status
   :target: https://quay.io/repository/biocontainers/tagra
.. _`tagra/tags`: https://quay.io/repository/biocontainers/tagra?tab=tags


.. raw:: html

    <script>
        var package = "tagra";
        var versions = ["0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagra/README.html