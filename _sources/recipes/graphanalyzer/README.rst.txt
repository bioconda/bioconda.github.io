:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphanalyzer'
.. highlight: bash

graphanalyzer
=============

.. conda:recipe:: graphanalyzer
   :replaces_section_title:
   :noindex:

   A tool to automatically interpret the outputs generated by vConTACT2 when using the INPHARED database

   :homepage: https://github.com/lazzarigioele/graphanalyzer
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`graphanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphanalyzer/meta.yaml>`_

   


.. conda:package:: graphanalyzer

   |downloads_graphanalyzer| |docker_graphanalyzer|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5-0``,  ``1.4-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends holoviews: 
   :depends hvplot: 
   :depends jinja2: ``<3.1``
   :depends networkx: 
   :depends openpyxl: 
   :depends pandas: ``>=1.0``
   :depends plotly: 
   :depends pygraphviz: ``>=1.6,<=1.7``
   :depends python: ``>=3.7``
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

      mamba install graphanalyzer

   and update with::

      mamba update graphanalyzer

  To create a new environment, run::

      mamba create --name myenvname graphanalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphanalyzer:<tag>

   (see `graphanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_graphanalyzer| image:: https://img.shields.io/conda/dn/bioconda/graphanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/graphanalyzer
   :alt:   (downloads)
.. |docker_graphanalyzer| image:: https://quay.io/repository/biocontainers/graphanalyzer/status
   :target: https://quay.io/repository/biocontainers/graphanalyzer
.. _`graphanalyzer/tags`: https://quay.io/repository/biocontainers/graphanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "graphanalyzer";
        var versions = ["1.6.0","1.5.1","1.5.1","1.5","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphanalyzer/README.html