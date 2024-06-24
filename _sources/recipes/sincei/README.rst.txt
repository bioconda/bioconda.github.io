:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sincei'
.. highlight: bash

sincei
======

.. conda:recipe:: sincei
   :replaces_section_title:
   :noindex:

   A user\-friendly toolkit for QC\, counting\, clustering and plotting of single\-cell \(epi\)genomics data.

   :homepage: https://github.com/bhardwaj-lab/sincei
   :license: MIT
   :recipe: /`sincei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sincei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sincei/meta.yaml>`_
   :links: biotools: :biotools:`sincei`, doi: :doi:`10.5281/zenodo.8105536`

   


.. conda:package:: sincei

   |downloads_sincei| |docker_sincei|

   :versions:
      
      

      ``0.4-0``,  ``0.3.1-0``

      

   
   :depends deeptools: 
   :depends gensim: 
   :depends importlib-metadata: 
   :depends leidenalg: 
   :depends loompy: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends python-igraph: 
   :depends scanpy: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sincei

   and update with::

      mamba update sincei

  To create a new environment, run::

      mamba create --name myenvname sincei

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sincei:<tag>

   (see `sincei/tags`_ for valid values for ``<tag>``)


.. |downloads_sincei| image:: https://img.shields.io/conda/dn/bioconda/sincei.svg?style=flat
   :target: https://anaconda.org/bioconda/sincei
   :alt:   (downloads)
.. |docker_sincei| image:: https://quay.io/repository/biocontainers/sincei/status
   :target: https://quay.io/repository/biocontainers/sincei
.. _`sincei/tags`: https://quay.io/repository/biocontainers/sincei?tab=tags


.. raw:: html

    <script>
        var package = "sincei";
        var versions = ["0.4","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sincei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sincei/README.html