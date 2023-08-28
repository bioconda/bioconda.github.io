:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epimuller'
.. highlight: bash

epimuller
=========

.. conda:recipe:: epimuller
   :replaces_section_title:
   :noindex:

   Visualize lineages overtime\, with phylogentic context\, based on viral genomes

   :homepage: https://github.com/jennifer-bio/epimuller
   :license: MIT License
   :recipe: /`epimuller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epimuller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epimuller/meta.yaml>`_

   \# epiMuller 

   \#\#\#\#\# About

   \#\#\#\#\#\# Author
   Jennifer L Havens

   \#\#\#\#\#\# Purpose
   Visualize lineages overtime\, with phylogentic context\, based on viral genomes

   \#\#\#\#\#\# Language
   Python3

   \#\#\#\#\#\# Inputs
   Alingment\, collection date\, PANGO lineage\, Nextstain JSON files\, and timetree

   \#\#\#\#\#\# Source code avaliblity
   \[gitHub\]\(https\:\/\/github.com\/jennifer\-bio\/epimuller\)

   \#\#\#\#\#\# Documentation avaliblity 
   \[Read the Docs\]\(https\:\/\/epimuller.readthedocs.io\/en\/stable\/\)



.. conda:package:: epimuller

   |downloads_epimuller| |docker_epimuller|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends cairosvg: ``>=2.4``
   :depends ete3: ``>=3.1``
   :depends pycairo: ``>=1.20``
   :depends python: ``>3.7``
   :depends svgwrite: ``>=1.4``
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

      mamba install epimuller

   and update with::

      mamba update epimuller

  To create a new environment, run::

      mamba create --name myenvname epimuller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epimuller:<tag>

   (see `epimuller/tags`_ for valid values for ``<tag>``)


.. |downloads_epimuller| image:: https://img.shields.io/conda/dn/bioconda/epimuller.svg?style=flat
   :target: https://anaconda.org/bioconda/epimuller
   :alt:   (downloads)
.. |docker_epimuller| image:: https://quay.io/repository/biocontainers/epimuller/status
   :target: https://quay.io/repository/biocontainers/epimuller
.. _`epimuller/tags`: https://quay.io/repository/biocontainers/epimuller?tab=tags


.. raw:: html

    <script>
        var package = "epimuller";
        var versions = ["0.0.8","0.0.7","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epimuller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epimuller/README.html