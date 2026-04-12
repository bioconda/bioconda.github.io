:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mashmap'
.. highlight: bash

mashmap
=======

.. conda:recipe:: mashmap
   :replaces_section_title:
   :noindex:

   A fast approximate aligner for long DNA sequences.

   :homepage: https://github.com/marbl/MashMap
   :documentation: https://github.com/marbl/MashMap/blob/v3.1.3/README.md
   
   :license: Custom
   :recipe: /`mashmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap/meta.yaml>`_
   :links: biotools: :biotools:`mashmap`, usegalaxy-eu: :usegalaxy-eu:`mashmap`, doi: :doi:`10.1101/2023.05.16.540882`, doi: :doi:`10.1093/bioinformatics/bty597`, doi: :doi:`10.1007/978-3-319-56970-3_5`

   


.. conda:package:: mashmap

   |downloads_mashmap| |docker_mashmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-2</code>,  <code>3.1.3-1</code>,  <code>3.1.3-0</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>3.0.4-0</code>,  </span></summary>
      

      ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0-0``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openblas: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install mashmap

to add into an existing workspace instead, run::

    pixi add mashmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mashmap

Alternatively, to install into a new environment, run::

    conda create -n envname mashmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mashmap:<tag>

(see `mashmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mashmap| image:: https://img.shields.io/conda/dn/bioconda/mashmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mashmap
   :alt:   (downloads)
.. |docker_mashmap| image:: https://quay.io/repository/biocontainers/mashmap/status
   :target: https://quay.io/repository/biocontainers/mashmap
.. _`mashmap/tags`: https://quay.io/repository/biocontainers/mashmap?tab=tags


.. raw:: html

    <script>
        var package = "mashmap";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashmap/README.html