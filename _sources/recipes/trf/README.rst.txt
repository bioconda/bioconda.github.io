:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trf'
.. highlight: bash

trf
===

.. conda:recipe:: trf
   :replaces_section_title:
   :noindex:

   Tandem Repeats Finder is a program to locate and display tandem repeats in DNA sequences.

   :homepage: https://tandem.bu.edu/trf/trf.html
   :developer docs: https://github.com/Benson-Genomics-Lab/TRF
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`trf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf/meta.yaml>`_
   :links: biotools: :biotools:`trf`

   Tandem Repeats Finder \(TRF\) is a bioinformatics tool used to identify and locate tandem repeats in DNA sequences. 
   These repeats are consecutive copies of short sequence patterns found in many genomes and are of interest in genetic studies. 



.. conda:package:: trf

   |downloads_trf| |docker_trf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10.0rc2-0</code>,  <code>4.09.1-7</code>,  <code>4.09.1-6</code>,  <code>4.09.1-5</code>,  <code>4.09.1-4</code>,  <code>4.09.1-3</code>,  <code>4.09.1-2</code>,  <code>4.09.1-1</code>,  <code>4.09.1-0</code>,  </span></summary>
      

      ``4.10.0rc2-0``,  ``4.09.1-7``,  ``4.09.1-6``,  ``4.09.1-5``,  ``4.09.1-4``,  ``4.09.1-3``,  ``4.09.1-2``,  ``4.09.1-1``,  ``4.09.1-0``,  ``4.09-2``,  ``4.09-1``,  ``4.09-0``,  ``4.07b-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install trf

to add into an existing workspace instead, run::

    pixi add trf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trf

Alternatively, to install into a new environment, run::

    conda create -n envname trf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trf:<tag>

(see `trf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trf| image:: https://img.shields.io/conda/dn/bioconda/trf.svg?style=flat
   :target: https://anaconda.org/bioconda/trf
   :alt:   (downloads)
.. |docker_trf| image:: https://quay.io/repository/biocontainers/trf/status
   :target: https://quay.io/repository/biocontainers/trf
.. _`trf/tags`: https://quay.io/repository/biocontainers/trf?tab=tags


.. raw:: html

    <script>
        var package = "trf";
        var versions = ["4.10.0rc2","4.09.1","4.09.1","4.09.1","4.09.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trf/README.html