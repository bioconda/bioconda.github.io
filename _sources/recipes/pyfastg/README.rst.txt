:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastg'
.. highlight: bash

pyfastg
=======

.. conda:recipe:: pyfastg
   :replaces_section_title:
   :noindex:

   Minimal Python library for parsing SPAdes FASTG files

   :homepage: https://github.com/fedarko/pyfastg
   :license: MIT / MIT
   :recipe: /`pyfastg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastg/meta.yaml>`_

   


.. conda:package:: pyfastg

   |downloads_pyfastg| |docker_pyfastg|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends networkx: ``>=2``
   :depends python: ``>=3.6``
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

      mamba install pyfastg

   and update with::

      mamba update pyfastg

  To create a new environment, run::

      mamba create --name myenvname pyfastg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfastg:<tag>

   (see `pyfastg/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastg| image:: https://img.shields.io/conda/dn/bioconda/pyfastg.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastg
   :alt:   (downloads)
.. |docker_pyfastg| image:: https://quay.io/repository/biocontainers/pyfastg/status
   :target: https://quay.io/repository/biocontainers/pyfastg
.. _`pyfastg/tags`: https://quay.io/repository/biocontainers/pyfastg?tab=tags


.. raw:: html

    <script>
        var package = "pyfastg";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastg/README.html