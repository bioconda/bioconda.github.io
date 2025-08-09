:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'severus'
.. highlight: bash

severus
=======

.. conda:recipe:: severus
   :replaces_section_title:
   :noindex:

   A tool for somatic structural variant calling using long reads

   :homepage: https://github.com/KolmogorovLab/Severus
   :license: BSD-3-Clause
   :recipe: /`severus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/severus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/severus/meta.yaml>`_

   


.. conda:package:: severus

   |downloads_severus| |docker_severus|

   :versions:
      
      

      ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends networkx: ``>=2.6``
   :depends numpy: 
   :depends pip: 
   :depends plotly: 
   :depends pydot: 
   :depends pygraphviz: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.14``
   :depends setuptools: 
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

      mamba install severus

   and update with::

      mamba update severus

  To create a new environment, run::

      mamba create --name myenvname severus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/severus:<tag>

   (see `severus/tags`_ for valid values for ``<tag>``)


.. |downloads_severus| image:: https://img.shields.io/conda/dn/bioconda/severus.svg?style=flat
   :target: https://anaconda.org/bioconda/severus
   :alt:   (downloads)
.. |docker_severus| image:: https://quay.io/repository/biocontainers/severus/status
   :target: https://quay.io/repository/biocontainers/severus
.. _`severus/tags`: https://quay.io/repository/biocontainers/severus?tab=tags


.. raw:: html

    <script>
        var package = "severus";
        var versions = ["1.6","1.5","1.4","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/severus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/severus/README.html