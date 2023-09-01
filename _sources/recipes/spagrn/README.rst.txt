:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spagrn'
.. highlight: bash

spagrn
======

.. conda:recipe:: spagrn
   :replaces_section_title:
   :noindex:

   A comprehensive tool to infer TF\-centered\, spatial gene regulatory networks for the spatially resolved transcriptomics \(SRT\) data.

   :homepage: https://github.com/iprada/Circle-Map
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`spagrn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spagrn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spagrn/meta.yaml>`_

   


.. conda:package:: spagrn

   |downloads_spagrn| |docker_spagrn|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends anndata: 
   :depends dask: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``<2.0.0,>=1.3.4``
   :depends python: ``>=3.8,<3.11``
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install spagrn

   and update with::

      mamba update spagrn

  To create a new environment, run::

      mamba create --name myenvname spagrn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spagrn:<tag>

   (see `spagrn/tags`_ for valid values for ``<tag>``)


.. |downloads_spagrn| image:: https://img.shields.io/conda/dn/bioconda/spagrn.svg?style=flat
   :target: https://anaconda.org/bioconda/spagrn
   :alt:   (downloads)
.. |docker_spagrn| image:: https://quay.io/repository/biocontainers/spagrn/status
   :target: https://quay.io/repository/biocontainers/spagrn
.. _`spagrn/tags`: https://quay.io/repository/biocontainers/spagrn?tab=tags


.. raw:: html

    <script>
        var package = "spagrn";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spagrn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spagrn/README.html