:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthoflow'
.. highlight: bash

orthoflow
=========

.. conda:recipe:: orthoflow
   :replaces_section_title:
   :noindex:

   Orthoflow is a workflow for phylogenetic inference of genome\-scale datasets of protein\-coding genes.

   :homepage: https://github.com/rbturnbull/orthoflow
   :documentation: https://rbturnbull.github.io/orthoflow/
   
   :license: Apache-2.0
   :recipe: /`orthoflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthoflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthoflow/meta.yaml>`_

   
   \# Orthoflow \- end\-to\-end phylogenomic inference

   Orthoflow is a workflow for phylogenetic inference of genome\-scale datasets of protein\-coding genes.

   For more information\, visit the GitHub or the documentation page.



.. conda:package:: orthoflow

   |downloads_orthoflow| |docker_orthoflow|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends appdirs: ``>=1.4.4``
   :depends biopython: ``>=1.79.0``
   :depends flask: ``>=2.1.2``
   :depends jinja2: ``>=3.1.2``
   :depends joblib: ``>=1.2.0``
   :depends pandas: ``>=1.2.5,<2.0.0``
   :depends phytest: ``>=1.2.0``
   :depends pydot: ``>=1.4.2``
   :depends python: 
   :depends rich: ``>=13.3.3``
   :depends snakemake-minimal: ``>=7.0.0``
   :depends toml: ``>=0.10.2``
   :depends typer: ``>=0.4.1``
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

      mamba install orthoflow

   and update with::

      mamba update orthoflow

  To create a new environment, run::

      mamba create --name myenvname orthoflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthoflow:<tag>

   (see `orthoflow/tags`_ for valid values for ``<tag>``)


.. |downloads_orthoflow| image:: https://img.shields.io/conda/dn/bioconda/orthoflow.svg?style=flat
   :target: https://anaconda.org/bioconda/orthoflow
   :alt:   (downloads)
.. |docker_orthoflow| image:: https://quay.io/repository/biocontainers/orthoflow/status
   :target: https://quay.io/repository/biocontainers/orthoflow
.. _`orthoflow/tags`: https://quay.io/repository/biocontainers/orthoflow?tab=tags


.. raw:: html

    <script>
        var package = "orthoflow";
        var versions = ["0.3.1","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthoflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthoflow/README.html