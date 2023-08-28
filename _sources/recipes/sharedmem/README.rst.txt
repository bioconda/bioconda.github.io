:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sharedmem'
.. highlight: bash

sharedmem
=========

.. conda:recipe:: sharedmem
   :replaces_section_title:
   :noindex:

   Dispatch your trivially parallizable jobs with sharedmem. 

   :homepage: http://github.com/rainwoodman/sharedmem
   :license: GPL / GPL-3.0
   :recipe: /`sharedmem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharedmem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharedmem/meta.yaml>`_

   


.. conda:package:: sharedmem

   |downloads_sharedmem| |docker_sharedmem|

   :versions:
      
      

      ``0.3.6-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends numpy: 
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

      mamba install sharedmem

   and update with::

      mamba update sharedmem

  To create a new environment, run::

      mamba create --name myenvname sharedmem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sharedmem:<tag>

   (see `sharedmem/tags`_ for valid values for ``<tag>``)


.. |downloads_sharedmem| image:: https://img.shields.io/conda/dn/bioconda/sharedmem.svg?style=flat
   :target: https://anaconda.org/bioconda/sharedmem
   :alt:   (downloads)
.. |docker_sharedmem| image:: https://quay.io/repository/biocontainers/sharedmem/status
   :target: https://quay.io/repository/biocontainers/sharedmem
.. _`sharedmem/tags`: https://quay.io/repository/biocontainers/sharedmem?tab=tags


.. raw:: html

    <script>
        var package = "sharedmem";
        var versions = ["0.3.6","0.3.5","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sharedmem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sharedmem/README.html