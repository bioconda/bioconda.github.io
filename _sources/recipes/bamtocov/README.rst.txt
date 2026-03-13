:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamtocov'
.. highlight: bash

bamtocov
========

.. conda:recipe:: bamtocov
   :replaces_section_title:
   :noindex:

   Extract coverage information from BAM files\, supporting stranded and physical coverage and streams.

   :homepage: https://github.com/telatin/bamtocov
   :license: MIT
   :recipe: /`bamtocov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov/meta.yaml>`_
   :links: biotools: :biotools:`bamtocov`, doi: :doi:`10.3390/bioengineering8050059`

   A collection of tools to extract coverage information from BAM and CRAM files\,
   supporting target \(BED\, GFF\) and reporting the output in bedGraph \(BED\) or WIG format.

   The suite includes\:
   \- bamtocov\: fast BAM\/CRAM to coverage converter
   \- covtotarget\: extract coverage for specific targets



.. conda:package:: bamtocov

   |downloads_bamtocov| |docker_bamtocov|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.7.0-2</code>,  <code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.7.0-2``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.001-0``,  ``2.0.000-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``

   :additional platforms:
      

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

    pixi global install bamtocov

to add into an existing workspace instead, run::

    pixi add bamtocov

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamtocov

Alternatively, to install into a new environment, run::

    conda create -n envname bamtocov

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamtocov:<tag>

(see `bamtocov/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamtocov| image:: https://img.shields.io/conda/dn/bioconda/bamtocov.svg?style=flat
   :target: https://anaconda.org/bioconda/bamtocov
   :alt:   (downloads)
.. |docker_bamtocov| image:: https://quay.io/repository/biocontainers/bamtocov/status
   :target: https://quay.io/repository/biocontainers/bamtocov
.. _`bamtocov/tags`: https://quay.io/repository/biocontainers/bamtocov?tab=tags


.. raw:: html

    <script>
        var package = "bamtocov";
        var versions = ["2.8.0","2.7.0","2.7.0","2.7.0","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamtocov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamtocov/README.html