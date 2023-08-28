:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scxa-plots'
.. highlight: bash

scxa-plots
==========

.. conda:recipe:: scxa-plots
   :replaces_section_title:
   :noindex:

   A set of wrappers to produce some bespoke plots used by the team behind Single\-cell Expresion Atlas \(SCXA\) in single\-cell RNA\-seq analysis. Not to be confused with the plots displayed in SCXA itself.

   :homepage: https://github.com/ebi-gene-expression-group/scxa-plots
   :license: Apache / Apache-2.0
   :recipe: /`scxa-plots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots/meta.yaml>`_

   


.. conda:package:: scxa-plots

   |downloads_scxa-plots| |docker_scxa-plots|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bioconductor-delayedarray: 
   :depends bioconductor-dropletutils: 
   :depends font-ttf-dejavu-sans-mono: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-optparse: 
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

      mamba install scxa-plots

   and update with::

      mamba update scxa-plots

  To create a new environment, run::

      mamba create --name myenvname scxa-plots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scxa-plots:<tag>

   (see `scxa-plots/tags`_ for valid values for ``<tag>``)


.. |downloads_scxa-plots| image:: https://img.shields.io/conda/dn/bioconda/scxa-plots.svg?style=flat
   :target: https://anaconda.org/bioconda/scxa-plots
   :alt:   (downloads)
.. |docker_scxa-plots| image:: https://quay.io/repository/biocontainers/scxa-plots/status
   :target: https://quay.io/repository/biocontainers/scxa-plots
.. _`scxa-plots/tags`: https://quay.io/repository/biocontainers/scxa-plots?tab=tags


.. raw:: html

    <script>
        var package = "scxa-plots";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scxa-plots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scxa-plots/README.html