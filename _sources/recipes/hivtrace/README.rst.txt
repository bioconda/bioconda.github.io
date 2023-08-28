:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hivtrace'
.. highlight: bash

hivtrace
========

.. conda:recipe:: hivtrace
   :replaces_section_title:
   :noindex:

   HIV TRACE is an application that identifies potential transmission clusters within a supplied FASTA file with an option to find potential links against the Los Alamos HIV Sequence Database.

   :homepage: https://github.com/veg/hivtrace
   :license: MIT
   :recipe: /`hivtrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace/meta.yaml>`_

   


.. conda:package:: hivtrace

   |downloads_hivtrace| |docker_hivtrace|

   :versions:
      
      

      ``1.5.0-0``,  ``0.5.0-0``,  ``0.1.6-0``

      

   
   :depends biopython: ``>=1.58``
   :depends python: ``>=3``
   :depends python-bioext: ``>=0.19.7``
   :depends python-hivclustering: 
   :depends python-hppy: ``>=0.9.8``
   :depends python-hyphy-python: ``>=0.1.6``
   :depends tornado: ``>=4.3``
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

      mamba install hivtrace

   and update with::

      mamba update hivtrace

  To create a new environment, run::

      mamba create --name myenvname hivtrace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hivtrace:<tag>

   (see `hivtrace/tags`_ for valid values for ``<tag>``)


.. |downloads_hivtrace| image:: https://img.shields.io/conda/dn/bioconda/hivtrace.svg?style=flat
   :target: https://anaconda.org/bioconda/hivtrace
   :alt:   (downloads)
.. |docker_hivtrace| image:: https://quay.io/repository/biocontainers/hivtrace/status
   :target: https://quay.io/repository/biocontainers/hivtrace
.. _`hivtrace/tags`: https://quay.io/repository/biocontainers/hivtrace?tab=tags


.. raw:: html

    <script>
        var package = "hivtrace";
        var versions = ["1.5.0","0.5.0","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hivtrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hivtrace/README.html