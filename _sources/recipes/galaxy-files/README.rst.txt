:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-files'
.. highlight: bash

galaxy-files
============

.. conda:recipe:: galaxy-files
   :replaces_section_title:
   :noindex:

   The Galaxy file sources framework and default plugins.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: APACHE / Apache-2.0
   :recipe: /`galaxy-files <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-files

   |downloads_galaxy-files| |docker_galaxy-files|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>25.1.2-0</code>,  <code>25.1.1-0</code>,  <code>25.1.0-0</code>,  <code>25.0.4-0</code>,  <code>25.0.3-0</code>,  <code>25.0.2-0</code>,  <code>25.0.1-0</code>,  <code>24.2.4-0</code>,  <code>24.2.3-0</code>,  </span></summary>
      

      ``25.1.2-0``,  ``25.1.1-0``,  ``25.1.0-0``,  ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``,  ``24.0.0-0``,  ``23.2.1-0``,  ``23.1.4-0``,  ``23.1.3-0``,  ``23.1.2-0``,  ``23.1.1-0``,  ``23.0.6-0``,  ``23.0.5-0``,  ``23.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fs: 
   :depends on fsspec: 
   :depends on galaxy-util: ``>=25.1``
   :depends on pydantic: ``>=2.7.4``
   :depends on python: ``>=3.9,<3.14``
   :depends on typing-extensions: 

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

    pixi global install galaxy-files

to add into an existing workspace instead, run::

    pixi add galaxy-files

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-files

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-files

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-files:<tag>

(see `galaxy-files/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-files| image:: https://img.shields.io/conda/dn/bioconda/galaxy-files.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-files
   :alt:   (downloads)
.. |docker_galaxy-files| image:: https://quay.io/repository/biocontainers/galaxy-files/status
   :target: https://quay.io/repository/biocontainers/galaxy-files
.. _`galaxy-files/tags`: https://quay.io/repository/biocontainers/galaxy-files?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-files";
        var versions = ["25.1.2","25.1.1","25.1.0","25.0.4","25.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-files/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-files/README.html