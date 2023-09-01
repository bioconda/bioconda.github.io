:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fido'
.. highlight: bash

fido
====

.. conda:recipe:: fido
   :replaces_section_title:
   :noindex:

   A method for protein identification in MS\/MS proteomics. Think of it like a protein delivery dog. You bring it the scored matches between peptides and spectra\, and it fetches a list of proteins ranked by posterior probability by doing clever tricks.

   :homepage: https://noble.gs.washington.edu/proj/fido/
   :license: MIT license
   :recipe: /`fido <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido/meta.yaml>`_

   


.. conda:package:: fido

   |downloads_fido| |docker_fido|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fido

   and update with::

      mamba update fido

  To create a new environment, run::

      mamba create --name myenvname fido

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fido:<tag>

   (see `fido/tags`_ for valid values for ``<tag>``)


.. |downloads_fido| image:: https://img.shields.io/conda/dn/bioconda/fido.svg?style=flat
   :target: https://anaconda.org/bioconda/fido
   :alt:   (downloads)
.. |docker_fido| image:: https://quay.io/repository/biocontainers/fido/status
   :target: https://quay.io/repository/biocontainers/fido
.. _`fido/tags`: https://quay.io/repository/biocontainers/fido?tab=tags


.. raw:: html

    <script>
        var package = "fido";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fido/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fido/README.html