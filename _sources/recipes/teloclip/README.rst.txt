:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teloclip'
.. highlight: bash

teloclip
========

.. conda:recipe:: teloclip
   :replaces_section_title:
   :noindex:

   A tool for the recovery of unassembled telomeres from soft\-clipped read alignments.

   :homepage: https://github.com/Adamtaranto/teloclip
   :documentation: https://github.com/Adamtaranto/teloclip/blob/0.3.4/README.md
   
   :license: MIT / MIT
   :recipe: /`teloclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip/meta.yaml>`_

   


.. conda:package:: teloclip

   |downloads_teloclip| |docker_teloclip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-0</code>,  <code>0.3.2-0</code>,  <code>0.2.0-0</code>,  <code>0.1.1-0</code>,  <code>0.1.0-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.3.4-0``,  ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on rich: 

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

    pixi global install teloclip

to add into an existing workspace instead, run::

    pixi add teloclip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install teloclip

Alternatively, to install into a new environment, run::

    conda create -n envname teloclip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/teloclip:<tag>

(see `teloclip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_teloclip| image:: https://img.shields.io/conda/dn/bioconda/teloclip.svg?style=flat
   :target: https://anaconda.org/bioconda/teloclip
   :alt:   (downloads)
.. |docker_teloclip| image:: https://quay.io/repository/biocontainers/teloclip/status
   :target: https://quay.io/repository/biocontainers/teloclip
.. _`teloclip/tags`: https://quay.io/repository/biocontainers/teloclip?tab=tags


.. raw:: html

    <script>
        var package = "teloclip";
        var versions = ["0.3.4","0.3.2","0.2.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teloclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teloclip/README.html