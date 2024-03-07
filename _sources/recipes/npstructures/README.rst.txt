:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npstructures'
.. highlight: bash

npstructures
============

.. conda:recipe:: npstructures
   :replaces_section_title:
   :noindex:

   Simple data structures that augments the numpy library

   :homepage: https://github.com/bionumpy/npstructures
   :license: MIT
   :recipe: /`npstructures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures/meta.yaml>`_

   


.. conda:package:: npstructures

   |downloads_npstructures| |docker_npstructures|

   :versions:
      
      

      ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``

      

   
   :depends numpy: ``>=1.20,<1.24``
   :depends python: ``>=3``
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

      mamba install npstructures

   and update with::

      mamba update npstructures

  To create a new environment, run::

      mamba create --name myenvname npstructures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/npstructures:<tag>

   (see `npstructures/tags`_ for valid values for ``<tag>``)


.. |downloads_npstructures| image:: https://img.shields.io/conda/dn/bioconda/npstructures.svg?style=flat
   :target: https://anaconda.org/bioconda/npstructures
   :alt:   (downloads)
.. |docker_npstructures| image:: https://quay.io/repository/biocontainers/npstructures/status
   :target: https://quay.io/repository/biocontainers/npstructures
.. _`npstructures/tags`: https://quay.io/repository/biocontainers/npstructures?tab=tags


.. raw:: html

    <script>
        var package = "npstructures";
        var versions = ["0.2.17","0.2.16","0.2.15","0.2.14","0.2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npstructures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npstructures/README.html