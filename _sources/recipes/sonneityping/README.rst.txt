:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonneityping'
.. highlight: bash

sonneityping
============

.. conda:recipe:: sonneityping
   :replaces_section_title:
   :noindex:

   Sonneityping parses the output of mykrobe predict for Shigella sonnei

   :homepage: https://github.com/katholt/sonneityping
   :license: None
   :recipe: /`sonneityping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonneityping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonneityping/meta.yaml>`_

   


.. conda:package:: sonneityping

   |downloads_sonneityping| |docker_sonneityping|

   :versions:
      
      

      ``20210201-0``

      

   
   :depends pandas: 
   :depends python: 
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

      mamba install sonneityping

   and update with::

      mamba update sonneityping

  To create a new environment, run::

      mamba create --name myenvname sonneityping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sonneityping:<tag>

   (see `sonneityping/tags`_ for valid values for ``<tag>``)


.. |downloads_sonneityping| image:: https://img.shields.io/conda/dn/bioconda/sonneityping.svg?style=flat
   :target: https://anaconda.org/bioconda/sonneityping
   :alt:   (downloads)
.. |docker_sonneityping| image:: https://quay.io/repository/biocontainers/sonneityping/status
   :target: https://quay.io/repository/biocontainers/sonneityping
.. _`sonneityping/tags`: https://quay.io/repository/biocontainers/sonneityping?tab=tags


.. raw:: html

    <script>
        var package = "sonneityping";
        var versions = ["20210201"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonneityping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonneityping/README.html