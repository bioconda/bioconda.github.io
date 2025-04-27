:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ice-cream'
.. highlight: bash

ice-cream
=========

.. conda:recipe:: ice-cream
   :replaces_section_title:
   :noindex:

   ICEcream\: Integrative and Conjugative Elements Classification and gRaphical gEne Arrangement Method.

   :homepage: https://github.com/xinehc/ice-cream
   :license: MIT / MIT
   :recipe: /`ice-cream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ice-cream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ice-cream/meta.yaml>`_

   


.. conda:package:: ice-cream

   |downloads_ice-cream| |docker_ice-cream|

   :versions:
      
      

      ``2.0.0-0``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends bakta: ``1.9.4``
   :depends biopython: 
   :depends blast: ``2.16.0``
   :depends dna_features_viewer: 
   :depends macsyfinder: ``2.1.4``
   :depends pandas: 
   :depends prodigal: ``2.6.3``
   :depends python: ``3.10.14``
   :depends r-base: 
   :depends r-essentials: 
   :depends r-reshape2: 
   :depends vmatch: ``2.3.0``
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

      mamba install ice-cream

   and update with::

      mamba update ice-cream

  To create a new environment, run::

      mamba create --name myenvname ice-cream

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ice-cream:<tag>

   (see `ice-cream/tags`_ for valid values for ``<tag>``)


.. |downloads_ice-cream| image:: https://img.shields.io/conda/dn/bioconda/ice-cream.svg?style=flat
   :target: https://anaconda.org/bioconda/ice-cream
   :alt:   (downloads)
.. |docker_ice-cream| image:: https://quay.io/repository/biocontainers/ice-cream/status
   :target: https://quay.io/repository/biocontainers/ice-cream
.. _`ice-cream/tags`: https://quay.io/repository/biocontainers/ice-cream?tab=tags


.. raw:: html

    <script>
        var package = "ice-cream";
        var versions = ["2.0.0","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ice-cream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ice-cream/README.html