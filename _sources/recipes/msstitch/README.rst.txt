:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msstitch'
.. highlight: bash

msstitch
========

.. conda:recipe:: msstitch
   :replaces_section_title:
   :noindex:

   MS proteomics post processing utilities.

   :homepage: https://github.com/lehtiolab/msstitch
   :license: MIT / MIT
   :recipe: /`msstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch/meta.yaml>`_

   


.. conda:package:: msstitch

   |downloads_msstitch| |docker_msstitch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.19-0</code>,  <code>3.18-0</code>,  <code>3.17-0</code>,  <code>3.16-0</code>,  <code>3.15-0</code>,  <code>3.14-0</code>,  <code>3.13-0</code>,  <code>3.12-0</code>,  <code>3.11-0</code>,  </span></summary>
      

      ``3.19-0``,  ``3.18-0``,  ``3.17-0``,  ``3.16-0``,  ``3.15-0``,  ``3.14-0``,  ``3.13-0``,  ``3.12-0``,  ``3.11-0``,  ``3.10-0``,  ``3.9-0``,  ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``,  ``2.19-0``,  ``2.18-0``,  ``2.17-0``,  ``2.16-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-1``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.69``
   :depends on lxml: 
   :depends on numpy: 
   :depends on python: ``>=3``

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

    pixi global install msstitch

to add into an existing workspace instead, run::

    pixi add msstitch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msstitch

Alternatively, to install into a new environment, run::

    conda create -n envname msstitch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msstitch:<tag>

(see `msstitch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msstitch| image:: https://img.shields.io/conda/dn/bioconda/msstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/msstitch
   :alt:   (downloads)
.. |docker_msstitch| image:: https://quay.io/repository/biocontainers/msstitch/status
   :target: https://quay.io/repository/biocontainers/msstitch
.. _`msstitch/tags`: https://quay.io/repository/biocontainers/msstitch?tab=tags


.. raw:: html

    <script>
        var package = "msstitch";
        var versions = ["3.19","3.18","3.17","3.16","3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msstitch/README.html