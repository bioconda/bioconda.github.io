:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cstag'
.. highlight: bash

cstag
=====

.. conda:recipe:: cstag
   :replaces_section_title:
   :noindex:

   Python module to manipulate the minimap2\'s CS tag

   :homepage: https://github.com/akikuno/cstag
   :documentation: https://akikuno.github.io/cstag/cstag/
   
   :license: MIT
   :recipe: /`cstag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag/meta.yaml>`_

   


.. conda:package:: cstag

   |downloads_cstag| |docker_cstag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.7.0,<4.0.0``

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

    pixi global install cstag

to add into an existing workspace instead, run::

    pixi add cstag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cstag

Alternatively, to install into a new environment, run::

    conda create -n envname cstag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cstag:<tag>

(see `cstag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cstag| image:: https://img.shields.io/conda/dn/bioconda/cstag.svg?style=flat
   :target: https://anaconda.org/bioconda/cstag
   :alt:   (downloads)
.. |docker_cstag| image:: https://quay.io/repository/biocontainers/cstag/status
   :target: https://quay.io/repository/biocontainers/cstag
.. _`cstag/tags`: https://quay.io/repository/biocontainers/cstag?tab=tags


.. raw:: html

    <script>
        var package = "cstag";
        var versions = ["1.1.0","1.1.0","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cstag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cstag/README.html