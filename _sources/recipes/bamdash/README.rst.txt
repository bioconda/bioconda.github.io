:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamdash'
.. highlight: bash

bamdash
=======

.. conda:recipe:: bamdash
   :replaces_section_title:
   :noindex:

   Aggregate pathogen NGS results into an interactive plot.

   :homepage: https://github.com/jonas-fuchs/BAMdash
   :documentation: https://github.com/jonas-fuchs/BAMdash/blob/v.0.4.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bamdash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdash/meta.yaml>`_

   


.. conda:package:: bamdash

   |downloads_bamdash| |docker_bamdash|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2-0``

      

   
   :depends biopython: ``>=1.79``
   :depends pandas: ``>=1.4.4``
   :depends plotly: ``>=5.17.0``
   :depends pysam: ``>=0.21.0``
   :depends python: ``>=3.9``
   :depends python-kaleido: ``>=0.2.1``
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

      mamba install bamdash

   and update with::

      mamba update bamdash

  To create a new environment, run::

      mamba create --name myenvname bamdash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamdash:<tag>

   (see `bamdash/tags`_ for valid values for ``<tag>``)


.. |downloads_bamdash| image:: https://img.shields.io/conda/dn/bioconda/bamdash.svg?style=flat
   :target: https://anaconda.org/bioconda/bamdash
   :alt:   (downloads)
.. |docker_bamdash| image:: https://quay.io/repository/biocontainers/bamdash/status
   :target: https://quay.io/repository/biocontainers/bamdash
.. _`bamdash/tags`: https://quay.io/repository/biocontainers/bamdash?tab=tags


.. raw:: html

    <script>
        var package = "bamdash";
        var versions = ["0.4.1","0.4","0.3.1","0.3","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamdash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamdash/README.html