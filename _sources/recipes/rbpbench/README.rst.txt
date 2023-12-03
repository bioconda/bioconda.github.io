:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rbpbench'
.. highlight: bash

rbpbench
========

.. conda:recipe:: rbpbench
   :replaces_section_title:
   :noindex:

   Evaluate CLIP\-seq and other genomic region data using a comprehensive collection of known RBP binding motifs

   :homepage: https://github.com/michauhl/RBPBench
   :license: MIT
   :recipe: /`rbpbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rbpbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rbpbench/meta.yaml>`_

   


.. conda:package:: rbpbench

   |downloads_rbpbench| |docker_rbpbench|

   :versions:
      
      

      ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bedtools: 
   :depends infernal: 
   :depends logomaker: 
   :depends markdown: 
   :depends matplotlib-venn: 
   :depends meme: ``>=5.0``
   :depends packaging: 
   :depends plotly: 
   :depends python: ``<3.12``
   :depends scipy: 
   :depends textdistance: 
   :depends upsetplot: 
   :depends venn: 
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

      mamba install rbpbench

   and update with::

      mamba update rbpbench

  To create a new environment, run::

      mamba create --name myenvname rbpbench

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rbpbench:<tag>

   (see `rbpbench/tags`_ for valid values for ``<tag>``)


.. |downloads_rbpbench| image:: https://img.shields.io/conda/dn/bioconda/rbpbench.svg?style=flat
   :target: https://anaconda.org/bioconda/rbpbench
   :alt:   (downloads)
.. |docker_rbpbench| image:: https://quay.io/repository/biocontainers/rbpbench/status
   :target: https://quay.io/repository/biocontainers/rbpbench
.. _`rbpbench/tags`: https://quay.io/repository/biocontainers/rbpbench?tab=tags


.. raw:: html

    <script>
        var package = "rbpbench";
        var versions = ["0.7","0.6","0.6","0.5","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rbpbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rbpbench/README.html