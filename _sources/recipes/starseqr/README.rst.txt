:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starseqr'
.. highlight: bash

starseqr
========

.. conda:recipe:: starseqr
   :replaces_section_title:
   :noindex:

   RNA Fusion Detection and Quantification

   :homepage: https://github.com/ExpressionAnalysis/STAR-SEQR
   :license: ../../LICENSE
   :recipe: /`starseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr/meta.yaml>`_

   


.. conda:package:: starseqr

   |downloads_starseqr| |docker_starseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.7-6</code>,  <code>0.6.7-5</code>,  <code>0.6.7-4</code>,  <code>0.6.7-3</code>,  <code>0.6.7-2</code>,  <code>0.6.7-1</code>,  <code>0.6.7-0</code>,  <code>0.6.6-0</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.6.7-6``,  ``0.6.7-5``,  ``0.6.7-4``,  ``0.6.7-3``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.3-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gffread: ``>=0.12.7,<0.13.0a0``
   :depends on intervaltree_bio: 
   :depends on libgcc: ``>=14``
   :depends on networkx: 
   :depends on numpy: ``>=1.21,<3``
   :depends on pandas: ``>=0.18.1``
   :depends on primer3-py: ``>=2.3.0,<3.0a0``
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on pysam: ``>=0.9.1.4``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on six: 

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

    pixi global install starseqr

to add into an existing workspace instead, run::

    pixi add starseqr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install starseqr

Alternatively, to install into a new environment, run::

    conda create -n envname starseqr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/starseqr:<tag>

(see `starseqr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_starseqr| image:: https://img.shields.io/conda/dn/bioconda/starseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/starseqr
   :alt:   (downloads)
.. |docker_starseqr| image:: https://quay.io/repository/biocontainers/starseqr/status
   :target: https://quay.io/repository/biocontainers/starseqr
.. _`starseqr/tags`: https://quay.io/repository/biocontainers/starseqr?tab=tags


.. raw:: html

    <script>
        var package = "starseqr";
        var versions = ["0.6.7","0.6.7","0.6.7","0.6.7","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starseqr/README.html