:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pargenes'
.. highlight: bash

pargenes
========

.. conda:recipe:: pargenes
   :replaces_section_title:
   :noindex:

   A massively parallel tool for model selection and tree inference on thousands of genes

   :homepage: https://github.com/BenoitMorel/ParGenes
   :license: GNU General Public License v3.
   :recipe: /`pargenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pargenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pargenes/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.02.28.969980`

   


.. conda:package:: pargenes

   |downloads_pargenes| |docker_pargenes|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openjdk: 
   :depends openmpi: ``>=4.0.5,<4.1.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install pargenes

   and update with::

      mamba update pargenes

  To create a new environment, run::

      mamba create --name myenvname pargenes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pargenes:<tag>

   (see `pargenes/tags`_ for valid values for ``<tag>``)


.. |downloads_pargenes| image:: https://img.shields.io/conda/dn/bioconda/pargenes.svg?style=flat
   :target: https://anaconda.org/bioconda/pargenes
   :alt:   (downloads)
.. |docker_pargenes| image:: https://quay.io/repository/biocontainers/pargenes/status
   :target: https://quay.io/repository/biocontainers/pargenes
.. _`pargenes/tags`: https://quay.io/repository/biocontainers/pargenes?tab=tags


.. raw:: html

    <script>
        var package = "pargenes";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pargenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pargenes/README.html