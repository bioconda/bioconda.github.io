:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphaligner'
.. highlight: bash

graphaligner
============

.. conda:recipe:: graphaligner
   :replaces_section_title:
   :noindex:

   Sequence to graph aligner for long reads

   :homepage: https://github.com/maickrau/GraphAligner
   :license: MIT
   :recipe: /`graphaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner/meta.yaml>`_

   


.. conda:package:: graphaligner

   |downloads_graphaligner| |docker_graphaligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.17-0</code>,  <code>1.0.17b-2</code>,  <code>1.0.17b-1</code>,  <code>1.0.17b-0</code>,  <code>1.0.16-1</code>,  <code>1.0.16-0</code>,  <code>1.0.15-1</code>,  <code>1.0.15-0</code>,  <code>1.0.14-1</code>,  </span></summary>
      

      ``1.0.17-0``,  ``1.0.17b-2``,  ``1.0.17b-1``,  ``1.0.17b-0``,  ``1.0.16-1``,  ``1.0.16-0``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install graphaligner

   and update with::

      mamba update graphaligner

  To create a new environment, run::

      mamba create --name myenvname graphaligner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphaligner:<tag>

   (see `graphaligner/tags`_ for valid values for ``<tag>``)


.. |downloads_graphaligner| image:: https://img.shields.io/conda/dn/bioconda/graphaligner.svg?style=flat
   :target: https://anaconda.org/bioconda/graphaligner
   :alt:   (downloads)
.. |docker_graphaligner| image:: https://quay.io/repository/biocontainers/graphaligner/status
   :target: https://quay.io/repository/biocontainers/graphaligner
.. _`graphaligner/tags`: https://quay.io/repository/biocontainers/graphaligner?tab=tags


.. raw:: html

    <script>
        var package = "graphaligner";
        var versions = ["1.0.17","1.0.17b","1.0.17b","1.0.17b","1.0.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphaligner/README.html