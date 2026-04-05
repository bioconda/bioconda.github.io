:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseq'
.. highlight: bash

htseq
=====

.. conda:recipe:: htseq
   :replaces_section_title:
   :noindex:

   HTSeq is a Python library to facilitate processing and analysis of data from high\-throughput sequencing \(HTS\) experiments.

   :homepage: https://github.com/htseq/htseq
   :documentation: https://htseq.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`htseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq/meta.yaml>`_
   :links: biotools: :biotools:`htseq`, usegalaxy-eu: :usegalaxy-eu:`htseq_count`, doi: :doi:`10.1093/bioinformatics/btu638`

   


.. conda:package:: htseq

   |downloads_htseq| |docker_htseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.0.9-0</code>,  <code>2.0.5-4</code>,  <code>2.0.5-3</code>,  <code>2.0.5-2</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``2.1.2-1``,  ``2.1.2-0``,  ``2.0.9-0``,  ``2.0.5-4``,  ``2.0.5-3``,  ``2.0.5-2``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.99.2-2``,  ``1.99.2-1``,  ``1.99.2-0``,  ``0.13.5-1``,  ``0.13.5-0``,  ``0.12.4-2``,  ``0.12.4-1``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.11.3-0``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.6.1.post1-6``,  ``0.6.1.post1-5``,  ``0.6.1.post1-4``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.1p1-1``,  ``0.6.1p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: ``>=1.4``
   :depends on numpy: ``>=1.23,<3``
   :depends on numpy: ``>=2.4.2,<3.0a0``
   :depends on pandas: ``>=1.1.0``
   :depends on pysam: ``>=0.15.1``
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on scipy: ``>=1.5.0``

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

    pixi global install htseq

to add into an existing workspace instead, run::

    pixi add htseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htseq

Alternatively, to install into a new environment, run::

    conda create -n envname htseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htseq:<tag>

(see `htseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htseq| image:: https://img.shields.io/conda/dn/bioconda/htseq.svg?style=flat
   :target: https://anaconda.org/bioconda/htseq
   :alt:   (downloads)
.. |docker_htseq| image:: https://quay.io/repository/biocontainers/htseq/status
   :target: https://quay.io/repository/biocontainers/htseq
.. _`htseq/tags`: https://quay.io/repository/biocontainers/htseq?tab=tags


.. raw:: html

    <script>
        var package = "htseq";
        var versions = ["2.1.2","2.1.2","2.0.9","2.0.5","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseq/README.html