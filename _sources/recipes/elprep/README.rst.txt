:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elprep'
.. highlight: bash

elprep
======

.. conda:recipe:: elprep
   :replaces_section_title:
   :noindex:

   elPrep is a high\-performance tool for preparing .sam\/.bam files for variant calling in sequencing pipelines. It can be used as a drop\-in replacement for SAMtools\/Picard\/GATK4.

   :homepage: https://github.com/ExaScience/elprep
   :license: AGPL / AGPL-3.0-only
   :recipe: /`elprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep/meta.yaml>`_
   :links: biotools: :biotools:`Elprep`, doi: :doi:`10.1371/journal.pone.0244471`

   


.. conda:package:: elprep

   |downloads_elprep| |docker_elprep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.3-2</code>,  <code>5.1.3-1</code>,  <code>5.1.3-0</code>,  <code>5.1.2-0</code>,  <code>5.1.1-0</code>,  <code>5.1.0-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-1</code>,  <code>5.0.1-0</code>,  </span></summary>
      

      ``5.1.3-2``,  ``5.1.3-1``,  ``5.1.3-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.2-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``4.1.6-1``,  ``4.1.6-0``,  ``4.1.5-0``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.04-1``,  ``3.04-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install elprep

to add into an existing workspace instead, run::

    pixi add elprep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install elprep

Alternatively, to install into a new environment, run::

    conda create -n envname elprep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/elprep:<tag>

(see `elprep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_elprep| image:: https://img.shields.io/conda/dn/bioconda/elprep.svg?style=flat
   :target: https://anaconda.org/bioconda/elprep
   :alt:   (downloads)
.. |docker_elprep| image:: https://quay.io/repository/biocontainers/elprep/status
   :target: https://quay.io/repository/biocontainers/elprep
.. _`elprep/tags`: https://quay.io/repository/biocontainers/elprep?tab=tags


.. raw:: html

    <script>
        var package = "elprep";
        var versions = ["5.1.3","5.1.3","5.1.3","5.1.2","5.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elprep/README.html