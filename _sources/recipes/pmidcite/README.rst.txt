:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmidcite'
.. highlight: bash

pmidcite
========

.. conda:recipe:: pmidcite
   :replaces_section_title:
   :noindex:

   Download \"Cited by\" data from the NIH for any paper with a PubMed ID

   :homepage: http://github.com/dvklopfenstein/pmidcite
   :license: AGPL-3.0-only
   :recipe: /`pmidcite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmidcite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmidcite/meta.yaml>`_
   :links: doi: :doi:`10.1002/jrsm.1456`

   


.. conda:package:: pmidcite

   |downloads_pmidcite| |docker_pmidcite|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends python: ``>=3.8``
   :depends requests: 
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

      mamba install pmidcite

   and update with::

      mamba update pmidcite

  To create a new environment, run::

      mamba create --name myenvname pmidcite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pmidcite:<tag>

   (see `pmidcite/tags`_ for valid values for ``<tag>``)


.. |downloads_pmidcite| image:: https://img.shields.io/conda/dn/bioconda/pmidcite.svg?style=flat
   :target: https://anaconda.org/bioconda/pmidcite
   :alt:   (downloads)
.. |docker_pmidcite| image:: https://quay.io/repository/biocontainers/pmidcite/status
   :target: https://quay.io/repository/biocontainers/pmidcite
.. _`pmidcite/tags`: https://quay.io/repository/biocontainers/pmidcite?tab=tags


.. raw:: html

    <script>
        var package = "pmidcite";
        var versions = ["0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmidcite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmidcite/README.html