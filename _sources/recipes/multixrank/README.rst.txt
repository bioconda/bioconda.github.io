:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multixrank'
.. highlight: bash

multixrank
==========

.. conda:recipe:: multixrank
   :replaces_section_title:
   :noindex:

   MultiXrank \- heterogeneous MULTIlayer eXploration by RANdom walK with restart. MultiXrank is a Python package for the exploration of heterogeneous multilayer networks\, with random walk with restart method. It permits prioritization of nodes between full heterogeneous networks\, whatever their complexities.

   :homepage: https://multixrank.readthedocs.io
   :license: MIT
   :recipe: /`multixrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multixrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multixrank/meta.yaml>`_

   


.. conda:package:: multixrank

   |downloads_multixrank| |docker_multixrank|

   :versions:
      
      

      ``0.1-1``

      

   
   :depends networkx: ``2.5``
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends python: 
   :depends pyyaml: 
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

      mamba install multixrank

   and update with::

      mamba update multixrank

  To create a new environment, run::

      mamba create --name myenvname multixrank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multixrank:<tag>

   (see `multixrank/tags`_ for valid values for ``<tag>``)


.. |downloads_multixrank| image:: https://img.shields.io/conda/dn/bioconda/multixrank.svg?style=flat
   :target: https://anaconda.org/bioconda/multixrank
   :alt:   (downloads)
.. |docker_multixrank| image:: https://quay.io/repository/biocontainers/multixrank/status
   :target: https://quay.io/repository/biocontainers/multixrank
.. _`multixrank/tags`: https://quay.io/repository/biocontainers/multixrank?tab=tags


.. raw:: html

    <script>
        var package = "multixrank";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multixrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multixrank/README.html