:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'args_oap'
.. highlight: bash

args_oap
========

.. conda:recipe:: args_oap
   :replaces_section_title:
   :noindex:

   ARGs\-OAP\: Online Analysis Pipeline for Antibiotic Resistance Genes Detection from Metagenomic Data Using an Integrated Structured ARG Database

   :homepage: https://github.com/xinehc/args_oap
   :license: MIT / MIT
   :recipe: /`args_oap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/args_oap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/args_oap/meta.yaml>`_

   


.. conda:package:: args_oap

   |downloads_args_oap| |docker_args_oap|

   :versions:
      
      

      ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``

      

   
   :depends blast: ``>=2.12``
   :depends bwa: ``>=0.7.17``
   :depends diamond: ``>=2.0.15``
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.15``
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

      mamba install args_oap

   and update with::

      mamba update args_oap

  To create a new environment, run::

      mamba create --name myenvname args_oap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/args_oap:<tag>

   (see `args_oap/tags`_ for valid values for ``<tag>``)


.. |downloads_args_oap| image:: https://img.shields.io/conda/dn/bioconda/args_oap.svg?style=flat
   :target: https://anaconda.org/bioconda/args_oap
   :alt:   (downloads)
.. |docker_args_oap| image:: https://quay.io/repository/biocontainers/args_oap/status
   :target: https://quay.io/repository/biocontainers/args_oap
.. _`args_oap/tags`: https://quay.io/repository/biocontainers/args_oap?tab=tags


.. raw:: html

    <script>
        var package = "args_oap";
        var versions = ["3.2.3","3.2.2","3.2.1","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/args_oap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/args_oap/README.html