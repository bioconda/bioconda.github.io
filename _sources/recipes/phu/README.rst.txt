:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phu'
.. highlight: bash

phu
===

.. conda:recipe:: phu
   :replaces_section_title:
   :noindex:

   Phage Utilities \(phu\)\: modular toolkit for clustering\, classifying\, and analyzing viral sequences.

   :homepage: https://github.com/camilogarciabotero/phu
   :documentation: https://camilogarciabotero.github.io/phu
   
   :license: MIT / MIT
   :recipe: /`phu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phu/meta.yaml>`_

   \*\*phu\*\* \(Phage Utilities\) is a Python toolkit designed for viral bioinformatics workflows. 
   It provides modular commands to handle tasks such as\:
     \* \`seqclust\`\: dereplication and clustering of viral contigs into vOTUs and putative species\-level groups.
     \* \`taxasimplify\`\: simplification and parsing of viral taxonomy assignments.



.. conda:package:: phu

   |downloads_phu| |docker_phu|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.1-0``

      

   
   :depends hmmer: 
   :depends mypy: 
   :depends pandas: 
   :depends pyrodigal: 
   :depends pytest: 
   :depends python: ``>=3.10``
   :depends ruff: 
   :depends seqkit: 
   :depends typer: 
   :depends vclust: 
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

      mamba install phu

   and update with::

      mamba update phu

  To create a new environment, run::

      mamba create --name myenvname phu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phu:<tag>

   (see `phu/tags`_ for valid values for ``<tag>``)


.. |downloads_phu| image:: https://img.shields.io/conda/dn/bioconda/phu.svg?style=flat
   :target: https://anaconda.org/bioconda/phu
   :alt:   (downloads)
.. |docker_phu| image:: https://quay.io/repository/biocontainers/phu/status
   :target: https://quay.io/repository/biocontainers/phu
.. _`phu/tags`: https://quay.io/repository/biocontainers/phu?tab=tags


.. raw:: html

    <script>
        var package = "phu";
        var versions = ["0.4.3","0.4.0","0.3.0","0.2.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phu/README.html