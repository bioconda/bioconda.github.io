:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfapy'
.. highlight: bash

gfapy
=====

.. conda:recipe:: gfapy
   :replaces_section_title:
   :noindex:

   Library for handling data in the GFA1 and GFA2 formats

   :homepage: https://github.com/ggonnella/gfapy
   :license: Other / ISC License (ISCL)
   :recipe: /`gfapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfapy/meta.yaml>`_

   


.. conda:package:: gfapy

   |downloads_gfapy| |docker_gfapy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>1.0.0rc10-0</code>,  </span></summary>
      

      ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``1.0.0rc10-0``,  ``1.0.0rc9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3``

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

    pixi global install gfapy

to add into an existing workspace instead, run::

    pixi add gfapy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfapy

Alternatively, to install into a new environment, run::

    conda create -n envname gfapy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfapy:<tag>

(see `gfapy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfapy| image:: https://img.shields.io/conda/dn/bioconda/gfapy.svg?style=flat
   :target: https://anaconda.org/bioconda/gfapy
   :alt:   (downloads)
.. |docker_gfapy| image:: https://quay.io/repository/biocontainers/gfapy/status
   :target: https://quay.io/repository/biocontainers/gfapy
.. _`gfapy/tags`: https://quay.io/repository/biocontainers/gfapy?tab=tags


.. raw:: html

    <script>
        var package = "gfapy";
        var versions = ["1.2.3","1.2.2","1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfapy/README.html