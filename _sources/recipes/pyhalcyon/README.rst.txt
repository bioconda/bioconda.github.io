:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhalcyon'
.. highlight: bash

pyhalcyon
=========

.. conda:recipe:: pyhalcyon
   :replaces_section_title:
   :noindex:

   Halcyon\: an accurate basecaller exploiting an encoder\-decoder model with monotonic attention

   :homepage: https://pypi.org/project/pyhalcyon
   :documentation: https://github.com/relastle/halcyon
   
   :developer docs: https://github.com/relastle/halcyon
   :license: GPLv3
   :recipe: /`pyhalcyon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhalcyon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhalcyon/meta.yaml>`_

   


.. conda:package:: pyhalcyon

   |downloads_pyhalcyon| |docker_pyhalcyon|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``>=1.75``
   :depends click: ``>=7.1.2``
   :depends click-help-colors: ``>=0.8``
   :depends h5py: ``>=2.10.0``
   :depends logzero: ``>=1.5.0``
   :depends more-itertools: ``>=8.4.0``
   :depends numpy: ``<1.17``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.24.0``
   :depends tensorflow: ``<1.15.0``
   :depends ujson: ``>=1.35``
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

      mamba install pyhalcyon

   and update with::

      mamba update pyhalcyon

  To create a new environment, run::

      mamba create --name myenvname pyhalcyon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyhalcyon:<tag>

   (see `pyhalcyon/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhalcyon| image:: https://img.shields.io/conda/dn/bioconda/pyhalcyon.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhalcyon
   :alt:   (downloads)
.. |docker_pyhalcyon| image:: https://quay.io/repository/biocontainers/pyhalcyon/status
   :target: https://quay.io/repository/biocontainers/pyhalcyon
.. _`pyhalcyon/tags`: https://quay.io/repository/biocontainers/pyhalcyon?tab=tags


.. raw:: html

    <script>
        var package = "pyhalcyon";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhalcyon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhalcyon/README.html