:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metdatamodel'
.. highlight: bash

metdatamodel
============

.. conda:recipe:: metdatamodel
   :replaces_section_title:
   :noindex:

   Data models for metabolomics

   :homepage: https://github.com/shuzhao-li/metDataModel
   :license: BSD-3-Clause
   :recipe: /`metdatamodel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metdatamodel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metdatamodel/meta.yaml>`_

   


.. conda:package:: metdatamodel

   |downloads_metdatamodel| |docker_metdatamodel|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.5-0``,  ``0.4.14-0``

      

   
   :depends python: ``>=3.5``
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

      mamba install metdatamodel

   and update with::

      mamba update metdatamodel

  To create a new environment, run::

      mamba create --name myenvname metdatamodel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metdatamodel:<tag>

   (see `metdatamodel/tags`_ for valid values for ``<tag>``)


.. |downloads_metdatamodel| image:: https://img.shields.io/conda/dn/bioconda/metdatamodel.svg?style=flat
   :target: https://anaconda.org/bioconda/metdatamodel
   :alt:   (downloads)
.. |docker_metdatamodel| image:: https://quay.io/repository/biocontainers/metdatamodel/status
   :target: https://quay.io/repository/biocontainers/metdatamodel
.. _`metdatamodel/tags`: https://quay.io/repository/biocontainers/metdatamodel?tab=tags


.. raw:: html

    <script>
        var package = "metdatamodel";
        var versions = ["0.6.0","0.5.5","0.4.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metdatamodel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metdatamodel/README.html