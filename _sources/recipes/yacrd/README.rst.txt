:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yacrd'
.. highlight: bash

yacrd
=====

.. conda:recipe:: yacrd
   :replaces_section_title:
   :noindex:

   Yet Another Chimeric Read Detector\, with long\-read mapper result as input.

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`yacrd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd/meta.yaml>`_

   


.. conda:package:: yacrd

   |downloads_yacrd| |docker_yacrd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-8``,  ``0.5.1-7``,  ``0.5.1-6``,  ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.4.1-8``,  ``0.4.1-7``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4-1``,  ``0.3-1``,  ``0.2.1-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
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

    pixi global install yacrd

to add into an existing workspace instead, run::

    pixi add yacrd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yacrd

Alternatively, to install into a new environment, run::

    conda create -n envname yacrd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yacrd:<tag>

(see `yacrd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yacrd| image:: https://img.shields.io/conda/dn/bioconda/yacrd.svg?style=flat
   :target: https://anaconda.org/bioconda/yacrd
   :alt:   (downloads)
.. |docker_yacrd| image:: https://quay.io/repository/biocontainers/yacrd/status
   :target: https://quay.io/repository/biocontainers/yacrd
.. _`yacrd/tags`: https://quay.io/repository/biocontainers/yacrd?tab=tags


.. raw:: html

    <script>
        var package = "yacrd";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yacrd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yacrd/README.html