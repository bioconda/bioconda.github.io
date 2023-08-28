:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clonalframeml'
.. highlight: bash

clonalframeml
=============

.. conda:recipe:: clonalframeml
   :replaces_section_title:
   :noindex:

   Efficient inferencing of recombination in bacterial genomes

   :homepage: https://github.com/xavierdidelot/ClonalFrameML
   :license: GPLv3
   :recipe: /`clonalframeml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml/meta.yaml>`_

   


.. conda:package:: clonalframeml

   |downloads_clonalframeml| |docker_clonalframeml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12-4</code>,  <code>1.12-3</code>,  <code>1.12-2</code>,  <code>1.12-1</code>,  <code>1.12-0</code>,  <code>1.11-6</code>,  <code>1.11-5</code>,  <code>1.11-4</code>,  <code>1.11-3</code>,  </span></summary>
      

      ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``,  ``1.11-6``,  ``1.11-5``,  ``1.11-4``,  ``1.11-3``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install clonalframeml

   and update with::

      mamba update clonalframeml

  To create a new environment, run::

      mamba create --name myenvname clonalframeml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clonalframeml:<tag>

   (see `clonalframeml/tags`_ for valid values for ``<tag>``)


.. |downloads_clonalframeml| image:: https://img.shields.io/conda/dn/bioconda/clonalframeml.svg?style=flat
   :target: https://anaconda.org/bioconda/clonalframeml
   :alt:   (downloads)
.. |docker_clonalframeml| image:: https://quay.io/repository/biocontainers/clonalframeml/status
   :target: https://quay.io/repository/biocontainers/clonalframeml
.. _`clonalframeml/tags`: https://quay.io/repository/biocontainers/clonalframeml?tab=tags


.. raw:: html

    <script>
        var package = "clonalframeml";
        var versions = ["1.12","1.12","1.12","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clonalframeml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clonalframeml/README.html