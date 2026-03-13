:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiddit'
.. highlight: bash

tiddit
======

.. conda:recipe:: tiddit
   :replaces_section_title:
   :noindex:

   TIDDIT \- structural variant calling.

   :homepage: https://github.com/SciLifeLab/TIDDIT
   :documentation: https://github.com/SciLifeLab/TIDDIT/blob/TIDDIT-3.9.4/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`tiddit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiddit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiddit/meta.yaml>`_

   


.. conda:package:: tiddit

   |downloads_tiddit| |docker_tiddit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.4-0</code>,  <code>3.9.3-1</code>,  <code>3.9.3-0</code>,  <code>3.9.2-0</code>,  <code>3.9.1-0</code>,  <code>3.9.0-0</code>,  <code>3.7.0-0</code>,  <code>3.6.1-2</code>,  <code>3.6.1-1</code>,  </span></summary>
      

      ``3.9.4-0``,  ``3.9.3-1``,  ``3.9.3-0``,  ``3.9.2-0``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.7.0-0``,  ``3.6.1-2``,  ``3.6.1-1``,  ``3.6.1-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.12.1-0``,  ``2.12.0-4``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.1-2``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: 
   :depends on fermi2: 
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on ropebwt2: 

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

    pixi global install tiddit

to add into an existing workspace instead, run::

    pixi add tiddit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tiddit

Alternatively, to install into a new environment, run::

    conda create -n envname tiddit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tiddit:<tag>

(see `tiddit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tiddit| image:: https://img.shields.io/conda/dn/bioconda/tiddit.svg?style=flat
   :target: https://anaconda.org/bioconda/tiddit
   :alt:   (downloads)
.. |docker_tiddit| image:: https://quay.io/repository/biocontainers/tiddit/status
   :target: https://quay.io/repository/biocontainers/tiddit
.. _`tiddit/tags`: https://quay.io/repository/biocontainers/tiddit?tab=tags


.. raw:: html

    <script>
        var package = "tiddit";
        var versions = ["3.9.4","3.9.3","3.9.3","3.9.2","3.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiddit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiddit/README.html