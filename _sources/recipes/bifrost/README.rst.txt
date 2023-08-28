:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bifrost'
.. highlight: bash

bifrost
=======

.. conda:recipe:: bifrost
   :replaces_section_title:
   :noindex:

   Highly parallel construction and indexing of colored and compacted de Bruijn graphs

   :homepage: https://github.com/pmelsted/bifrost
   :license: BSD / BSD-2-Clause
   :recipe: /`bifrost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost/meta.yaml>`_
   :links: doi: :doi:`10.1101/695338`

   


.. conda:package:: bifrost

   |downloads_bifrost| |docker_bifrost|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.0.6.5-1</code>,  <code>1.0.6.5-0</code>,  <code>1.0.6.4-1</code>,  <code>1.0.6.4-0</code>,  <code>1.0.6.2-1</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.6.5-1``,  ``1.0.6.5-0``,  ``1.0.6.4-1``,  ``1.0.6.4-0``,  ``1.0.6.2-1``,  ``1.0.6.2-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pthread-stubs: 
   :depends zlib: 
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

      mamba install bifrost

   and update with::

      mamba update bifrost

  To create a new environment, run::

      mamba create --name myenvname bifrost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bifrost:<tag>

   (see `bifrost/tags`_ for valid values for ``<tag>``)


.. |downloads_bifrost| image:: https://img.shields.io/conda/dn/bioconda/bifrost.svg?style=flat
   :target: https://anaconda.org/bioconda/bifrost
   :alt:   (downloads)
.. |docker_bifrost| image:: https://quay.io/repository/biocontainers/bifrost/status
   :target: https://quay.io/repository/biocontainers/bifrost
.. _`bifrost/tags`: https://quay.io/repository/biocontainers/bifrost?tab=tags


.. raw:: html

    <script>
        var package = "bifrost";
        var versions = ["1.2.1","1.2.0","1.2.0","1.2.0","1.0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bifrost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bifrost/README.html