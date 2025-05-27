:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv-notebook'
.. highlight: bash

igv-notebook
============

.. conda:recipe:: igv-notebook
   :replaces_section_title:
   :noindex:

   Package for embedding the igv.js genome visualization in IPython notebooks.

   :homepage: https://github.com/igvteam/igv-notebook
   :license: MIT / MIT
   :recipe: /`igv-notebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-notebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-notebook/meta.yaml>`_

   


.. conda:package:: igv-notebook

   |downloads_igv-notebook| |docker_igv-notebook|

   :versions:
      
      

      ``0.6.2-0``

      

   
   :depends ipykernel: 
   :depends ipython: 
   :depends python: ``>=3``
   :depends requests: 
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

      mamba install igv-notebook

   and update with::

      mamba update igv-notebook

  To create a new environment, run::

      mamba create --name myenvname igv-notebook

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igv-notebook:<tag>

   (see `igv-notebook/tags`_ for valid values for ``<tag>``)


.. |downloads_igv-notebook| image:: https://img.shields.io/conda/dn/bioconda/igv-notebook.svg?style=flat
   :target: https://anaconda.org/bioconda/igv-notebook
   :alt:   (downloads)
.. |docker_igv-notebook| image:: https://quay.io/repository/biocontainers/igv-notebook/status
   :target: https://quay.io/repository/biocontainers/igv-notebook
.. _`igv-notebook/tags`: https://quay.io/repository/biocontainers/igv-notebook?tab=tags


.. raw:: html

    <script>
        var package = "igv-notebook";
        var versions = ["0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv-notebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv-notebook/README.html