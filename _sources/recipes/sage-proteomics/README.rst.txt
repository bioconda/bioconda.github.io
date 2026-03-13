:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sage-proteomics'
.. highlight: bash

sage-proteomics
===============

.. conda:recipe:: sage-proteomics
   :replaces_section_title:
   :noindex:

   Proteomics searching so fast it feels like magic.

   :homepage: https://github.com/lazear/sage
   :documentation: https://lazear.github.io/sage/
   
   :license: MIT / MIT
   :recipe: /`sage-proteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sage-proteomics/meta.yaml>`_

   


.. conda:package:: sage-proteomics

   |downloads_sage-proteomics| |docker_sage-proteomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.7-2</code>,  <code>0.14.7-1</code>,  <code>0.14.7-0</code>,  <code>0.14.6-0</code>,  <code>0.14.5-0</code>,  <code>0.14.4-0</code>,  <code>0.14.3-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  </span></summary>
      

      ``0.14.7-2``,  ``0.14.7-1``,  ``0.14.7-0``,  ``0.14.6-0``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-2``,  ``0.13.1-0``,  ``0.12.0-2``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.4-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``

      
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

    pixi global install sage-proteomics

to add into an existing workspace instead, run::

    pixi add sage-proteomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sage-proteomics

Alternatively, to install into a new environment, run::

    conda create -n envname sage-proteomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sage-proteomics:<tag>

(see `sage-proteomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sage-proteomics| image:: https://img.shields.io/conda/dn/bioconda/sage-proteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/sage-proteomics
   :alt:   (downloads)
.. |docker_sage-proteomics| image:: https://quay.io/repository/biocontainers/sage-proteomics/status
   :target: https://quay.io/repository/biocontainers/sage-proteomics
.. _`sage-proteomics/tags`: https://quay.io/repository/biocontainers/sage-proteomics?tab=tags


.. raw:: html

    <script>
        var package = "sage-proteomics";
        var versions = ["0.14.7","0.14.7","0.14.7","0.14.6","0.14.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sage-proteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sage-proteomics/README.html