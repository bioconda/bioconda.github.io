:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'favites_lite'
.. highlight: bash

favites_lite
============

.. conda:recipe:: favites_lite
   :replaces_section_title:
   :noindex:

   FAVITES\-Lite\: A lightweight framework for viral transmission and evolution simulation

   :homepage: https://github.com/niemasd/FAVITES-Lite
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`favites_lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/favites_lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/favites_lite/meta.yaml>`_

   


.. conda:package:: favites_lite

   |downloads_favites_lite| |docker_favites_lite|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends coatran: 
   :depends gemf_favites: 
   :depends niemagraphgen: 
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends seq-gen: 
   :depends treesap: 
   :depends treeswift: 
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

      mamba install favites_lite

   and update with::

      mamba update favites_lite

  To create a new environment, run::

      mamba create --name myenvname favites_lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/favites_lite:<tag>

   (see `favites_lite/tags`_ for valid values for ``<tag>``)


.. |downloads_favites_lite| image:: https://img.shields.io/conda/dn/bioconda/favites_lite.svg?style=flat
   :target: https://anaconda.org/bioconda/favites_lite
   :alt:   (downloads)
.. |docker_favites_lite| image:: https://quay.io/repository/biocontainers/favites_lite/status
   :target: https://quay.io/repository/biocontainers/favites_lite
.. _`favites_lite/tags`: https://quay.io/repository/biocontainers/favites_lite?tab=tags


.. raw:: html

    <script>
        var package = "favites_lite";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/favites_lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/favites_lite/README.html