:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgsmk'
.. highlight: bash

fgsmk
=====

.. conda:recipe:: fgsmk
   :replaces_section_title:
   :noindex:

   Supporting functions for running Snakemake workflows.

   :homepage: https://pypi.org/project/fgsmk/
   :developer docs: https://github.com/fulcrumgenomics/fgsmk
   :license: MIT / MIT
   :recipe: /`fgsmk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgsmk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgsmk/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.15558165`

   


.. conda:package:: fgsmk

   |downloads_fgsmk| |docker_fgsmk|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends fgpyo: ``1.0.0.*``
   :depends python: ``>=3.11.0,<3.13``
   :depends snakemake: ``>=8.27.1,<9.0.0``
   :depends strenum: ``>=0.4.15,<0.5``
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

      mamba install fgsmk

   and update with::

      mamba update fgsmk

  To create a new environment, run::

      mamba create --name myenvname fgsmk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgsmk:<tag>

   (see `fgsmk/tags`_ for valid values for ``<tag>``)


.. |downloads_fgsmk| image:: https://img.shields.io/conda/dn/bioconda/fgsmk.svg?style=flat
   :target: https://anaconda.org/bioconda/fgsmk
   :alt:   (downloads)
.. |docker_fgsmk| image:: https://quay.io/repository/biocontainers/fgsmk/status
   :target: https://quay.io/repository/biocontainers/fgsmk
.. _`fgsmk/tags`: https://quay.io/repository/biocontainers/fgsmk?tab=tags


.. raw:: html

    <script>
        var package = "fgsmk";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgsmk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgsmk/README.html