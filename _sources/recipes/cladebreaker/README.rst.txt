:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cladebreaker'
.. highlight: bash

cladebreaker
============

.. conda:recipe:: cladebreaker
   :replaces_section_title:
   :noindex:

   Nextflow pipeline for phylogenetic analysis.

   :homepage: https://github.com/andriesfeder/cladebreaker
   :license: MIT
   :recipe: /`cladebreaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladebreaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladebreaker/meta.yaml>`_

   


.. conda:package:: cladebreaker

   |downloads_cladebreaker| |docker_cladebreaker|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends conda: 
   :depends graphviz: 
   :depends nextflow: 
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

      mamba install cladebreaker

   and update with::

      mamba update cladebreaker

  To create a new environment, run::

      mamba create --name myenvname cladebreaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cladebreaker:<tag>

   (see `cladebreaker/tags`_ for valid values for ``<tag>``)


.. |downloads_cladebreaker| image:: https://img.shields.io/conda/dn/bioconda/cladebreaker.svg?style=flat
   :target: https://anaconda.org/bioconda/cladebreaker
   :alt:   (downloads)
.. |docker_cladebreaker| image:: https://quay.io/repository/biocontainers/cladebreaker/status
   :target: https://quay.io/repository/biocontainers/cladebreaker
.. _`cladebreaker/tags`: https://quay.io/repository/biocontainers/cladebreaker?tab=tags


.. raw:: html

    <script>
        var package = "cladebreaker";
        var versions = ["0.2.3","0.2.2","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cladebreaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cladebreaker/README.html