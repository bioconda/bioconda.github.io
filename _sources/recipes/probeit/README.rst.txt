:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probeit'
.. highlight: bash

probeit
=======

.. conda:recipe:: probeit
   :replaces_section_title:
   :noindex:

   Probeit\: a probe designer for detecting and genotyping pathogen\!

   :homepage: https://github.com/steineggerlab/probeit
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`probeit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit/meta.yaml>`_

   


.. conda:package:: probeit

   |downloads_probeit| |docker_probeit|

   :versions:
      
      

      ``2.2-5``,  ``2.2-4``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``2.0-0``,  ``v1.9-1``,  ``v1.9-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on genmap: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mmseqs2: ``>=13.45111``
   :depends on numpy: 
   :depends on pandas: 
   :depends on primer3-py: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on seqkit: 
   :depends on setuptools: 

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

    pixi global install probeit

to add into an existing workspace instead, run::

    pixi add probeit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install probeit

Alternatively, to install into a new environment, run::

    conda create -n envname probeit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/probeit:<tag>

(see `probeit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_probeit| image:: https://img.shields.io/conda/dn/bioconda/probeit.svg?style=flat
   :target: https://anaconda.org/bioconda/probeit
   :alt:   (downloads)
.. |docker_probeit| image:: https://quay.io/repository/biocontainers/probeit/status
   :target: https://quay.io/repository/biocontainers/probeit
.. _`probeit/tags`: https://quay.io/repository/biocontainers/probeit?tab=tags


.. raw:: html

    <script>
        var package = "probeit";
        var versions = ["2.2","2.2","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probeit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probeit/README.html