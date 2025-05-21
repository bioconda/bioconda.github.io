:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdrpcatch'
.. highlight: bash

rdrpcatch
=========

.. conda:recipe:: rdrpcatch
   :replaces_section_title:
   :noindex:

   RNA virus RdRp sequence scanner.

   :homepage: https://github.com/dimitris-karapliafis/RdRpCATCH
   :license: MIT / MIT
   :recipe: /`rdrpcatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdrpcatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdrpcatch/meta.yaml>`_

   RdRpCATCH \(RNA\-dependent RNA polymerase Collaborative Analysis Tool with Collections of pHMMs\) 
   is a tool for scanning sequences for RNA\-dependent RNA polymerases \(RdRps\) using profile HMMs.



.. conda:package:: rdrpcatch

   |downloads_rdrpcatch| |docker_rdrpcatch|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.1-0``

      

   
   :depends altair: ``5.5.0``
   :depends matplotlib-base: ``3.10.1``
   :depends mmseqs2: ``17.b804f``
   :depends needletail: ``0.6.3``
   :depends polars: ``1.26.0``
   :depends pyhmmer: ``0.11.0``
   :depends python: ``>=3.12``
   :depends requests: ``2.32.3``
   :depends rich: ``13.9.4``
   :depends rich-click: ``1.8.8``
   :depends seqkit: ``2.10.0``
   :depends upsetplot: ``0.9.0``
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

      mamba install rdrpcatch

   and update with::

      mamba update rdrpcatch

  To create a new environment, run::

      mamba create --name myenvname rdrpcatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdrpcatch:<tag>

   (see `rdrpcatch/tags`_ for valid values for ``<tag>``)


.. |downloads_rdrpcatch| image:: https://img.shields.io/conda/dn/bioconda/rdrpcatch.svg?style=flat
   :target: https://anaconda.org/bioconda/rdrpcatch
   :alt:   (downloads)
.. |docker_rdrpcatch| image:: https://quay.io/repository/biocontainers/rdrpcatch/status
   :target: https://quay.io/repository/biocontainers/rdrpcatch
.. _`rdrpcatch/tags`: https://quay.io/repository/biocontainers/rdrpcatch?tab=tags


.. raw:: html

    <script>
        var package = "rdrpcatch";
        var versions = ["0.0.7","0.0.6","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdrpcatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdrpcatch/README.html