:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytoscape'
.. highlight: bash

cytoscape
=========

.. conda:recipe:: cytoscape
   :replaces_section_title:
   :noindex:

   Cytoscape\: an open source platform for network analysis and visualization.

   :homepage: https://cytoscape.org
   :developer docs: https://github.com/cytoscape/cytoscape
   :license: GPL / LGPL
   :recipe: /`cytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytoscape/meta.yaml>`_
   :links: biotools: :biotools:`cytoscape`, doi: :doi:`10.1101/gr.1239303`

   


.. conda:package:: cytoscape

   |downloads_cytoscape| |docker_cytoscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.4-0</code>,  <code>3.10.3-0</code>,  <code>3.10.2-0</code>,  <code>3.10.1-0</code>,  <code>3.9.1-1</code>,  <code>3.9.1-0</code>,  <code>3.9.0-0</code>,  <code>3.8.2-0</code>,  <code>3.7.2-1</code>,  </span></summary>
      

      ``3.10.4-0``,  ``3.10.3-0``,  ``3.10.2-0``,  ``3.10.1-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.2-0``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on fontconfig: 
   :depends on freetype: 
   :depends on openjdk: ``>=17,<20``
   :depends on xorg-libxtst: 

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

    pixi global install cytoscape

to add into an existing workspace instead, run::

    pixi add cytoscape

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cytoscape

Alternatively, to install into a new environment, run::

    conda create -n envname cytoscape

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cytoscape:<tag>

(see `cytoscape/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cytoscape| image:: https://img.shields.io/conda/dn/bioconda/cytoscape.svg?style=flat
   :target: https://anaconda.org/bioconda/cytoscape
   :alt:   (downloads)
.. |docker_cytoscape| image:: https://quay.io/repository/biocontainers/cytoscape/status
   :target: https://quay.io/repository/biocontainers/cytoscape
.. _`cytoscape/tags`: https://quay.io/repository/biocontainers/cytoscape?tab=tags


.. raw:: html

    <script>
        var package = "cytoscape";
        var versions = ["3.10.4","3.10.3","3.10.2","3.10.1","3.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytoscape/README.html