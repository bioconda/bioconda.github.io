:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseqc'
.. highlight: bash

rseqc
=====

.. conda:recipe:: rseqc
   :replaces_section_title:
   :noindex:

   QC package for RNA\-seq data.

   :homepage: https://rseqc.sourceforge.net
   :documentation: https://rseqc.sourceforge.net/#usage-information
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`rseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc/meta.yaml>`_
   :links: biotools: :biotools:`rseqc`, doi: :doi:`10.1093/bioinformatics/bts356`

   


.. conda:package:: rseqc

   |downloads_rseqc| |docker_rseqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.4-1</code>,  <code>5.0.4-0</code>,  <code>5.0.3-3</code>,  <code>5.0.3-2</code>,  <code>5.0.3-1</code>,  <code>5.0.3-0</code>,  <code>5.0.1-1</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  </span></summary>
      

      ``5.0.4-1``,  ``5.0.4-0``,  ``5.0.3-3``,  ``5.0.3-2``,  ``5.0.3-1``,  ``5.0.3-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.4-2``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bx-python: 
   :depends on logomaker: 
   :depends on numpy: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.5``
   :depends on r-base: 

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

    pixi global install rseqc

to add into an existing workspace instead, run::

    pixi add rseqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rseqc

Alternatively, to install into a new environment, run::

    conda create -n envname rseqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rseqc:<tag>

(see `rseqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rseqc| image:: https://img.shields.io/conda/dn/bioconda/rseqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rseqc
   :alt:   (downloads)
.. |docker_rseqc| image:: https://quay.io/repository/biocontainers/rseqc/status
   :target: https://quay.io/repository/biocontainers/rseqc
.. _`rseqc/tags`: https://quay.io/repository/biocontainers/rseqc?tab=tags


.. raw:: html

    <script>
        var package = "rseqc";
        var versions = ["5.0.4","5.0.4","5.0.3","5.0.3","5.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseqc/README.html