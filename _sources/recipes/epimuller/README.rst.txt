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
      
      

      ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends cairosvg: ``>=2.4``
   :depends ete3: ``>=3.1``
   :depends pycairo: ``>=1.20``
   :depends python: ``>3.7``
   :depends svgwrite: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epimuller

   and update with::

      conda update epimuller

   or use the docker container::

      docker pull quay.io/biocontainers/epimuller:<tag>

   (see `epimuller/tags`_ for valid values for ``<tag>``)


.. |downloads_epimuller| image:: https://img.shields.io/conda/dn/bioconda/epimuller.svg?style=flat
   :target: https://anaconda.org/bioconda/epimuller
   :alt:   (downloads)
.. |docker_epimuller| image:: https://quay.io/repository/biocontainers/epimuller/status
   :target: https://quay.io/repository/biocontainers/epimuller
.. _`epimuller/tags`: https://quay.io/repository/biocontainers/epimuller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epimuller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epimuller/README.html