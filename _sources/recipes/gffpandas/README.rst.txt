:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffpandas'
.. highlight: bash

gffpandas
=========

.. conda:recipe:: gffpandas
   :replaces_section_title:
   :noindex:

   Parse GFF3 into Pandas dataframes

   :homepage: https://github.com/foerstner-lab/gffpandas
   :documentation: https://gffpandas.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`gffpandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffpandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffpandas/meta.yaml>`_

   


.. conda:package:: gffpandas

   |downloads_gffpandas| |docker_gffpandas|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends pandas: 
   :depends python: ``>=3``
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

      mamba install gffpandas

   and update with::

      mamba update gffpandas

  To create a new environment, run::

      mamba create --name myenvname gffpandas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gffpandas:<tag>

   (see `gffpandas/tags`_ for valid values for ``<tag>``)


.. |downloads_gffpandas| image:: https://img.shields.io/conda/dn/bioconda/gffpandas.svg?style=flat
   :target: https://anaconda.org/bioconda/gffpandas
   :alt:   (downloads)
.. |docker_gffpandas| image:: https://quay.io/repository/biocontainers/gffpandas/status
   :target: https://quay.io/repository/biocontainers/gffpandas
.. _`gffpandas/tags`: https://quay.io/repository/biocontainers/gffpandas?tab=tags


.. raw:: html

    <script>
        var package = "gffpandas";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffpandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffpandas/README.html