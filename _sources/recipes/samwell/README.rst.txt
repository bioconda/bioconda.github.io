:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samwell'
.. highlight: bash

samwell
=======

.. conda:recipe:: samwell
   :replaces_section_title:
   :noindex:

   Useful utilities for biological data formats and analyses

   :homepage: https://pypi.org/project/samwell/
   :license: MIT
   :recipe: /`samwell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samwell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samwell/meta.yaml>`_

   


.. conda:package:: samwell

   |downloads_samwell| |docker_samwell|

   :versions:
      
      

      ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends attrs: ``>=19.3.0``
   :depends cython: 
   :depends defopt: ``>=6.0``
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends mypy_extensions: ``>=0.4.3``
   :depends pybedlite: ``>=0.0.1``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends typing_extensions: ``>=3.7.4``
   :depends typing_inspect: ``>=0.3.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install samwell

   and update with::

      mamba update samwell

  To create a new environment, run::

      mamba create --name myenvname samwell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samwell:<tag>

   (see `samwell/tags`_ for valid values for ``<tag>``)


.. |downloads_samwell| image:: https://img.shields.io/conda/dn/bioconda/samwell.svg?style=flat
   :target: https://anaconda.org/bioconda/samwell
   :alt:   (downloads)
.. |docker_samwell| image:: https://quay.io/repository/biocontainers/samwell/status
   :target: https://quay.io/repository/biocontainers/samwell
.. _`samwell/tags`: https://quay.io/repository/biocontainers/samwell?tab=tags


.. raw:: html

    <script>
        var package = "samwell";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samwell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samwell/README.html