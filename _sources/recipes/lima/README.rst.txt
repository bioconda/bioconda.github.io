:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lima'
.. highlight: bash

lima
====

.. conda:recipe:: lima
   :replaces_section_title:
   :noindex:

   lima \- The PacBio Barcode Demultiplexer

   :homepage: https://lima.how
   :license: BSD-3-Clause-Clear
   :recipe: /`lima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima/meta.yaml>`_

   


.. conda:package:: lima

   |downloads_lima| |docker_lima|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.13.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.9.0-1</code>,  <code>2.9.0-0</code>,  <code>2.7.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-1</code>,  </span></summary>
      

      ``2.13.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.7.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install lima

to add into an existing workspace instead, run::

    pixi add lima

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lima

Alternatively, to install into a new environment, run::

    conda create -n envname lima

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lima:<tag>

(see `lima/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lima| image:: https://img.shields.io/conda/dn/bioconda/lima.svg?style=flat
   :target: https://anaconda.org/bioconda/lima
   :alt:   (downloads)
.. |docker_lima| image:: https://quay.io/repository/biocontainers/lima/status
   :target: https://quay.io/repository/biocontainers/lima
.. _`lima/tags`: https://quay.io/repository/biocontainers/lima?tab=tags


.. raw:: html

    <script>
        var package = "lima";
        var versions = ["2.13.0","2.12.0","2.12.0","2.9.0","2.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lima/README.html