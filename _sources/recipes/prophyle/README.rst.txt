:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophyle'
.. highlight: bash

prophyle
========

.. conda:recipe:: prophyle
   :replaces_section_title:
   :noindex:

   ProPhyle is an accurate\, resource\-frugal and deterministic phylogeny\-based metagenomic classifier.

   :homepage: https://github.com/karel-brinda/prophyle
   :license: MIT
   :recipe: /`prophyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle/meta.yaml>`_

   


.. conda:package:: prophyle

   |downloads_prophyle| |docker_prophyle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3.2-4</code>,  <code>0.3.3.2-3</code>,  <code>0.3.3.2-2</code>,  <code>0.3.3.2-1</code>,  <code>0.3.3.2-0</code>,  <code>0.3.3.1-0</code>,  <code>0.3.2.0-2</code>,  <code>0.3.2.0-1</code>,  <code>0.3.2.0-0</code>,  </span></summary>
      

      ``0.3.3.2-4``,  ``0.3.3.2-3``,  ``0.3.3.2-2``,  ``0.3.3.2-1``,  ``0.3.3.2-0``,  ``0.3.3.1-0``,  ``0.3.2.0-2``,  ``0.3.2.0-1``,  ``0.3.2.0-0``,  ``0.3.1.0-7``,  ``0.3.1.0-6``,  ``0.3.1.0-5``,  ``0.3.1.0-4``,  ``0.3.1.0-3``,  ``0.3.1.0-2``,  ``0.3.1.0-1``,  ``0.3.0.3-3``,  ``0.3.0.3-2``,  ``0.3.0.3-1``,  ``0.3.0.2-1``,  ``0.3.0.0-1``,  ``0.2.1.3-2``,  ``0.2.1.3-1``,  ``0.2.1.3-0``,  ``0.2.1.2-1``,  ``0.2.1.0-1``,  ``0.2.1.0-0``,  ``0.2.0.3-2``,  ``0.2.0.3-1``,  ``0.2.0.3-0``,  ``0.2.0.2-0``,  ``0.2.0-0``,  ``0.1.0.38-2``,  ``0.1.0.38-1``,  ``0.1.0.38-0``,  ``0.1.0.35-0``,  ``0.1.0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bitarray: 
   :depends on ete3: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on psutil: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``>=1.22.1,<2.0a0``
   :depends on scipy: 
   :depends on wheel: 
   :depends on zlib: 

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

    pixi global install prophyle

to add into an existing workspace instead, run::

    pixi add prophyle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prophyle

Alternatively, to install into a new environment, run::

    conda create -n envname prophyle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prophyle:<tag>

(see `prophyle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prophyle| image:: https://img.shields.io/conda/dn/bioconda/prophyle.svg?style=flat
   :target: https://anaconda.org/bioconda/prophyle
   :alt:   (downloads)
.. |docker_prophyle| image:: https://quay.io/repository/biocontainers/prophyle/status
   :target: https://quay.io/repository/biocontainers/prophyle
.. _`prophyle/tags`: https://quay.io/repository/biocontainers/prophyle?tab=tags


.. raw:: html

    <script>
        var package = "prophyle";
        var versions = ["0.3.3.2","0.3.3.2","0.3.3.2","0.3.3.2","0.3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophyle/README.html