:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marti'
.. highlight: bash

marti
=====

.. conda:recipe:: marti
   :replaces_section_title:
   :noindex:

   Metagenomic Analysis in Real Time

   :homepage: https://github.com/richardmleggett/MARTi
   :documentation: https://marti.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`marti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marti/meta.yaml>`_

   MARTi is a software package designed for performing real\-time analysis of metagenomic samples using nanopore sequencing.If you’re not working in real\-time\, MARTi may still be a quick and easy analysis solution for you. And if you’re not using nanopore sequencing\, you may still benefit from using MARTi to analyse your data.


.. conda:package:: marti

   |downloads_marti| |docker_marti|

   :versions:
      
      

      ``0.9.14-0``

      

   
   :depends blast: ``>=2.12``
   :depends nodejs: ``>=14.17.5``
   :depends openjdk: ``>=16.0.2``
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

      mamba install marti

   and update with::

      mamba update marti

  To create a new environment, run::

      mamba create --name myenvname marti

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/marti:<tag>

   (see `marti/tags`_ for valid values for ``<tag>``)


.. |downloads_marti| image:: https://img.shields.io/conda/dn/bioconda/marti.svg?style=flat
   :target: https://anaconda.org/bioconda/marti
   :alt:   (downloads)
.. |docker_marti| image:: https://quay.io/repository/biocontainers/marti/status
   :target: https://quay.io/repository/biocontainers/marti
.. _`marti/tags`: https://quay.io/repository/biocontainers/marti?tab=tags


.. raw:: html

    <script>
        var package = "marti";
        var versions = ["0.9.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marti/README.html