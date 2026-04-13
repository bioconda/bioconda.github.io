:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji'
.. highlight: bash

fiji
====

.. conda:recipe:: fiji
   :replaces_section_title:
   :noindex:

   Fiji is an image processing package—a \"batteries\-included\" distribution of ImageJ\, bundling a lot of plugins which facilitate scientific image analysis.

   :homepage: http://fiji.sc
   :license: GPL-3.0-or-later
   :recipe: /`fiji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji/meta.yaml>`_

   


.. conda:package:: fiji

   |downloads_fiji| |docker_fiji|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20250206-1</code>,  <code>20250206-0</code>,  <code>20240614-0</code>,  <code>20231211-0</code>,  <code>20220414-1</code>,  <code>20220414-0</code>,  <code>20170530-2</code>,  <code>20170530-1</code>,  <code>20170530-0</code>,  </span></summary>
      

      ``20250206-1``,  ``20250206-0``,  ``20240614-0``,  ``20231211-0``,  ``20220414-1``,  ``20220414-0``,  ``20170530-2``,  ``20170530-1``,  ``20170530-0``,  ``20151222-2``,  ``20151222-1``,  ``20151222-0``,  ``20141125-6``,  ``20141125-5``,  ``20141125-4``,  ``20141125-3``,  ``20141125-2``,  ``20141125-1``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install fiji

to add into an existing workspace instead, run::

    pixi add fiji

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fiji

Alternatively, to install into a new environment, run::

    conda create -n envname fiji

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fiji:<tag>

(see `fiji/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fiji| image:: https://img.shields.io/conda/dn/bioconda/fiji.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji
   :alt:   (downloads)
.. |docker_fiji| image:: https://quay.io/repository/biocontainers/fiji/status
   :target: https://quay.io/repository/biocontainers/fiji
.. _`fiji/tags`: https://quay.io/repository/biocontainers/fiji?tab=tags


.. raw:: html

    <script>
        var package = "fiji";
        var versions = ["20250206","20250206","20240614","20231211","20220414"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji/README.html