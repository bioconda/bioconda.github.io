:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-counter'
.. highlight: bash

kmer-counter
============

.. conda:recipe:: kmer-counter
   :replaces_section_title:
   :noindex:

   kmer\-counter is an efficient kmer counter for large sequencing read sets.

   :homepage: https://github.com/CobiontID/kmer-counter
   :license: MIT
   :recipe: /`kmer-counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-counter/meta.yaml>`_

   This k\-mer counter\, based on Needletail\'s efficient FASTA parser is designed to tally
   k\-mer counts for large sequencing read sets. It was written with downstream processing
   in TensorFlow or NumPy in mind\, and stores the results in a npy file.



.. conda:package:: kmer-counter

   |downloads_kmer-counter| |docker_kmer-counter|

   :versions:
      
      

      ``0.1.2-0``

      

   

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

    pixi global install kmer-counter

to add into an existing workspace instead, run::

    pixi add kmer-counter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmer-counter

Alternatively, to install into a new environment, run::

    conda create -n envname kmer-counter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmer-counter:<tag>

(see `kmer-counter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmer-counter| image:: https://img.shields.io/conda/dn/bioconda/kmer-counter.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-counter
   :alt:   (downloads)
.. |docker_kmer-counter| image:: https://quay.io/repository/biocontainers/kmer-counter/status
   :target: https://quay.io/repository/biocontainers/kmer-counter
.. _`kmer-counter/tags`: https://quay.io/repository/biocontainers/kmer-counter?tab=tags


.. raw:: html

    <script>
        var package = "kmer-counter";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-counter/README.html