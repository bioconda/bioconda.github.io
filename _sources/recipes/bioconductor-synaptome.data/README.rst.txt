:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synaptome.data'
.. highlight: bash

bioconductor-synaptome.data
===========================

.. conda:recipe:: bioconductor-synaptome.data
   :replaces_section_title:
   :noindex:

   AnnotationData for Synaptome.DB package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/synaptome.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-synaptome.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data/meta.yaml>`_

   The package provides access to the copy of the Synaptic proteome database. It was designed as an accompaniment for Synaptome.DB package. Database provides information for specific synaptic genes and allows building the protein\-protein interaction graph for gene sets\, synaptic compartments\, and brain regions. In the current update we added 6 more synaptic proteome studies\, which resulted in total of 64 studies. We introduced Synaptic Vesicle as a separate compartment. We also added coding mutations for Autistic Spectral disorder and Epilepsy collected from publicly available databases.


.. conda:package:: bioconductor-synaptome.data

   |downloads_bioconductor-synaptome.data| |docker_bioconductor-synaptome.data|

   :versions:
      
      

      ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.3-1``,  ``0.99.3-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-synaptome.data

   and update with::

      mamba update bioconductor-synaptome.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-synaptome.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synaptome.data:<tag>

   (see `bioconductor-synaptome.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synaptome.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synaptome.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synaptome.data
   :alt:   (downloads)
.. |docker_bioconductor-synaptome.data| image:: https://quay.io/repository/biocontainers/bioconductor-synaptome.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synaptome.data
.. _`bioconductor-synaptome.data/tags`: https://quay.io/repository/biocontainers/bioconductor-synaptome.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synaptome.data";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html