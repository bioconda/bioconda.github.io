:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-data'
.. highlight: bash

galaxy-data
===========

.. conda:recipe:: galaxy-data
   :replaces_section_title:
   :noindex:

   The Galaxy models\, datatype framework\, and datatype implementations.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-data/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-data

   |downloads_galaxy-data| |docker_galaxy-data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>24.2.1-0</code>,  <code>24.2.0-0</code>,  <code>24.1.4-0</code>,  <code>24.1.3-0</code>,  <code>24.1.2-0</code>,  <code>24.1.1-0</code>,  <code>22.1.1-0</code>,  <code>21.9.0-0</code>,  <code>20.9.1-2</code>,  </span></summary>
      

      ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``,  ``22.1.1-0``,  ``21.9.0-0``,  ``20.9.1-2``,  ``20.9.1-1``,  ``20.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends alembic: 
   :depends alembic-utils: 
   :depends bdbag: ``>=1.6.3``
   :depends bx-python: 
   :depends dnspython: 
   :depends email-validator: 
   :depends galaxy-files: ``>=24.2``
   :depends galaxy-objectstore: ``>=24.2``
   :depends galaxy-schema: ``>=24.2``
   :depends galaxy-tool-util: ``>=24.2``
   :depends galaxy-util: ``>=24.2``
   :depends galaxy_sequence_utils: 
   :depends h5grove: ``>=1.2.1``
   :depends h5py: 
   :depends isa-rwval: ``>=0.10.10``
   :depends markupsafe: 
   :depends mrcfile: 
   :depends msal: 
   :depends numpy: 
   :depends parsley: 
   :depends pycryptodome: 
   :depends pydantic: ``>=2.7.4``
   :depends pysam: ``>=0.21``
   :depends python: ``>=3.8``
   :depends python-isal: 
   :depends python-magic: 
   :depends social-auth-core: ``4.0.3``
   :depends sqlalchemy: ``>=2.0,<2.1``
   :depends tifffile: 
   :depends typing-extensions: 
   :depends webob: 
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

      mamba install galaxy-data

   and update with::

      mamba update galaxy-data

  To create a new environment, run::

      mamba create --name myenvname galaxy-data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-data:<tag>

   (see `galaxy-data/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-data| image:: https://img.shields.io/conda/dn/bioconda/galaxy-data.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-data
   :alt:   (downloads)
.. |docker_galaxy-data| image:: https://quay.io/repository/biocontainers/galaxy-data/status
   :target: https://quay.io/repository/biocontainers/galaxy-data
.. _`galaxy-data/tags`: https://quay.io/repository/biocontainers/galaxy-data?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-data";
        var versions = ["24.2.1","24.2.0","24.1.4","24.1.3","24.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-data/README.html