:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncopipe'
.. highlight: bash

oncopipe
========

.. conda:recipe:: oncopipe
   :replaces_section_title:
   :noindex:

   Functions for running Snakemake modules

   :homepage: https://github.com/LCR-BCCRC/lcr-modules
   :documentation: https://lcr-modules.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`oncopipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncopipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncopipe/meta.yaml>`_

   


.. conda:package:: oncopipe

   |downloads_oncopipe| |docker_oncopipe|

   :versions:
      
      

      ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.8-0``,  ``1.0.7-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends snakemake: ``>=5.4,<5.19``
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

      mamba install oncopipe

   and update with::

      mamba update oncopipe

  To create a new environment, run::

      mamba create --name myenvname oncopipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oncopipe:<tag>

   (see `oncopipe/tags`_ for valid values for ``<tag>``)


.. |downloads_oncopipe| image:: https://img.shields.io/conda/dn/bioconda/oncopipe.svg?style=flat
   :target: https://anaconda.org/bioconda/oncopipe
   :alt:   (downloads)
.. |docker_oncopipe| image:: https://quay.io/repository/biocontainers/oncopipe/status
   :target: https://quay.io/repository/biocontainers/oncopipe
.. _`oncopipe/tags`: https://quay.io/repository/biocontainers/oncopipe?tab=tags


.. raw:: html

    <script>
        var package = "oncopipe";
        var versions = ["1.0.12","1.0.11","1.0.10","1.0.8","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncopipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncopipe/README.html