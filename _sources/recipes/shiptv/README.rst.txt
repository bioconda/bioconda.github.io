:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiptv'
.. highlight: bash

shiptv
======

.. conda:recipe:: shiptv
   :replaces_section_title:
   :noindex:

   Generate a standalone HTML file with an interactive phylogenetic tree using PhyloCanvas

   :homepage: https://github.com/peterk87/shiptv
   :license: APACHE / Apache Software License
   :recipe: /`shiptv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiptv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiptv/meta.yaml>`_

   


.. conda:package:: shiptv

   |downloads_shiptv| |docker_shiptv|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends jinja2: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends rich: 
   :depends typer: ``>=0.3.2``
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

      mamba install shiptv

   and update with::

      mamba update shiptv

  To create a new environment, run::

      mamba create --name myenvname shiptv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shiptv:<tag>

   (see `shiptv/tags`_ for valid values for ``<tag>``)


.. |downloads_shiptv| image:: https://img.shields.io/conda/dn/bioconda/shiptv.svg?style=flat
   :target: https://anaconda.org/bioconda/shiptv
   :alt:   (downloads)
.. |docker_shiptv| image:: https://quay.io/repository/biocontainers/shiptv/status
   :target: https://quay.io/repository/biocontainers/shiptv
.. _`shiptv/tags`: https://quay.io/repository/biocontainers/shiptv?tab=tags


.. raw:: html

    <script>
        var package = "shiptv";
        var versions = ["0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiptv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiptv/README.html