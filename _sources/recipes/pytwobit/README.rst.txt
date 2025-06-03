:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytwobit'
.. highlight: bash

pytwobit
========

.. conda:recipe:: pytwobit
   :replaces_section_title:
   :noindex:

   A fast reader for local or remote UCSC twobit sequence files.

   :homepage: https://github.com/jrobinso/pytwobit
   :license: MIT / MIT
   :recipe: /`pytwobit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytwobit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytwobit/meta.yaml>`_

   


.. conda:package:: pytwobit

   |downloads_pytwobit| |docker_pytwobit|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends python: ``>=3``
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

      mamba install pytwobit

   and update with::

      mamba update pytwobit

  To create a new environment, run::

      mamba create --name myenvname pytwobit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytwobit:<tag>

   (see `pytwobit/tags`_ for valid values for ``<tag>``)


.. |downloads_pytwobit| image:: https://img.shields.io/conda/dn/bioconda/pytwobit.svg?style=flat
   :target: https://anaconda.org/bioconda/pytwobit
   :alt:   (downloads)
.. |docker_pytwobit| image:: https://quay.io/repository/biocontainers/pytwobit/status
   :target: https://quay.io/repository/biocontainers/pytwobit
.. _`pytwobit/tags`: https://quay.io/repository/biocontainers/pytwobit?tab=tags


.. raw:: html

    <script>
        var package = "pytwobit";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytwobit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytwobit/README.html