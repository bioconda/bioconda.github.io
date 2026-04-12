:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinopy'
.. highlight: bash

dinopy
======

.. conda:recipe:: dinopy
   :replaces_section_title:
   :noindex:

   DNA input and output library for Python and Cython. Includes reader and writer for FASTA and FASTQ files\, support for samtools faidx files\, and generators for solid and gapped q\-grams \(k\-mers\).

   :homepage: https://bitbucket.org/HenningTimm/dinopy
   :documentation: https://dinopy.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`dinopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy/meta.yaml>`_

   


.. conda:package:: dinopy

   |downloads_dinopy| |docker_dinopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.2.1-5</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-0</code>,  <code>2.2.0-3</code>,  <code>2.2.0-2</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.2.1-5``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-0``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``1.26.4.*``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install dinopy

to add into an existing workspace instead, run::

    pixi add dinopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dinopy

Alternatively, to install into a new environment, run::

    conda create -n envname dinopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dinopy:<tag>

(see `dinopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dinopy| image:: https://img.shields.io/conda/dn/bioconda/dinopy.svg?style=flat
   :target: https://anaconda.org/bioconda/dinopy
   :alt:   (downloads)
.. |docker_dinopy| image:: https://quay.io/repository/biocontainers/dinopy/status
   :target: https://quay.io/repository/biocontainers/dinopy
.. _`dinopy/tags`: https://quay.io/repository/biocontainers/dinopy?tab=tags


.. raw:: html

    <script>
        var package = "dinopy";
        var versions = ["3.0.0","3.0.0","3.0.0","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinopy/README.html