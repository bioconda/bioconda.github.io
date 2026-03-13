:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liftoff'
.. highlight: bash

liftoff
=======

.. conda:recipe:: liftoff
   :replaces_section_title:
   :noindex:

   An accurate GFF3\/GTF lift over pipeline

   :homepage: https://github.com/agshumate/Liftoff
   :license: GPL / GPL-3.0-only
   :recipe: /`liftoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftoff/meta.yaml>`_

   


.. conda:package:: liftoff

   |downloads_liftoff| |docker_liftoff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.3-2</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.76``
   :depends on gffutils: ``>=0.10.1``
   :depends on interlap: ``>=0.2.6``
   :depends on minimap2: ``2.24``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.21.0``
   :depends on parasail-python: ``>=1.2.1``
   :depends on pyfaidx: ``>=0.5.8``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3``
   :depends on ujson: ``>=3.2.0``

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

    pixi global install liftoff

to add into an existing workspace instead, run::

    pixi add liftoff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install liftoff

Alternatively, to install into a new environment, run::

    conda create -n envname liftoff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/liftoff:<tag>

(see `liftoff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_liftoff| image:: https://img.shields.io/conda/dn/bioconda/liftoff.svg?style=flat
   :target: https://anaconda.org/bioconda/liftoff
   :alt:   (downloads)
.. |docker_liftoff| image:: https://quay.io/repository/biocontainers/liftoff/status
   :target: https://quay.io/repository/biocontainers/liftoff
.. _`liftoff/tags`: https://quay.io/repository/biocontainers/liftoff?tab=tags


.. raw:: html

    <script>
        var package = "liftoff";
        var versions = ["1.6.3","1.6.3","1.6.3","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liftoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liftoff/README.html