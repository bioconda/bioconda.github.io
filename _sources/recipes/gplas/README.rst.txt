:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gplas'
.. highlight: bash

gplas
=====

.. conda:recipe:: gplas
   :replaces_section_title:
   :noindex:

   gplas is a tool to bin plasmid\-predicted contigs based on sequence composition\, coverage and assembly graph information. It extends the possibility of accurately binning predicted plasmid contigs into several discrete plasmid components.

   :homepage: https://gitlab.com/sirarredondo/gplas
   :license: GPL3.0
   :recipe: /`gplas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas/meta.yaml>`_

   


.. conda:package:: gplas

   |downloads_gplas| |docker_gplas|

   :versions:
      
      

      ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends python: ``>=3.6``
   :depends snakemake: ``>=5.5.4``
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

      mamba install gplas

   and update with::

      mamba update gplas

  To create a new environment, run::

      mamba create --name myenvname gplas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gplas:<tag>

   (see `gplas/tags`_ for valid values for ``<tag>``)


.. |downloads_gplas| image:: https://img.shields.io/conda/dn/bioconda/gplas.svg?style=flat
   :target: https://anaconda.org/bioconda/gplas
   :alt:   (downloads)
.. |docker_gplas| image:: https://quay.io/repository/biocontainers/gplas/status
   :target: https://quay.io/repository/biocontainers/gplas
.. _`gplas/tags`: https://quay.io/repository/biocontainers/gplas?tab=tags


.. raw:: html

    <script>
        var package = "gplas";
        var versions = ["0.6.1","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gplas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gplas/README.html