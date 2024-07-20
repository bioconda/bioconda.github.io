:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydna'
.. highlight: bash

pydna
=====

.. conda:recipe:: pydna
   :replaces_section_title:
   :noindex:

   Representing double stranded DNA and functions for simulating cloning and homologous recombination between DNA molecules.

   :homepage: https://github.com/BjornFJohansson/pydna
   :license: BSD / BSD-3-Clause
   :recipe: /`pydna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna/meta.yaml>`_

   


.. conda:package:: pydna

   |downloads_pydna| |docker_pydna|

   :versions:
      
      

      ``5.2.0-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0a3-0``

      

   
   :depends appdirs: ``>=1.4.4``
   :depends biopython: ``>=1.80``
   :depends networkx: ``>=2.8.8``
   :depends prettytable: ``>=3.5.0``
   :depends pyfiglet: ``>=0.8.post1``
   :depends pyparsing: ``>=2.4.7``
   :depends pyperclip: ``>=1.8.2``
   :depends python: ``>=3.8``
   :depends requests: ``>=2.26.0``
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

      mamba install pydna

   and update with::

      mamba update pydna

  To create a new environment, run::

      mamba create --name myenvname pydna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydna:<tag>

   (see `pydna/tags`_ for valid values for ``<tag>``)


.. |downloads_pydna| image:: https://img.shields.io/conda/dn/bioconda/pydna.svg?style=flat
   :target: https://anaconda.org/bioconda/pydna
   :alt:   (downloads)
.. |docker_pydna| image:: https://quay.io/repository/biocontainers/pydna/status
   :target: https://quay.io/repository/biocontainers/pydna
.. _`pydna/tags`: https://quay.io/repository/biocontainers/pydna?tab=tags


.. raw:: html

    <script>
        var package = "pydna";
        var versions = ["5.2.0","3.1.0","3.0.2","3.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna/README.html