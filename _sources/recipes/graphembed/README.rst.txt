:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphembed'
.. highlight: bash

graphembed
==========

.. conda:recipe:: graphembed
   :replaces_section_title:
   :noindex:

   Efficient and Robust Graph\/Network Embedding via High\-Order Proximity Preservation or Recursive Sketching.

   :homepage: https://github.com/jianshu93/graphembed
   :license: MIT / MIT
   :recipe: /`graphembed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphembed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphembed/meta.yaml>`_

   


.. conda:package:: graphembed

   |downloads_graphembed| |docker_graphembed|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblapacke: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends openblas: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install graphembed

   and update with::

      mamba update graphembed

  To create a new environment, run::

      mamba create --name myenvname graphembed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphembed:<tag>

   (see `graphembed/tags`_ for valid values for ``<tag>``)


.. |downloads_graphembed| image:: https://img.shields.io/conda/dn/bioconda/graphembed.svg?style=flat
   :target: https://anaconda.org/bioconda/graphembed
   :alt:   (downloads)
.. |docker_graphembed| image:: https://quay.io/repository/biocontainers/graphembed/status
   :target: https://quay.io/repository/biocontainers/graphembed
.. _`graphembed/tags`: https://quay.io/repository/biocontainers/graphembed?tab=tags


.. raw:: html

    <script>
        var package = "graphembed";
        var versions = ["0.1.7","0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphembed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphembed/README.html