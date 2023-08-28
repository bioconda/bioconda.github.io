:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbpipe'
.. highlight: bash

sbpipe
======

.. conda:recipe:: sbpipe
   :replaces_section_title:
   :noindex:

   SBpipe is a collection of pipelines for systems modelling of biological networks. It allows mathematical modellers to automatically repeat the tasks of model simulation and parameter estimation\, and extract robustness information from these repeat sequences in a solid and consistent manner\, facilitating model development and analysis. SBpipe can run models implemented in COPASI\, Python or coded in any other programming language using Python as a wrapper module. Pipelines can run on multicore computers\, Sun Grid Engine \(SGE\)\, Load Sharing Facility \(LSF\) clusters\, or via Snakemake.

   :homepage: http://sbpipe.readthedocs.io
   :license: MIT
   :recipe: /`sbpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: sbpipe

   |downloads_sbpipe| |docker_sbpipe|

   :versions:
      
      

      ``4.21.0-1``,  ``4.21.0-0``,  ``4.20.0-0``,  ``4.18.0-0``

      

   
   :depends colorlog: 
   :depends python: 
   :depends pyyaml: 
   :depends r-sbpiper: ``1.8.*``
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

      mamba install sbpipe

   and update with::

      mamba update sbpipe

  To create a new environment, run::

      mamba create --name myenvname sbpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sbpipe:<tag>

   (see `sbpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_sbpipe| image:: https://img.shields.io/conda/dn/bioconda/sbpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/sbpipe
   :alt:   (downloads)
.. |docker_sbpipe| image:: https://quay.io/repository/biocontainers/sbpipe/status
   :target: https://quay.io/repository/biocontainers/sbpipe
.. _`sbpipe/tags`: https://quay.io/repository/biocontainers/sbpipe?tab=tags


.. raw:: html

    <script>
        var package = "sbpipe";
        var versions = ["4.21.0","4.21.0","4.20.0","4.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbpipe/README.html