:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapterremoval'
.. highlight: bash

adapterremoval
==============

.. conda:recipe:: adapterremoval
   :replaces_section_title:
   :noindex:

   The AdapterRemoval v2 tool for merging and clipping reads.

   :homepage: https://github.com/MikkelSchubert/adapterremoval
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`adapterremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval/meta.yaml>`_
   :links: biotools: :biotools:`adapterremoval`, usegalaxy-eu: :usegalaxy-eu:`adapter_removal`

   


.. conda:package:: adapterremoval

   |downloads_adapterremoval| |docker_adapterremoval|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-2</code>,  <code>2.3.4-1</code>,  <code>2.3.4-0</code>,  <code>2.3.3-3</code>,  <code>2.3.3-2</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-2</code>,  <code>2.3.2-1</code>,  </span></summary>
      

      ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-3``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install adapterremoval

to add into an existing workspace instead, run::

    pixi add adapterremoval

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install adapterremoval

Alternatively, to install into a new environment, run::

    conda create -n envname adapterremoval

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/adapterremoval:<tag>

(see `adapterremoval/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_adapterremoval| image:: https://img.shields.io/conda/dn/bioconda/adapterremoval.svg?style=flat
   :target: https://anaconda.org/bioconda/adapterremoval
   :alt:   (downloads)
.. |docker_adapterremoval| image:: https://quay.io/repository/biocontainers/adapterremoval/status
   :target: https://quay.io/repository/biocontainers/adapterremoval
.. _`adapterremoval/tags`: https://quay.io/repository/biocontainers/adapterremoval?tab=tags


.. raw:: html

    <script>
        var package = "adapterremoval";
        var versions = ["2.3.4","2.3.4","2.3.4","2.3.3","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremoval/README.html