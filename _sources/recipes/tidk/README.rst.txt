:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidk'
.. highlight: bash

tidk
====

.. conda:recipe:: tidk
   :replaces_section_title:
   :noindex:

   Identify and find telomeres\, or telomeric repeats in a genome.


   :homepage: https://github.com/tolkit/telomeric-identifier
   :license: MIT / MIT
   :recipe: /`tidk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidk/meta.yaml>`_

   


.. conda:package:: tidk

   |downloads_tidk| |docker_tidk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.65-0</code>,  <code>0.2.64-0</code>,  <code>0.2.63-2</code>,  <code>0.2.63-1</code>,  <code>0.2.63-0</code>,  <code>0.2.41-0</code>,  <code>0.2.31-2</code>,  <code>0.2.31-1</code>,  <code>0.2.31-0</code>,  </span></summary>
      

      ``0.2.65-0``,  ``0.2.64-0``,  ``0.2.63-2``,  ``0.2.63-1``,  ``0.2.63-0``,  ``0.2.41-0``,  ``0.2.31-2``,  ``0.2.31-1``,  ``0.2.31-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openssl: ``>=3.4.1,<4.0a0``

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

    pixi global install tidk

to add into an existing workspace instead, run::

    pixi add tidk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tidk

Alternatively, to install into a new environment, run::

    conda create -n envname tidk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tidk:<tag>

(see `tidk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tidk| image:: https://img.shields.io/conda/dn/bioconda/tidk.svg?style=flat
   :target: https://anaconda.org/bioconda/tidk
   :alt:   (downloads)
.. |docker_tidk| image:: https://quay.io/repository/biocontainers/tidk/status
   :target: https://quay.io/repository/biocontainers/tidk
.. _`tidk/tags`: https://quay.io/repository/biocontainers/tidk?tab=tags


.. raw:: html

    <script>
        var package = "tidk";
        var versions = ["0.2.65","0.2.64","0.2.63","0.2.63","0.2.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidk/README.html