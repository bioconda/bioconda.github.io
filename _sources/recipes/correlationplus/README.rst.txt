:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'correlationplus'
.. highlight: bash

correlationplus
===============

.. conda:recipe:: correlationplus
   :replaces_section_title:
   :noindex:

   A Python package to calculate\, visualize and analyze dynamical correlations of proteins.

   :homepage: https://github.com/tekpinar/correlationplus
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`correlationplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus/meta.yaml>`_

   


.. conda:package:: correlationplus

   |downloads_correlationplus| |docker_correlationplus|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.6-0``

      

   
   :depends matplotlib-base: 
   :depends mdanalysis: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends prody: 
   :depends python: 
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

      mamba install correlationplus

   and update with::

      mamba update correlationplus

  To create a new environment, run::

      mamba create --name myenvname correlationplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/correlationplus:<tag>

   (see `correlationplus/tags`_ for valid values for ``<tag>``)


.. |downloads_correlationplus| image:: https://img.shields.io/conda/dn/bioconda/correlationplus.svg?style=flat
   :target: https://anaconda.org/bioconda/correlationplus
   :alt:   (downloads)
.. |docker_correlationplus| image:: https://quay.io/repository/biocontainers/correlationplus/status
   :target: https://quay.io/repository/biocontainers/correlationplus
.. _`correlationplus/tags`: https://quay.io/repository/biocontainers/correlationplus?tab=tags


.. raw:: html

    <script>
        var package = "correlationplus";
        var versions = ["0.2.1","0.2.0","0.2.0","0.1.9","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/correlationplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/correlationplus/README.html