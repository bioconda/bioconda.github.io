:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbpipe'
.. highlight: bash

sbpipe
======

.. conda:recipe:: sbpipe
   :replaces_section_title:

   SBpipe is a collection of pipelines for systems modelling of biological networks. It allows mathematical modellers to automatically repeat the tasks of model simulation and parameter estimation\, and extract robustness information from these repeat sequences in a solid and consistent manner\, facilitating model development and analysis. SBpipe can run models implemented in COPASI\, Python or coded in any other programming language using Python as a wrapper module. Pipelines can run on multicore computers\, Sun Grid Engine \(SGE\)\, Load Sharing Facility \(LSF\) clusters\, or via Snakemake.

   :homepage: http://sbpipe.readthedocs.io
   :license: MIT
   :recipe: /`sbpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: sbpipe

   |downloads_sbpipe| |docker_sbpipe|

   :versions: 4.21.0-0, 4.20.0-0, 4.18.0-0
   
   :depends colorlog: 
   
   :depends python: 
   
   :depends pyyaml: 
   
   :depends r-sbpiper: 1.8.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sbpipe

   and update with::

      conda update sbpipe

   or use the docker container::

      docker pull quay.io/biocontainers/sbpipe:<tag>

   (see `sbpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_sbpipe| image:: https://img.shields.io/conda/dn/bioconda/sbpipe.svg?style=flat
   :alt:   (downloads)
.. |docker_sbpipe| image:: https://quay.io/repository/biocontainers/sbpipe/status
   :target: https://quay.io/repository/biocontainers/sbpipe
.. _`sbpipe/tags`: https://quay.io/repository/biocontainers/sbpipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbpipe/README.html