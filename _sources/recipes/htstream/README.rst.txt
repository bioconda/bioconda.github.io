:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htstream'
.. highlight: bash

htstream
========

.. conda:recipe:: htstream
   :replaces_section_title:
   :noindex:

   \"HTStream is a quality control and processing pipeline for High Throughput Sequencing data.
   The difference between HTStream and other tools is that HTStream uses a tab delimited fastq format that allows for streaming from application to application.
   This streaming creates some awesome efficiencies when processing HTS data and makes it fully interoperable with other standard Linux tools.\"


   :homepage: https://s4hts.github.io/HTStream
   :developer docs: https://github.com/s4hts/HTStream
   :license: APACHE / Apache-2.0
   :recipe: /`htstream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream/meta.yaml>`_
   :links: biotools: :biotools:`htstream`

   


.. conda:package:: htstream

   |downloads_htstream| |docker_htstream|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.3.3-6</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  </span></summary>
      

      ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.3-6``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
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

    pixi global install htstream

to add into an existing workspace instead, run::

    pixi add htstream

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htstream

Alternatively, to install into a new environment, run::

    conda create -n envname htstream

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htstream:<tag>

(see `htstream/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htstream| image:: https://img.shields.io/conda/dn/bioconda/htstream.svg?style=flat
   :target: https://anaconda.org/bioconda/htstream
   :alt:   (downloads)
.. |docker_htstream| image:: https://quay.io/repository/biocontainers/htstream/status
   :target: https://quay.io/repository/biocontainers/htstream
.. _`htstream/tags`: https://quay.io/repository/biocontainers/htstream?tab=tags


.. raw:: html

    <script>
        var package = "htstream";
        var versions = ["1.4.1","1.4.1","1.4.1","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htstream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htstream/README.html