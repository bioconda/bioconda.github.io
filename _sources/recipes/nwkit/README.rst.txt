:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nwkit'
.. highlight: bash

nwkit
=====

.. conda:recipe:: nwkit
   :replaces_section_title:
   :noindex:

   Tools for processing newick trees

   :homepage: https://github.com/kfuku52/nwkit
   :license: BSD-3-Clause
   :recipe: /`nwkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwkit/meta.yaml>`_

   


.. conda:package:: nwkit

   |downloads_nwkit| |docker_nwkit|

   :versions:
      
      

      ``0.19.2-0``,  ``0.18.2-1``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.2-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
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

      mamba install nwkit

   and update with::

      mamba update nwkit

  To create a new environment, run::

      mamba create --name myenvname nwkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nwkit:<tag>

   (see `nwkit/tags`_ for valid values for ``<tag>``)


.. |downloads_nwkit| image:: https://img.shields.io/conda/dn/bioconda/nwkit.svg?style=flat
   :target: https://anaconda.org/bioconda/nwkit
   :alt:   (downloads)
.. |docker_nwkit| image:: https://quay.io/repository/biocontainers/nwkit/status
   :target: https://quay.io/repository/biocontainers/nwkit
.. _`nwkit/tags`: https://quay.io/repository/biocontainers/nwkit?tab=tags


.. raw:: html

    <script>
        var package = "nwkit";
        var versions = ["0.19.2","0.18.2","0.18.2","0.18.1","0.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nwkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nwkit/README.html