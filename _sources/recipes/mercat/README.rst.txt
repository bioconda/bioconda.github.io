:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mercat'
.. highlight: bash

mercat
======

.. conda:recipe:: mercat
   :replaces_section_title:
   :noindex:

   Mercat\: a versatile counter and diversity estimator for data base independent property analysis obtained from whole community sequencing data.

   :homepage: https://github.com/pnnl/mercat
   :license: BSD / BSD
   :recipe: /`mercat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat/meta.yaml>`_

   


.. conda:package:: mercat

   |downloads_mercat| |docker_mercat|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends dask: 
   :depends humanize: 
   :depends joblib: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends prodigal: 
   :depends psutil: 
   :depends python: 
   :depends scikit-bio: ``0.2.3``
   :depends trimmomatic: 
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

      mamba install mercat

   and update with::

      mamba update mercat

  To create a new environment, run::

      mamba create --name myenvname mercat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mercat:<tag>

   (see `mercat/tags`_ for valid values for ``<tag>``)


.. |downloads_mercat| image:: https://img.shields.io/conda/dn/bioconda/mercat.svg?style=flat
   :target: https://anaconda.org/bioconda/mercat
   :alt:   (downloads)
.. |docker_mercat| image:: https://quay.io/repository/biocontainers/mercat/status
   :target: https://quay.io/repository/biocontainers/mercat
.. _`mercat/tags`: https://quay.io/repository/biocontainers/mercat?tab=tags


.. raw:: html

    <script>
        var package = "mercat";
        var versions = ["0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mercat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mercat/README.html