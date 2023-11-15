:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chronumental'
.. highlight: bash

chronumental
============

.. conda:recipe:: chronumental
   :replaces_section_title:
   :noindex:

   Make time trees from large phylogenetic divergence trees

   :homepage: https://github.com/theosanderson/chronumental
   :license: MIT
   :recipe: /`chronumental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chronumental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chronumental/meta.yaml>`_

   


.. conda:package:: chronumental

   |downloads_chronumental| |docker_chronumental|

   :versions:
      
      

      ``0.0.63-0``,  ``0.0.61-0``,  ``0.0.50-0``,  ``0.0.49-0``,  ``0.0.48-0``,  ``0.0.47-0``

      

   
   :depends alive-progress: 
   :depends numpyro: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends treeswift: 
   :depends xopen: 
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

      mamba install chronumental

   and update with::

      mamba update chronumental

  To create a new environment, run::

      mamba create --name myenvname chronumental

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chronumental:<tag>

   (see `chronumental/tags`_ for valid values for ``<tag>``)


.. |downloads_chronumental| image:: https://img.shields.io/conda/dn/bioconda/chronumental.svg?style=flat
   :target: https://anaconda.org/bioconda/chronumental
   :alt:   (downloads)
.. |docker_chronumental| image:: https://quay.io/repository/biocontainers/chronumental/status
   :target: https://quay.io/repository/biocontainers/chronumental
.. _`chronumental/tags`: https://quay.io/repository/biocontainers/chronumental?tab=tags


.. raw:: html

    <script>
        var package = "chronumental";
        var versions = ["0.0.63","0.0.61","0.0.50","0.0.49","0.0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chronumental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chronumental/README.html