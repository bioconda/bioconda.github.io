:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustergrammer'
.. highlight: bash

clustergrammer
==============

.. conda:recipe:: clustergrammer
   :replaces_section_title:
   :noindex:

   A python module for the Clustergrammer visualization project

   :homepage: https://github.com/MaayanLab/clustergrammer-py
   :license: MIT / MIT license
   :recipe: /`clustergrammer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer/meta.yaml>`_

   


.. conda:package:: clustergrammer

   |downloads_clustergrammer| |docker_clustergrammer|

   :versions:
      
      

      ``1.13.6-3``,  ``1.13.6-2``,  ``1.13.6-1``,  ``1.13.6-0``,  ``1.13.5-2``,  ``1.13.5-1``,  ``1.13.5-0``

      

   
   :depends numpy: 
   :depends pandas: ``<1.0.0``
   :depends python: 
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

      mamba install clustergrammer

   and update with::

      mamba update clustergrammer

  To create a new environment, run::

      mamba create --name myenvname clustergrammer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clustergrammer:<tag>

   (see `clustergrammer/tags`_ for valid values for ``<tag>``)


.. |downloads_clustergrammer| image:: https://img.shields.io/conda/dn/bioconda/clustergrammer.svg?style=flat
   :target: https://anaconda.org/bioconda/clustergrammer
   :alt:   (downloads)
.. |docker_clustergrammer| image:: https://quay.io/repository/biocontainers/clustergrammer/status
   :target: https://quay.io/repository/biocontainers/clustergrammer
.. _`clustergrammer/tags`: https://quay.io/repository/biocontainers/clustergrammer?tab=tags


.. raw:: html

    <script>
        var package = "clustergrammer";
        var versions = ["1.13.6","1.13.6","1.13.6","1.13.6","1.13.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustergrammer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustergrammer/README.html