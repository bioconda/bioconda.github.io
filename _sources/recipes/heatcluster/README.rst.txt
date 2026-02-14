:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heatcluster'
.. highlight: bash

heatcluster
===========

.. conda:recipe:: heatcluster
   :replaces_section_title:
   :noindex:

   A Python tool for visualizing SNP matrices with hierarchical clustering

   :homepage: https://github.com/DrB-S/heatcluster
   :developer docs: https://github.com/erinyoung/heatcluster
   :license: GPL-3.0-only
   :recipe: /`heatcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heatcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heatcluster/meta.yaml>`_

   


.. conda:package:: heatcluster

   |downloads_heatcluster| |docker_heatcluster|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends biopython: 
   :depends fastcluster: 
   :depends matplotlib-base: ``>=3.4.0``
   :depends numpy: ``>=1.20.0``
   :depends pandas: ``>=1.3.0``
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: ``>=1.7.0``
   :depends seaborn: ``>=0.11.0``
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

      mamba install heatcluster

   and update with::

      mamba update heatcluster

  To create a new environment, run::

      mamba create --name myenvname heatcluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/heatcluster:<tag>

   (see `heatcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_heatcluster| image:: https://img.shields.io/conda/dn/bioconda/heatcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/heatcluster
   :alt:   (downloads)
.. |docker_heatcluster| image:: https://quay.io/repository/biocontainers/heatcluster/status
   :target: https://quay.io/repository/biocontainers/heatcluster
.. _`heatcluster/tags`: https://quay.io/repository/biocontainers/heatcluster?tab=tags


.. raw:: html

    <script>
        var package = "heatcluster";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heatcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heatcluster/README.html