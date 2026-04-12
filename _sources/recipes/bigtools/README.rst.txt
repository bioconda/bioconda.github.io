:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigtools'
.. highlight: bash

bigtools
========

.. conda:recipe:: bigtools
   :replaces_section_title:
   :noindex:

   Bigtools provides a high\-level\, performant API for reading and writing bigWig and bigBed files.

   :homepage: https://github.com/jackh726/bigtools
   :documentation: https://docs.rs/bigtools/latest/bigtools
   
   :license: MIT / MIT
   :recipe: /`bigtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigtools/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10606493`

   


.. conda:package:: bigtools

   |downloads_bigtools| |docker_bigtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.6-1</code>,  <code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-1</code>,  </span></summary>
      

      ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install bigtools

to add into an existing workspace instead, run::

    pixi add bigtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bigtools

Alternatively, to install into a new environment, run::

    conda create -n envname bigtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bigtools:<tag>

(see `bigtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bigtools| image:: https://img.shields.io/conda/dn/bioconda/bigtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bigtools
   :alt:   (downloads)
.. |docker_bigtools| image:: https://quay.io/repository/biocontainers/bigtools/status
   :target: https://quay.io/repository/biocontainers/bigtools
.. _`bigtools/tags`: https://quay.io/repository/biocontainers/bigtools?tab=tags


.. raw:: html

    <script>
        var package = "bigtools";
        var versions = ["0.5.6","0.5.6","0.5.5","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigtools/README.html