:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cramino'
.. highlight: bash

cramino
=======

.. conda:recipe:: cramino
   :replaces_section_title:
   :noindex:

   A tool for very fast quality assessment of long read cram\/bam files.

   :homepage: https://github.com/wdecoster/cramino
   :license: MIT / MIT
   :recipe: /`cramino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramino/meta.yaml>`_

   


.. conda:package:: cramino

   |downloads_cramino| |docker_cramino|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  <code>0.14.5-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.1-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.9-0``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openssl: ``>=3.6.0,<4.0a0``

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

    pixi global install cramino

to add into an existing workspace instead, run::

    pixi add cramino

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cramino

Alternatively, to install into a new environment, run::

    conda create -n envname cramino

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cramino:<tag>

(see `cramino/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cramino| image:: https://img.shields.io/conda/dn/bioconda/cramino.svg?style=flat
   :target: https://anaconda.org/bioconda/cramino
   :alt:   (downloads)
.. |docker_cramino| image:: https://quay.io/repository/biocontainers/cramino/status
   :target: https://quay.io/repository/biocontainers/cramino
.. _`cramino/tags`: https://quay.io/repository/biocontainers/cramino?tab=tags


.. raw:: html

    <script>
        var package = "cramino";
        var versions = ["1.3.0","1.2.0","1.1.0","1.0.0","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cramino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cramino/README.html