:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pblat'
.. highlight: bash

pblat
=====

.. conda:recipe:: pblat
   :replaces_section_title:
   :noindex:

   blat with multi\-threads support

   :homepage: https://icebert.github.io/pblat
   :developer docs: https://github.com/icebert/pblat
   :license: OTHER
   :recipe: /`pblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat/meta.yaml>`_
   :links: biotools: :biotools:`pblat`, doi: :doi:`10.1186/s12859-019-2597-8`

   


.. conda:package:: pblat

   |downloads_pblat| |docker_pblat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-4</code>,  <code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.5-2</code>,  <code>2.5-1</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  </span></summary>
      

      ``2.5.1-4``,  ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.4.0,<4.0a0``
   :depends on zlib: 

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

    pixi global install pblat

to add into an existing workspace instead, run::

    pixi add pblat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pblat

Alternatively, to install into a new environment, run::

    conda create -n envname pblat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pblat:<tag>

(see `pblat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pblat| image:: https://img.shields.io/conda/dn/bioconda/pblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pblat
   :alt:   (downloads)
.. |docker_pblat| image:: https://quay.io/repository/biocontainers/pblat/status
   :target: https://quay.io/repository/biocontainers/pblat
.. _`pblat/tags`: https://quay.io/repository/biocontainers/pblat?tab=tags


.. raw:: html

    <script>
        var package = "pblat";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.5.1"];
    </script>





Notes
-----
pblat is modified from blat\, the licence is the same as blat. The source code and executables are freely available for academic\, nonprofit and personal use. Commercial licensing information is available on the Kent Informatics website. To cite\: Wang M \& Kong L. pblat\: a multithread blat algorithm speeding up aligning sequences to genomes. BMC Bioinformatics 2019\, 20\(1\).


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pblat/README.html