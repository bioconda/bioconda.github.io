:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unac'
.. highlight: bash

unac
====

.. conda:recipe:: unac
   :replaces_section_title:
   :noindex:

   A universal meta tool to perform natural abundance correction of isotopic labeling data

   :homepage: https://jugit.fz-juelich.de/IBG-1/ModSim/uNAC
   :license: MIT
   :recipe: /`unac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unac/meta.yaml>`_

   


.. conda:package:: unac

   |downloads_unac| |docker_unac|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bioconductor-isocorrector: ``>=1.24.0``
   :depends isocor: ``>=2.2``
   :depends matplotlib-base: ``>=3.7``
   :depends numpy: ``>=1.25``
   :depends openpyxl: ``>=3.0``
   :depends pandas: ``>=2.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends python: ``>=3.11``
   :depends rpy2: ``>=3.5``
   :depends setuptools: ``>=68.0.0``
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

      mamba install unac

   and update with::

      mamba update unac

  To create a new environment, run::

      mamba create --name myenvname unac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unac:<tag>

   (see `unac/tags`_ for valid values for ``<tag>``)


.. |downloads_unac| image:: https://img.shields.io/conda/dn/bioconda/unac.svg?style=flat
   :target: https://anaconda.org/bioconda/unac
   :alt:   (downloads)
.. |docker_unac| image:: https://quay.io/repository/biocontainers/unac/status
   :target: https://quay.io/repository/biocontainers/unac
.. _`unac/tags`: https://quay.io/repository/biocontainers/unac?tab=tags


.. raw:: html

    <script>
        var package = "unac";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unac/README.html