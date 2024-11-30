:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyham'
.. highlight: bash

pyham
=====

.. conda:recipe:: pyham
   :replaces_section_title:
   :noindex:

   A tool to analyse Hierarchical Orthologous Groups \(HOGs\)

   :homepage: https://github.com/DessimozLab/pyham
   :license: MIT
   :recipe: /`pyham <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyham>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyham/meta.yaml>`_

   


.. conda:package:: pyham

   |downloads_pyham| |docker_pyham|

   :versions:
      
      

      ``1.1.11-0``

      

   
   :depends ete3: 
   :depends future: 
   :depends lxml: 
   :depends numpy: 
   :depends python: 
   :depends requests: 
   :depends scipy: 
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

      mamba install pyham

   and update with::

      mamba update pyham

  To create a new environment, run::

      mamba create --name myenvname pyham

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyham:<tag>

   (see `pyham/tags`_ for valid values for ``<tag>``)


.. |downloads_pyham| image:: https://img.shields.io/conda/dn/bioconda/pyham.svg?style=flat
   :target: https://anaconda.org/bioconda/pyham
   :alt:   (downloads)
.. |docker_pyham| image:: https://quay.io/repository/biocontainers/pyham/status
   :target: https://quay.io/repository/biocontainers/pyham
.. _`pyham/tags`: https://quay.io/repository/biocontainers/pyham?tab=tags


.. raw:: html

    <script>
        var package = "pyham";
        var versions = ["1.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyham/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyham/README.html