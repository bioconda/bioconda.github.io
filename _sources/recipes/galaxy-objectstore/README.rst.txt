:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-objectstore'
.. highlight: bash

galaxy-objectstore
==================

.. conda:recipe:: galaxy-objectstore
   :replaces_section_title:
   :noindex:

   The Galaxy object store framework and default implementations.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: APACHE / Apache-2.0
   :recipe: /`galaxy-objectstore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-objectstore

   |downloads_galaxy-objectstore| |docker_galaxy-objectstore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>25.0.1-0</code>,  <code>24.2.4-0</code>,  <code>24.2.3-0</code>,  <code>24.2.2-0</code>,  <code>24.2.1-0</code>,  <code>24.2.0-0</code>,  <code>24.1.4-0</code>,  <code>24.1.3-0</code>,  <code>24.1.2-0</code>,  </span></summary>
      

      ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``,  ``24.0.0-0``,  ``23.2.1-0``,  ``23.1.4-0``,  ``23.1.3-0``,  ``23.1.2-0``,  ``23.1.1-0``,  ``23.0.6-0``,  ``23.0.5-0``,  ``23.0.4-0``,  ``23.0.2-0``,  ``22.1.1-0``,  ``21.9.0-0``,  ``20.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends galaxy-util: ``>=25.0``
   :depends pydantic: ``!=2.6.0,!=2.6.1,>=2``
   :depends python: ``>=3.7``
   :depends pyyaml: 
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

      mamba install galaxy-objectstore

   and update with::

      mamba update galaxy-objectstore

  To create a new environment, run::

      mamba create --name myenvname galaxy-objectstore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-objectstore:<tag>

   (see `galaxy-objectstore/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-objectstore| image:: https://img.shields.io/conda/dn/bioconda/galaxy-objectstore.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-objectstore
   :alt:   (downloads)
.. |docker_galaxy-objectstore| image:: https://quay.io/repository/biocontainers/galaxy-objectstore/status
   :target: https://quay.io/repository/biocontainers/galaxy-objectstore
.. _`galaxy-objectstore/tags`: https://quay.io/repository/biocontainers/galaxy-objectstore?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-objectstore";
        var versions = ["25.0.1","24.2.4","24.2.3","24.2.2","24.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-objectstore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-objectstore/README.html