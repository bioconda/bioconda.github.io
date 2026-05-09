:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tpmcalculator'
.. highlight: bash

tpmcalculator
=============

.. conda:recipe:: tpmcalculator
   :replaces_section_title:
   :noindex:

   TPMCalculator quantifies mRNA abundance directly from the alignments by parsing BAM files.

   :homepage: https://github.com/NLM-DIR/TPMCalculator
   :license: Public Domain
   :recipe: /`tpmcalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator/meta.yaml>`_

   


.. conda:package:: tpmcalculator

   |downloads_tpmcalculator| |docker_tpmcalculator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6-0</code>,  <code>0.0.5-3</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  <code>0.0.4-2</code>,  <code>0.0.4-1</code>,  </span></summary>
      

      ``0.0.6-0``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install tpmcalculator

to add into an existing workspace instead, run::

    pixi add tpmcalculator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tpmcalculator

Alternatively, to install into a new environment, run::

    conda create -n envname tpmcalculator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tpmcalculator:<tag>

(see `tpmcalculator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tpmcalculator| image:: https://img.shields.io/conda/dn/bioconda/tpmcalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/tpmcalculator
   :alt:   (downloads)
.. |docker_tpmcalculator| image:: https://quay.io/repository/biocontainers/tpmcalculator/status
   :target: https://quay.io/repository/biocontainers/tpmcalculator
.. _`tpmcalculator/tags`: https://quay.io/repository/biocontainers/tpmcalculator?tab=tags


.. raw:: html

    <script>
        var package = "tpmcalculator";
        var versions = ["0.0.6","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpmcalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpmcalculator/README.html