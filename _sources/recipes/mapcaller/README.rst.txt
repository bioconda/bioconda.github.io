:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapcaller'
.. highlight: bash

mapcaller
=========

.. conda:recipe:: mapcaller
   :replaces_section_title:
   :noindex:

   MapCaller\: combined short\-read mapper and variant caller

   :homepage: https://github.com/hsinnan75/MapCaller
   :license: MIT
   :recipe: /`mapcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller/meta.yaml>`_
   :links: doi: :doi:`10.1101/783605`

   An efficient and versatile approach for short\-read mapping and variant identification using high\-throughput sequenced data.


.. conda:package:: mapcaller

   |downloads_mapcaller| |docker_mapcaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.9.41-6</code>,  <code>0.9.9.41-5</code>,  <code>0.9.9.41-4</code>,  <code>0.9.9.41-3</code>,  <code>0.9.9.41-2</code>,  <code>0.9.9.41-1</code>,  <code>0.9.9.41-0</code>,  <code>0.9.9.40-0</code>,  <code>0.9.9.39-0</code>,  </span></summary>
      

      ``0.9.9.41-6``,  ``0.9.9.41-5``,  ``0.9.9.41-4``,  ``0.9.9.41-3``,  ``0.9.9.41-2``,  ``0.9.9.41-1``,  ``0.9.9.41-0``,  ``0.9.9.40-0``,  ``0.9.9.39-0``,  ``0.9.9.38-0``,  ``0.9.9.37-0``,  ``0.9.9.35-0``,  ``0.9.9.34-0``,  ``0.9.9.33-0``,  ``0.9.9.32-0``,  ``0.9.9.31-0``,  ``0.9.9.30-0``,  ``0.9.9.29-0``,  ``0.9.9.28-0``,  ``0.9.9.27-0``,  ``0.9.9.26-0``,  ``0.9.9.25-0``,  ``0.9.9.23-0``,  ``0.9.9.22-0``,  ``0.9.9.21-0``,  ``0.9.9.19-0``,  ``0.9.9.18-0``,  ``0.9.9.17-0``,  ``0.9.9.16-0``,  ``0.9.9.15-0``,  ``0.9.9.7-0``,  ``0.9.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
   :depends on zlib: 

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

    pixi global install mapcaller

to add into an existing workspace instead, run::

    pixi add mapcaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mapcaller

Alternatively, to install into a new environment, run::

    conda create -n envname mapcaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mapcaller:<tag>

(see `mapcaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mapcaller| image:: https://img.shields.io/conda/dn/bioconda/mapcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/mapcaller
   :alt:   (downloads)
.. |docker_mapcaller| image:: https://quay.io/repository/biocontainers/mapcaller/status
   :target: https://quay.io/repository/biocontainers/mapcaller
.. _`mapcaller/tags`: https://quay.io/repository/biocontainers/mapcaller?tab=tags


.. raw:: html

    <script>
        var package = "mapcaller";
        var versions = ["0.9.9.41","0.9.9.41","0.9.9.41","0.9.9.41","0.9.9.41"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapcaller/README.html