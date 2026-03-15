:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-schema'
.. highlight: bash

galaxy-schema
=============

.. conda:recipe:: galaxy-schema
   :replaces_section_title:
   :noindex:

   The Galaxy API schema objects.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: MIT / MIT
   :recipe: /`galaxy-schema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-schema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-schema/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-schema

   |downloads_galaxy-schema| |docker_galaxy-schema|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>25.1.2-0</code>,  <code>25.1.1-0</code>,  <code>25.0.4-0</code>,  <code>25.0.3-0</code>,  <code>25.0.2-0</code>,  <code>25.0.1-0</code>,  <code>24.2.4-0</code>,  <code>24.2.3-0</code>,  <code>24.2.2-0</code>,  </span></summary>
      

      ``25.1.2-0``,  ``25.1.1-0``,  ``25.0.4-0``,  ``25.0.3-0``,  ``25.0.2-0``,  ``25.0.1-0``,  ``24.2.4-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on email-validator: 
   :depends on galaxy-tool-util-models: ``>=25.1``
   :depends on galaxy-util: ``>=25.1``
   :depends on pydantic: ``>=2.7.4,<2.12``
   :depends on python: ``3.10.*``

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

    pixi global install galaxy-schema

to add into an existing workspace instead, run::

    pixi add galaxy-schema

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-schema

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-schema

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-schema:<tag>

(see `galaxy-schema/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-schema| image:: https://img.shields.io/conda/dn/bioconda/galaxy-schema.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-schema
   :alt:   (downloads)
.. |docker_galaxy-schema| image:: https://quay.io/repository/biocontainers/galaxy-schema/status
   :target: https://quay.io/repository/biocontainers/galaxy-schema
.. _`galaxy-schema/tags`: https://quay.io/repository/biocontainers/galaxy-schema?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-schema";
        var versions = ["25.1.2","25.1.1","25.0.4","25.0.3","25.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-schema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-schema/README.html