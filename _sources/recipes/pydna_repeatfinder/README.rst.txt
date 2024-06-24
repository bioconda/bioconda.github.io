:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydna_repeatfinder'
.. highlight: bash

pydna_repeatfinder
==================

.. conda:recipe:: pydna_repeatfinder
   :replaces_section_title:
   :noindex:

   Search for direct and inverted repeats in DNA sequences.

   :homepage: https://github.com/linsalrob/repeatfinder
   :license: MIT / MIT
   :recipe: /`pydna_repeatfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna_repeatfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna_repeatfinder/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.5006657`

   


.. conda:package:: pydna_repeatfinder

   |downloads_pydna_repeatfinder| |docker_pydna_repeatfinder|

   :versions:
      
      

      ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pydna_repeatfinder

   and update with::

      mamba update pydna_repeatfinder

  To create a new environment, run::

      mamba create --name myenvname pydna_repeatfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydna_repeatfinder:<tag>

   (see `pydna_repeatfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_pydna_repeatfinder| image:: https://img.shields.io/conda/dn/bioconda/pydna_repeatfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/pydna_repeatfinder
   :alt:   (downloads)
.. |docker_pydna_repeatfinder| image:: https://quay.io/repository/biocontainers/pydna_repeatfinder/status
   :target: https://quay.io/repository/biocontainers/pydna_repeatfinder
.. _`pydna_repeatfinder/tags`: https://quay.io/repository/biocontainers/pydna_repeatfinder?tab=tags


.. raw:: html

    <script>
        var package = "pydna_repeatfinder";
        var versions = ["0.2.9","0.2.9","0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna_repeatfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna_repeatfinder/README.html