:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calitas'
.. highlight: bash

calitas
=======

.. conda:recipe:: calitas
   :replaces_section_title:
   :noindex:

   A CRISPR\/Cas\-aware ALigner for In silico off\-TArget Search

   :homepage: https://github.com/editasmedicine/calitas
   :license: BSD-3-Clause-Clear
   :recipe: /`calitas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calitas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calitas/meta.yaml>`_

   


.. conda:package:: calitas

   |downloads_calitas| |docker_calitas|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install calitas

   and update with::

      mamba update calitas

  To create a new environment, run::

      mamba create --name myenvname calitas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/calitas:<tag>

   (see `calitas/tags`_ for valid values for ``<tag>``)


.. |downloads_calitas| image:: https://img.shields.io/conda/dn/bioconda/calitas.svg?style=flat
   :target: https://anaconda.org/bioconda/calitas
   :alt:   (downloads)
.. |docker_calitas| image:: https://quay.io/repository/biocontainers/calitas/status
   :target: https://quay.io/repository/biocontainers/calitas
.. _`calitas/tags`: https://quay.io/repository/biocontainers/calitas?tab=tags


.. raw:: html

    <script>
        var package = "calitas";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calitas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calitas/README.html