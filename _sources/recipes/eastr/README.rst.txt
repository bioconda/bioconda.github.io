:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eastr'
.. highlight: bash

eastr
=====

.. conda:recipe:: eastr
   :replaces_section_title:
   :noindex:

   Tool for emending alignments of spuriously spliced transcript reads.

   :homepage: https://ccb.jhu.edu/eastr
   :documentation: https://ccb.jhu.edu/eastr/#usage
   
   :developer docs: https://github.com/ishinder/EASTR
   :license: MIT / MIT
   :recipe: /`eastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eastr/meta.yaml>`_
   :links: biotools: :biotools:`eastr`, doi: :doi:`10.1038/s41467-023-43017-4`

   


.. conda:package:: eastr

   |downloads_eastr| |docker_eastr|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends on biopython: ``>=1.81,<2.0``
   :depends on bowtie2: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mappy: ``>=2.26,<3.0``
   :depends on numpy: ``>=1.26.1``
   :depends on pandas: ``>=2.1.2,<2.3``
   :depends on pysam: ``>=0.22.0,<0.23``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install eastr

to add into an existing workspace instead, run::

    pixi add eastr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eastr

Alternatively, to install into a new environment, run::

    conda create -n envname eastr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eastr:<tag>

(see `eastr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eastr| image:: https://img.shields.io/conda/dn/bioconda/eastr.svg?style=flat
   :target: https://anaconda.org/bioconda/eastr
   :alt:   (downloads)
.. |docker_eastr| image:: https://quay.io/repository/biocontainers/eastr/status
   :target: https://quay.io/repository/biocontainers/eastr
.. _`eastr/tags`: https://quay.io/repository/biocontainers/eastr?tab=tags


.. raw:: html

    <script>
        var package = "eastr";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eastr/README.html