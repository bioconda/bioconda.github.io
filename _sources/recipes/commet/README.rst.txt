:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commet'
.. highlight: bash

commet
======

.. conda:recipe:: commet
   :replaces_section_title:
   :noindex:

   Comparing and combining multiple metagenomic datasets.

   :homepage: https://github.com/pierrepeterlongo/commet
   :documentation: https://colibread.inria.fr/software/commet
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`commet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet/meta.yaml>`_
   :links: biotools: :biotools:`commet`, doi: :doi:`10.1109/BIBM.2014.6999135`

   


.. conda:package:: commet

   |downloads_commet| |docker_commet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>24.7.14-13</code>,  <code>24.7.14-11</code>,  <code>24.7.14-10</code>,  <code>24.7.14-9</code>,  <code>24.7.14-8</code>,  <code>24.7.14-7</code>,  <code>24.7.14-6</code>,  <code>24.7.14-5</code>,  <code>24.7.14-4</code>,  </span></summary>
      

      ``24.7.14-13``,  ``24.7.14-11``,  ``24.7.14-10``,  ``24.7.14-9``,  ``24.7.14-8``,  ``24.7.14-7``,  ``24.7.14-6``,  ``24.7.14-5``,  ``24.7.14-4``,  ``24.7.14-3``,  ``24.7.14-2``,  ``24.7.14-1``,  ``24.7.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-gplots: 
   :depends on setuptools: 

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

    pixi global install commet

to add into an existing workspace instead, run::

    pixi add commet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install commet

Alternatively, to install into a new environment, run::

    conda create -n envname commet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/commet:<tag>

(see `commet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_commet| image:: https://img.shields.io/conda/dn/bioconda/commet.svg?style=flat
   :target: https://anaconda.org/bioconda/commet
   :alt:   (downloads)
.. |docker_commet| image:: https://quay.io/repository/biocontainers/commet/status
   :target: https://quay.io/repository/biocontainers/commet
.. _`commet/tags`: https://quay.io/repository/biocontainers/commet?tab=tags


.. raw:: html

    <script>
        var package = "commet";
        var versions = ["24.7.14","24.7.14","24.7.14","24.7.14","24.7.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commet/README.html