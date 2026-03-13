:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'control-freec'
.. highlight: bash

control-freec
=============

.. conda:recipe:: control-freec
   :replaces_section_title:
   :noindex:

   Copy number and genotype annotation from whole genome and whole exome
   sequencing data.


   :homepage: https://github.com/BoevaLab/FREEC
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`control-freec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec/meta.yaml>`_
   :links: biotools: :biotools:`freec`

   


.. conda:package:: control-freec

   |downloads_control-freec| |docker_control-freec|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>11.6-3</code>,  <code>11.6-2</code>,  <code>11.6-1</code>,  <code>11.6-0</code>,  <code>11.6b-3</code>,  <code>11.6b-2</code>,  <code>11.6b-1</code>,  <code>11.6b-0</code>,  <code>11.5-1</code>,  </span></summary>
      

      ``11.6-3``,  ``11.6-2``,  ``11.6-1``,  ``11.6-0``,  ``11.6b-3``,  ``11.6b-2``,  ``11.6b-1``,  ``11.6b-0``,  ``11.5-1``,  ``11.5-0``,  ``11.4-0``,  ``10.6-0``,  ``10.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rtracklayer: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on perl: 
   :depends on r-base: 
   :depends on samtools: 

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

    pixi global install control-freec

to add into an existing workspace instead, run::

    pixi add control-freec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install control-freec

Alternatively, to install into a new environment, run::

    conda create -n envname control-freec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/control-freec:<tag>

(see `control-freec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_control-freec| image:: https://img.shields.io/conda/dn/bioconda/control-freec.svg?style=flat
   :target: https://anaconda.org/bioconda/control-freec
   :alt:   (downloads)
.. |docker_control-freec| image:: https://quay.io/repository/biocontainers/control-freec/status
   :target: https://quay.io/repository/biocontainers/control-freec
.. _`control-freec/tags`: https://quay.io/repository/biocontainers/control-freec?tab=tags


.. raw:: html

    <script>
        var package = "control-freec";
        var versions = ["11.6","11.6","11.6","11.6","11.6b"];
    </script>





Notes
-----
The tool will be available as \`freec\` in the command line.
See the homepage for example config files. Auxiliary scripts
like e.g. freec2bed.pl and freec2circos.pl \(see homepage\) are available in the
command line as well.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/control-freec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/control-freec/README.html