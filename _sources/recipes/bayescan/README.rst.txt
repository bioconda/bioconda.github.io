:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayescan'
.. highlight: bash

bayescan
========

.. conda:recipe:: bayescan
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://cmpg.unibe.ch/software/BayeScan/
   :license: GPL
   :recipe: /`bayescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescan/meta.yaml>`_

   


.. conda:package:: bayescan

   |downloads_bayescan| |docker_bayescan|

   :versions:
      
      

      ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install bayescan

   and update with::

      mamba update bayescan

  To create a new environment, run::

      mamba create --name myenvname bayescan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bayescan:<tag>

   (see `bayescan/tags`_ for valid values for ``<tag>``)


.. |downloads_bayescan| image:: https://img.shields.io/conda/dn/bioconda/bayescan.svg?style=flat
   :target: https://anaconda.org/bioconda/bayescan
   :alt:   (downloads)
.. |docker_bayescan| image:: https://quay.io/repository/biocontainers/bayescan/status
   :target: https://quay.io/repository/biocontainers/bayescan
.. _`bayescan/tags`: https://quay.io/repository/biocontainers/bayescan?tab=tags


.. raw:: html

    <script>
        var package = "bayescan";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayescan/README.html