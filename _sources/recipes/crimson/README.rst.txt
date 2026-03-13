:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crimson'
.. highlight: bash

crimson
=======

.. conda:recipe:: crimson
   :replaces_section_title:
   :noindex:

   Bioinformatics tool outputs converter to JSON or YAML.

   :homepage: https://github.com/bow/crimson
   :license: BSD / BSD License
   :recipe: /`crimson <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson/meta.yaml>`_

   


.. conda:package:: crimson

   |downloads_crimson| |docker_crimson|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.3.0-1``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=6.6``
   :depends on python: 
   :depends on pyyaml: ``>=3.11``
   :depends on single-source: 

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

    pixi global install crimson

to add into an existing workspace instead, run::

    pixi add crimson

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crimson

Alternatively, to install into a new environment, run::

    conda create -n envname crimson

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crimson:<tag>

(see `crimson/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crimson| image:: https://img.shields.io/conda/dn/bioconda/crimson.svg?style=flat
   :target: https://anaconda.org/bioconda/crimson
   :alt:   (downloads)
.. |docker_crimson| image:: https://quay.io/repository/biocontainers/crimson/status
   :target: https://quay.io/repository/biocontainers/crimson
.. _`crimson/tags`: https://quay.io/repository/biocontainers/crimson?tab=tags


.. raw:: html

    <script>
        var package = "crimson";
        var versions = ["1.1.1","1.1.0","1.0.0","0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crimson/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crimson/README.html