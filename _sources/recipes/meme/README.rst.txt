:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meme'
.. highlight: bash

meme
====

.. conda:recipe:: meme
   :replaces_section_title:
   :noindex:

   Motif\-based sequence analysis tools.

   :homepage: https://meme-suite.org
   :documentation: https://meme-suite.org/meme/doc/overview.html
   
   :license: Custom
   :recipe: /`meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme/meta.yaml>`_
   :links: biotools: :biotools:`meme_suite`, usegalaxy-eu: :usegalaxy-eu:`meme_dreme`, doi: :doi:`10.1093/nar/gkv416`

   


.. conda:package:: meme

   |downloads_meme| |docker_meme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.5.9-0</code>,  <code>5.5.8-0</code>,  <code>5.5.7-3</code>,  <code>5.5.7-2</code>,  <code>5.5.7-1</code>,  <code>5.5.7-0</code>,  <code>5.5.6-0</code>,  <code>5.5.5-1</code>,  <code>5.5.5-0</code>,  </span></summary>
      

      ``5.5.9-0``,  ``5.5.8-0``,  ``5.5.7-3``,  ``5.5.7-2``,  ``5.5.7-1``,  ``5.5.7-0``,  ``5.5.6-0``,  ``5.5.5-1``,  ``5.5.5-0``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-1``,  ``5.5.2-0``,  ``5.4.1-2``,  ``5.4.1-1``,  ``5.4.1-0``,  ``5.3.0-2``,  ``5.3.0-0``,  ``5.1.1-3``,  ``5.1.1-2``,  ``5.1.1-1``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.5-0``,  ``5.0.2-5``,  ``5.0.2-3``,  ``5.0.2-2``,  ``4.12.0-2``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.11.2-9``,  ``4.11.2-8``,  ``4.11.2-6``,  ``4.11.2-5``,  ``4.11.2-4``,  ``4.11.2-3``,  ``4.11.2-2``,  ``4.11.2-1``,  ``4.11.2-0``,  ``4.11.1-7``,  ``4.11.1-6``,  ``4.11.1-5``,  ``4.11.1-4``,  ``4.11.1-3``,  ``4.11.1-2``,  ``4.11.1-1``,  ``4.11.1-0``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on icu: ``>=73.2,<74.0a0``
   :depends on libexpat: ``>=2.7.3,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libxml2: ``>=2.12.7,<3.0a0``
   :depends on libxslt: ``>=1.1.39,<2.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on nodejs: ``>=22.6.0,<23.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-cgi: 
   :depends on perl-file-which: 
   :depends on perl-html-parser: 
   :depends on perl-html-template: 
   :depends on perl-html-tree: 
   :depends on perl-json: 
   :depends on perl-log-log4perl: 
   :depends on perl-math-cdf: 
   :depends on perl-module-build: 
   :depends on perl-sys-info: 
   :depends on perl-xml-parser: 
   :depends on perl-xml-simple: 
   :depends on perl-yaml: 
   :depends on python: ``>=3.7``

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

    pixi global install meme

to add into an existing workspace instead, run::

    pixi add meme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meme

Alternatively, to install into a new environment, run::

    conda create -n envname meme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meme:<tag>

(see `meme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meme| image:: https://img.shields.io/conda/dn/bioconda/meme.svg?style=flat
   :target: https://anaconda.org/bioconda/meme
   :alt:   (downloads)
.. |docker_meme| image:: https://quay.io/repository/biocontainers/meme/status
   :target: https://quay.io/repository/biocontainers/meme
.. _`meme/tags`: https://quay.io/repository/biocontainers/meme?tab=tags


.. raw:: html

    <script>
        var package = "meme";
        var versions = ["5.5.9","5.5.8","5.5.7","5.5.7","5.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meme/README.html