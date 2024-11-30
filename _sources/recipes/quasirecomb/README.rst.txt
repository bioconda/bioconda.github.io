:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quasirecomb'
.. highlight: bash

quasirecomb
===========

.. conda:recipe:: quasirecomb
   :replaces_section_title:
   :noindex:

   Software of Inference of Quasispecies subjected to Recombination

   :homepage: https://github.com/cbg-ethz/QuasiRecomb
   :license: GPL3 / GNU GPLv3
   :recipe: /`quasirecomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasirecomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasirecomb/meta.yaml>`_
   :links: biotools: :biotools:`QuasiRecomb`, doi: :doi:`10.1089/cmb.2012.0232`

   QuasiRecomb presents a jumping hidden Markov model that describes the generation of the viral quasispecies and a method to infer its parameters by analysing next generation sequencing data. It offers an implementation of the EM algorithm to find maximum a posteriori estimates of the model parameters and a method to estimate the distribution of viral strains in the quasispecies. 



.. conda:package:: quasirecomb

   |downloads_quasirecomb| |docker_quasirecomb|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install quasirecomb

   and update with::

      mamba update quasirecomb

  To create a new environment, run::

      mamba create --name myenvname quasirecomb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quasirecomb:<tag>

   (see `quasirecomb/tags`_ for valid values for ``<tag>``)


.. |downloads_quasirecomb| image:: https://img.shields.io/conda/dn/bioconda/quasirecomb.svg?style=flat
   :target: https://anaconda.org/bioconda/quasirecomb
   :alt:   (downloads)
.. |docker_quasirecomb| image:: https://quay.io/repository/biocontainers/quasirecomb/status
   :target: https://quay.io/repository/biocontainers/quasirecomb
.. _`quasirecomb/tags`: https://quay.io/repository/biocontainers/quasirecomb?tab=tags


.. raw:: html

    <script>
        var package = "quasirecomb";
        var versions = ["1.2","1.2"];
    </script>





Notes
-----
QuasiRecomb is a Java program that comes with a custom wrapper shell script.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quasirecomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quasirecomb/README.html