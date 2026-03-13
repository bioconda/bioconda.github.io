:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmergenie'
.. highlight: bash

kmergenie
=========

.. conda:recipe:: kmergenie
   :replaces_section_title:
   :noindex:

   KmerGenie estimates the best k\-mer length for genome de novo assembly.

   :homepage: http://kmergenie.bx.psu.edu
   :documentation: http://kmergenie.bx.psu.edu/README
   
   :license: Free Software License
   :recipe: /`kmergenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie/meta.yaml>`_
   :links: biotools: :biotools:`kmergenie`, doi: :doi:`10.1093/bioinformatics/btt310`

   


.. conda:package:: kmergenie

   |downloads_kmergenie| |docker_kmergenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7051-11</code>,  <code>1.7051-10</code>,  <code>1.7051-9</code>,  <code>1.7051-8</code>,  <code>1.7051-7</code>,  <code>1.7051-5</code>,  <code>1.7051-4</code>,  <code>1.7051-3</code>,  <code>1.7051-2</code>,  </span></summary>
      

      ``1.7051-11``,  ``1.7051-10``,  ``1.7051-9``,  ``1.7051-8``,  ``1.7051-7``,  ``1.7051-5``,  ``1.7051-4``,  ``1.7051-3``,  ``1.7051-2``,  ``1.7051-1``,  ``1.7051-0``,  ``1.7016-5``,  ``1.7016-4``,  ``1.7016-3``,  ``1.7016-2``,  ``1.7016-1``,  ``1.7016-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on ntcard: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on r-base: ``>=4.0,<4.1.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install kmergenie

to add into an existing workspace instead, run::

    pixi add kmergenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmergenie

Alternatively, to install into a new environment, run::

    conda create -n envname kmergenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmergenie:<tag>

(see `kmergenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmergenie| image:: https://img.shields.io/conda/dn/bioconda/kmergenie.svg?style=flat
   :target: https://anaconda.org/bioconda/kmergenie
   :alt:   (downloads)
.. |docker_kmergenie| image:: https://quay.io/repository/biocontainers/kmergenie/status
   :target: https://quay.io/repository/biocontainers/kmergenie
.. _`kmergenie/tags`: https://quay.io/repository/biocontainers/kmergenie?tab=tags


.. raw:: html

    <script>
        var package = "kmergenie";
        var versions = ["1.7051","1.7051","1.7051","1.7051","1.7051"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmergenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmergenie/README.html