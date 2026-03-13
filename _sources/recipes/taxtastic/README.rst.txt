:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxtastic'
.. highlight: bash

taxtastic
=========

.. conda:recipe:: taxtastic
   :replaces_section_title:
   :noindex:

   Tools for taxonomic naming and annotation

   :homepage: https://github.com/fhcrc/taxtastic
   :license: GPL / GPL-3.0
   :recipe: /`taxtastic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic/meta.yaml>`_

   


.. conda:package:: taxtastic

   |downloads_taxtastic| |docker_taxtastic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.8.11-0</code>,  <code>0.8.9-0</code>,  </span></summary>
      

      ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.11-0``,  ``0.8.9-0``,  ``0.8.5-2``,  ``0.8.5-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on decorator: 
   :depends on dendropy: 
   :depends on fastalite: 
   :depends on jinja2: 
   :depends on psycopg2-binary: 
   :depends on python: ``>=3``
   :depends on pyyaml: 
   :depends on sqlalchemy: ``>=2``
   :depends on sqlparse: 

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

    pixi global install taxtastic

to add into an existing workspace instead, run::

    pixi add taxtastic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxtastic

Alternatively, to install into a new environment, run::

    conda create -n envname taxtastic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxtastic:<tag>

(see `taxtastic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxtastic| image:: https://img.shields.io/conda/dn/bioconda/taxtastic.svg?style=flat
   :target: https://anaconda.org/bioconda/taxtastic
   :alt:   (downloads)
.. |docker_taxtastic| image:: https://quay.io/repository/biocontainers/taxtastic/status
   :target: https://quay.io/repository/biocontainers/taxtastic
.. _`taxtastic/tags`: https://quay.io/repository/biocontainers/taxtastic?tab=tags


.. raw:: html

    <script>
        var package = "taxtastic";
        var versions = ["0.12.0","0.11.0","0.10.0","0.10.0","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxtastic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxtastic/README.html