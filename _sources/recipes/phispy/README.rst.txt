:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phispy'
.. highlight: bash

phispy
======

.. conda:recipe:: phispy
   :replaces_section_title:
   :noindex:

   Prophage finder using multiple metrics

   :homepage: https://github.com/linsalrob/PhiSpy
   :documentation: https://github.com/linsalrob/PhiSpy/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`phispy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3475717`

   


.. conda:package:: phispy

   |downloads_phispy| |docker_phispy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.21-8</code>,  <code>4.2.21-7</code>,  <code>4.2.21-6</code>,  <code>4.2.21-5</code>,  <code>4.2.21-4</code>,  <code>4.2.21-3</code>,  <code>4.2.21-2</code>,  <code>4.2.21-1</code>,  <code>4.2.21-0</code>,  </span></summary>
      

      ``4.2.21-8``,  ``4.2.21-7``,  ``4.2.21-6``,  ``4.2.21-5``,  ``4.2.21-4``,  ``4.2.21-3``,  ``4.2.21-2``,  ``4.2.21-1``,  ``4.2.21-0``,  ``4.2.19-0``,  ``4.2.17-0``,  ``4.2.12-0``,  ``4.2.6-1``,  ``4.2.6-0``,  ``4.1.22-0``,  ``4.1.20-0``,  ``4.1.17-0``,  ``4.1.16-0``,  ``4.1.14-0``,  ``4.1.7-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``4.0.0-0``,  ``3.7.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: ``<=1.81``
   :depends on hmmer: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: 

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

    pixi global install phispy

to add into an existing workspace instead, run::

    pixi add phispy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phispy

Alternatively, to install into a new environment, run::

    conda create -n envname phispy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phispy:<tag>

(see `phispy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phispy| image:: https://img.shields.io/conda/dn/bioconda/phispy.svg?style=flat
   :target: https://anaconda.org/bioconda/phispy
   :alt:   (downloads)
.. |docker_phispy| image:: https://quay.io/repository/biocontainers/phispy/status
   :target: https://quay.io/repository/biocontainers/phispy
.. _`phispy/tags`: https://quay.io/repository/biocontainers/phispy?tab=tags


.. raw:: html

    <script>
        var package = "phispy";
        var versions = ["4.2.21","4.2.21","4.2.21","4.2.21","4.2.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phispy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phispy/README.html