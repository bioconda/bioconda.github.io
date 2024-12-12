:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-firebrowser'
.. highlight: bash

r-firebrowser
=============

.. conda:recipe:: r-firebrowser
   :replaces_section_title:
   :noindex:

   An R client for broads firehose pipeline\, providing TCGA data sets.

   :homepage: https://github.com/mariodeng/FirebrowseR
   :license: MIT / MIT
   :recipe: /`r-firebrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-firebrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-firebrowser/meta.yaml>`_

   


.. conda:package:: r-firebrowser

   |downloads_r-firebrowser| |docker_r-firebrowser|

   :versions:
      
      

      ``1.1.35-6``,  ``1.1.35-5``,  ``1.1.35-4``,  ``1.1.35-3``,  ``1.1.35-2``,  ``1.1.35-1``,  ``1.1.35-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-firebrowser

   and update with::

      mamba update r-firebrowser

  To create a new environment, run::

      mamba create --name myenvname r-firebrowser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-firebrowser:<tag>

   (see `r-firebrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_r-firebrowser| image:: https://img.shields.io/conda/dn/bioconda/r-firebrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-firebrowser
   :alt:   (downloads)
.. |docker_r-firebrowser| image:: https://quay.io/repository/biocontainers/r-firebrowser/status
   :target: https://quay.io/repository/biocontainers/r-firebrowser
.. _`r-firebrowser/tags`: https://quay.io/repository/biocontainers/r-firebrowser?tab=tags


.. raw:: html

    <script>
        var package = "r-firebrowser";
        var versions = ["1.1.35","1.1.35","1.1.35","1.1.35","1.1.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-firebrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-firebrowser/README.html