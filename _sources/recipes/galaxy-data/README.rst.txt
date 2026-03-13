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

         <details><summary><span class="truncated-version-list"><code>25.1.2-0</code>,  <code>25.1.1-0</code>,  <code>25.0.4-0</code>,  <code>25.0.3-0</code>,  <code>25.0.2-0</code>,  <code>25.0.1-0</code>,  <code>24.2.4-0</code>,  <code>24.2.3-1</code>,  <code>24.2.3-0</code>,  </span></summary>
      

      ``25.1.2-0``,  ``25.1.1-0``,  ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-1``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``,  ``22.1.1-0``,  ``21.9.0-0``,  ``20.9.1-2``,  ``20.9.1-1``,  ``20.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alembic: 
   :depends on alembic-utils: 
   :depends on bdbag: ``>=1.6.3``
   :depends on bx-python: 
   :depends on dnspython: 
   :depends on email-validator: 
   :depends on galaxy-files: ``>=25.1``
   :depends on galaxy-objectstore: ``>=25.1``
   :depends on galaxy-schema: ``>=25.1``
   :depends on galaxy-tool-util: ``>=25.1``
   :depends on galaxy-util: ``>=25.1``
   :depends on galaxy_sequence_utils: 
   :depends on h5grove: ``>=1.2.1``
   :depends on h5py: 
   :depends on isa-rwval: ``>=0.10.10``
   :depends on markupsafe: 
   :depends on mrcfile: 
   :depends on msal: 
   :depends on numpy: 
   :depends on parsley: 
   :depends on pycryptodome: 
   :depends on pydantic: ``>=2.7.4``
   :depends on pysam: ``>=0.21``
   :depends on python: ``>=3.8``
   :depends on python-isal: 
   :depends on python-magic: 
   :depends on rocrate: 
   :depends on social-auth-core: ``4.0.3``
   :depends on sqlalchemy: ``>=2.0,<2.1``
   :depends on tifffile: 
   :depends on typing-extensions: 
   :depends on webob: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install galaxy-data

to add into an existing workspace instead, run::

    pixi add galaxy-data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-data

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-data:<tag>

(see `galaxy-data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-data| image:: https://img.shields.io/conda/dn/bioconda/galaxy-data.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-data
   :alt:   (downloads)
.. |docker_galaxy-data| image:: https://quay.io/repository/biocontainers/galaxy-data/status
   :target: https://quay.io/repository/biocontainers/galaxy-data
.. _`galaxy-data/tags`: https://quay.io/repository/biocontainers/galaxy-data?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-data";
        var versions = ["25.1.2","25.1.1","25.0.4","25.0.3","25.0.2"];
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