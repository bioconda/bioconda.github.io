:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphclust-wrappers'
.. highlight: bash

graphclust-wrappers
===================

.. conda:recipe:: graphclust-wrappers
   :replaces_section_title:
   :noindex:

   The set of individual perl wrappers extracted from GraphClust pipeline

   :homepage: http://www.bioinf.uni-freiburg.de/Software/GraphClust/
   :license: GPLv3
   :recipe: /`graphclust-wrappers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphclust-wrappers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphclust-wrappers/meta.yaml>`_

   


.. conda:package:: graphclust-wrappers

   |downloads_graphclust-wrappers| |docker_graphclust-wrappers|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.6.0-2``,  ``0.6.0-1``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.70.0.*``
   :depends pandas: ``0.23.0.*``
   :depends perl: ``>=5.22.0``
   :depends perl-array-utils: 
   :depends perl-math-round: 
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

      mamba install graphclust-wrappers

   and update with::

      mamba update graphclust-wrappers

  To create a new environment, run::

      mamba create --name myenvname graphclust-wrappers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphclust-wrappers:<tag>

   (see `graphclust-wrappers/tags`_ for valid values for ``<tag>``)


.. |downloads_graphclust-wrappers| image:: https://img.shields.io/conda/dn/bioconda/graphclust-wrappers.svg?style=flat
   :target: https://anaconda.org/bioconda/graphclust-wrappers
   :alt:   (downloads)
.. |docker_graphclust-wrappers| image:: https://quay.io/repository/biocontainers/graphclust-wrappers/status
   :target: https://quay.io/repository/biocontainers/graphclust-wrappers
.. _`graphclust-wrappers/tags`: https://quay.io/repository/biocontainers/graphclust-wrappers?tab=tags


.. raw:: html

    <script>
        var package = "graphclust-wrappers";
        var versions = ["0.6.0","0.6.0","0.5.2","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphclust-wrappers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphclust-wrappers/README.html