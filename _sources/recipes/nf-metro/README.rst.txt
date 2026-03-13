:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-metro'
.. highlight: bash

nf-metro
========

.. conda:recipe:: nf-metro
   :replaces_section_title:
   :noindex:

   Metromap\-style pipeline workflow components

   :homepage: https://github.com/pinin4fjords/nf-metro
   :license: MIT
   :recipe: /`nf-metro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-metro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-metro/meta.yaml>`_

   


.. conda:package:: nf-metro

   |downloads_nf-metro| |docker_nf-metro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8.0``
   :depends on drawsvg: ``>=2.0``
   :depends on networkx: ``>=3.0``
   :depends on pillow: ``>=9.0``
   :depends on python: ``>=3.10``

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

    pixi global install nf-metro

to add into an existing workspace instead, run::

    pixi add nf-metro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nf-metro

Alternatively, to install into a new environment, run::

    conda create -n envname nf-metro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nf-metro:<tag>

(see `nf-metro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nf-metro| image:: https://img.shields.io/conda/dn/bioconda/nf-metro.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-metro
   :alt:   (downloads)
.. |docker_nf-metro| image:: https://quay.io/repository/biocontainers/nf-metro/status
   :target: https://quay.io/repository/biocontainers/nf-metro
.. _`nf-metro/tags`: https://quay.io/repository/biocontainers/nf-metro?tab=tags


.. raw:: html

    <script>
        var package = "nf-metro";
        var versions = ["0.6.1","0.5.4","0.5.3","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-metro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-metro/README.html