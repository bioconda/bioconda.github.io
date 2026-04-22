:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pullseq'
.. highlight: bash

pullseq
=======

.. conda:recipe:: pullseq
   :replaces_section_title:
   :noindex:

   Utility program for extracting sequences from a fasta\/fastq file.

   :homepage: https://github.com/bcthomas/pullseq
   :license: MIT
   :recipe: /`pullseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq/meta.yaml>`_

   


.. conda:package:: pullseq

   |downloads_pullseq| |docker_pullseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-11</code>,  <code>1.0.2-10</code>,  <code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  <code>1.0.2-5</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  </span></summary>
      

      ``1.0.2-11``,  ``1.0.2-10``,  ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``
   :depends on zlib: 

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

    pixi global install pullseq

to add into an existing workspace instead, run::

    pixi add pullseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pullseq

Alternatively, to install into a new environment, run::

    conda create -n envname pullseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pullseq:<tag>

(see `pullseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pullseq| image:: https://img.shields.io/conda/dn/bioconda/pullseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pullseq
   :alt:   (downloads)
.. |docker_pullseq| image:: https://quay.io/repository/biocontainers/pullseq/status
   :target: https://quay.io/repository/biocontainers/pullseq
.. _`pullseq/tags`: https://quay.io/repository/biocontainers/pullseq?tab=tags


.. raw:: html

    <script>
        var package = "pullseq";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pullseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pullseq/README.html