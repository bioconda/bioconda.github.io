:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacerberus-lite'
.. highlight: bash

metacerberus-lite
=================

.. conda:recipe:: metacerberus-lite
   :replaces_section_title:
   :noindex:

   MetaCerberus with reduced dependencies\: Versatile Functional Ontology Assignments for Metagenomes via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun meta\'omics data

   :homepage: https://github.com/raw-lab/metacerberus
   :license: BSD / BSD-3-Clause
   :recipe: /`metacerberus-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus-lite/meta.yaml>`_

   


.. conda:package:: metacerberus-lite

   |downloads_metacerberus-lite| |docker_metacerberus-lite|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends configargparse: 
   :depends dominate: 
   :depends flash2: 
   :depends metaomestats: 
   :depends pandas: 
   :depends plotly: 
   :depends psutil: 
   :depends pyhmmer: 
   :depends pyrodigal: 
   :depends pyrodigal-gv: 
   :depends python: ``>=3.8``
   :depends python-kaleido: 
   :depends scikit-learn: 
   :depends setuptools: ``<70.0.0``
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

      mamba install metacerberus-lite

   and update with::

      mamba update metacerberus-lite

  To create a new environment, run::

      mamba create --name myenvname metacerberus-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metacerberus-lite:<tag>

   (see `metacerberus-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_metacerberus-lite| image:: https://img.shields.io/conda/dn/bioconda/metacerberus-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/metacerberus-lite
   :alt:   (downloads)
.. |docker_metacerberus-lite| image:: https://quay.io/repository/biocontainers/metacerberus-lite/status
   :target: https://quay.io/repository/biocontainers/metacerberus-lite
.. _`metacerberus-lite/tags`: https://quay.io/repository/biocontainers/metacerberus-lite?tab=tags


.. raw:: html

    <script>
        var package = "metacerberus-lite";
        var versions = ["1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacerberus-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacerberus-lite/README.html