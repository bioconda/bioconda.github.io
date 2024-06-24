:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anospp-analysis'
.. highlight: bash

anospp-analysis
===============

.. conda:recipe:: anospp-analysis
   :replaces_section_title:
   :noindex:

   ANOSPP data analysis

   :homepage: https://pypi.org/project/anospp-analysis/
   :license: MIT
   :recipe: /`anospp-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anospp-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anospp-analysis/meta.yaml>`_

   


.. conda:package:: anospp-analysis

   |downloads_anospp-analysis| |docker_anospp-analysis|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.3-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bokeh: 
   :depends cutadapt: 
   :depends fasttree: 
   :depends keras: ``>=2.12``
   :depends mafft: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.10.*``
   :depends seaborn: 
   :depends tensorflow-base: ``>=2.12``
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

      mamba install anospp-analysis

   and update with::

      mamba update anospp-analysis

  To create a new environment, run::

      mamba create --name myenvname anospp-analysis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anospp-analysis:<tag>

   (see `anospp-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_anospp-analysis| image:: https://img.shields.io/conda/dn/bioconda/anospp-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/anospp-analysis
   :alt:   (downloads)
.. |docker_anospp-analysis| image:: https://quay.io/repository/biocontainers/anospp-analysis/status
   :target: https://quay.io/repository/biocontainers/anospp-analysis
.. _`anospp-analysis/tags`: https://quay.io/repository/biocontainers/anospp-analysis?tab=tags


.. raw:: html

    <script>
        var package = "anospp-analysis";
        var versions = ["0.3.0","0.2.1","0.2.1","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anospp-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anospp-analysis/README.html