:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poseidon-trident'
.. highlight: bash

poseidon-trident
================

.. conda:recipe:: poseidon-trident
   :replaces_section_title:
   :noindex:

   A tool \(trident\) to work with modular genotype databases formatted using Poseidon.

   :homepage: https://www.poseidon-adna.org/#/
   :license: MIT
   :recipe: /`poseidon-trident <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident/meta.yaml>`_

   


.. conda:package:: poseidon-trident

   |downloads_poseidon-trident| |docker_poseidon-trident|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0.4-0</code>,  <code>1.2.0.0-0</code>,  <code>1.1.11.0-2</code>,  <code>1.1.11.0-1</code>,  <code>1.1.11.0-0</code>,  <code>1.1.6.0-0</code>,  <code>0.28.0-0</code>,  <code>0.26.3-1</code>,  <code>0.26.3-0</code>,  </span></summary>
      

      ``1.3.0.4-0``,  ``1.2.0.0-0``,  ``1.1.11.0-2``,  ``1.1.11.0-1``,  ``1.1.11.0-0``,  ``1.1.6.0-0``,  ``0.28.0-0``,  ``0.26.3-1``,  ``0.26.3-0``,  ``0.26.1-1``,  ``0.26.1-0``,  ``0.21.0-0``,  ``0.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install poseidon-trident

   and update with::

      mamba update poseidon-trident

  To create a new environment, run::

      mamba create --name myenvname poseidon-trident

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poseidon-trident:<tag>

   (see `poseidon-trident/tags`_ for valid values for ``<tag>``)


.. |downloads_poseidon-trident| image:: https://img.shields.io/conda/dn/bioconda/poseidon-trident.svg?style=flat
   :target: https://anaconda.org/bioconda/poseidon-trident
   :alt:   (downloads)
.. |docker_poseidon-trident| image:: https://quay.io/repository/biocontainers/poseidon-trident/status
   :target: https://quay.io/repository/biocontainers/poseidon-trident
.. _`poseidon-trident/tags`: https://quay.io/repository/biocontainers/poseidon-trident?tab=tags


.. raw:: html

    <script>
        var package = "poseidon-trident";
        var versions = ["1.3.0.4","1.2.0.0","1.1.11.0","1.1.11.0","1.1.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poseidon-trident/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poseidon-trident/README.html