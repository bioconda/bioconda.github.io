:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigscape'
.. highlight: bash

bigscape
========

.. conda:recipe:: bigscape
   :replaces_section_title:
   :noindex:

   Biosynthetic Genes Similarity Clustering and Prospecting Engine.

   :homepage: https://github.com/medema-group/BiG-SCAPE
   :documentation: https://github.com/medema-group/BiG-SCAPE/wiki
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`bigscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigscape/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41589-019-0400-9`

   


.. conda:package:: bigscape

   |downloads_bigscape| |docker_bigscape|

   :versions:
      
      

      ``2.0.0-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends fasttree: 
   :depends importlib-metadata: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyhmmer: 
   :depends python: ``>=3.11``
   :depends pyyaml: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends sortedcontainers: 
   :depends sourmash_plugin_branchwater: 
   :depends sqlalchemy: ``>=2.0.2``
   :depends tqdm: 
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

      mamba install bigscape

   and update with::

      mamba update bigscape

  To create a new environment, run::

      mamba create --name myenvname bigscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigscape:<tag>

   (see `bigscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bigscape| image:: https://img.shields.io/conda/dn/bioconda/bigscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bigscape
   :alt:   (downloads)
.. |docker_bigscape| image:: https://quay.io/repository/biocontainers/bigscape/status
   :target: https://quay.io/repository/biocontainers/bigscape
.. _`bigscape/tags`: https://quay.io/repository/biocontainers/bigscape?tab=tags


.. raw:: html

    <script>
        var package = "bigscape";
        var versions = ["2.0.0","1.1.9","1.1.8","1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigscape/README.html