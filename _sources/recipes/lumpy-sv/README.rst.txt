:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lumpy-sv'
.. highlight: bash

lumpy-sv
========

.. conda:recipe:: lumpy-sv
   :replaces_section_title:
   :noindex:

   a general probabilistic framework for structural variant discovery

   :homepage: https://github.com/arq5x/lumpy-sv
   :license: MIT
   :recipe: /`lumpy-sv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv/meta.yaml>`_

   


.. conda:package:: lumpy-sv

   |downloads_lumpy-sv| |docker_lumpy-sv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  </span></summary>
      

      ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.14a-2``,  ``0.2.14a-1``,  ``0.2.14a-0``,  ``0.2.13-1``,  ``0.2.13-0``,  ``0.2.12-3``,  ``0.2.12-2``,  ``0.2.12-1``,  ``0.2.12-0``,  ``0.2.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamkit: 
   :depends on gawk: 
   :depends on htslib: 
   :depends on lumpy-sv-minimal: ``0.3.1.*``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``2.7.*``
   :depends on sambamba: 
   :depends on samblaster: 
   :depends on samtools: 
   :depends on util-linux: 

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

    pixi global install lumpy-sv

to add into an existing workspace instead, run::

    pixi add lumpy-sv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lumpy-sv

Alternatively, to install into a new environment, run::

    conda create -n envname lumpy-sv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lumpy-sv:<tag>

(see `lumpy-sv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lumpy-sv| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv.svg?style=flat
   :target: https://anaconda.org/bioconda/lumpy-sv
   :alt:   (downloads)
.. |docker_lumpy-sv| image:: https://quay.io/repository/biocontainers/lumpy-sv/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv
.. _`lumpy-sv/tags`: https://quay.io/repository/biocontainers/lumpy-sv?tab=tags


.. raw:: html

    <script>
        var package = "lumpy-sv";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv/README.html