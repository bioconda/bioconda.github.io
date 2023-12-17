:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobra-meta'
.. highlight: bash

cobra-meta
==========

.. conda:recipe:: cobra-meta
   :replaces_section_title:
   :noindex:

   COBRA is a tool to get higher quality viral genomes assembled from metagenomes.

   :homepage: https://github.com/linxingchen/cobra
   :license: MIT
   :recipe: /`cobra-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra-meta/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.05.30.542503`

   


.. conda:package:: cobra-meta

   |downloads_cobra-meta| |docker_cobra-meta|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.14.0,<3.0.0``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.7``
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

      mamba install cobra-meta

   and update with::

      mamba update cobra-meta

  To create a new environment, run::

      mamba create --name myenvname cobra-meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cobra-meta:<tag>

   (see `cobra-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_cobra-meta| image:: https://img.shields.io/conda/dn/bioconda/cobra-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/cobra-meta
   :alt:   (downloads)
.. |docker_cobra-meta| image:: https://quay.io/repository/biocontainers/cobra-meta/status
   :target: https://quay.io/repository/biocontainers/cobra-meta
.. _`cobra-meta/tags`: https://quay.io/repository/biocontainers/cobra-meta?tab=tags


.. raw:: html

    <script>
        var package = "cobra-meta";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra-meta/README.html