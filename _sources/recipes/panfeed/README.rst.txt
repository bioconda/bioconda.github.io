:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panfeed'
.. highlight: bash

panfeed
=======

.. conda:recipe:: panfeed
   :replaces_section_title:
   :noindex:

   Compute gene\-cluster specific k\-mers over a pangenome

   :homepage: https://github.com/microbial-pangenomes-lab/panfeed
   :license: APACHE / Apache-2.0
   :recipe: /`panfeed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed/meta.yaml>`_

   


.. conda:package:: panfeed

   |downloads_panfeed| |docker_panfeed|

   :versions:
      
      

      ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: ``>=3.6``
   :depends seaborn-base: 
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

      mamba install panfeed

   and update with::

      mamba update panfeed

  To create a new environment, run::

      mamba create --name myenvname panfeed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panfeed:<tag>

   (see `panfeed/tags`_ for valid values for ``<tag>``)


.. |downloads_panfeed| image:: https://img.shields.io/conda/dn/bioconda/panfeed.svg?style=flat
   :target: https://anaconda.org/bioconda/panfeed
   :alt:   (downloads)
.. |docker_panfeed| image:: https://quay.io/repository/biocontainers/panfeed/status
   :target: https://quay.io/repository/biocontainers/panfeed
.. _`panfeed/tags`: https://quay.io/repository/biocontainers/panfeed?tab=tags


.. raw:: html

    <script>
        var package = "panfeed";
        var versions = ["1.6.2","1.6.1","1.6.0","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panfeed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panfeed/README.html