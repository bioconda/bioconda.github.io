:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smof'
.. highlight: bash

smof
====

.. conda:recipe:: smof
   :replaces_section_title:
   :noindex:

   UNIX\-style utilities for FASTA file exploration

   :homepage: https://github.com/incertae-sedis/smof
   :license: MIT
   :recipe: /`smof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smof/meta.yaml>`_

   


.. conda:package:: smof

   |downloads_smof| |docker_smof|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.4-0</code>,  <code>2.22.2-0</code>,  <code>2.22.1-0</code>,  <code>2.22.0-0</code>,  <code>2.21.1-0</code>,  <code>2.19.0-0</code>,  <code>2.18.0-0</code>,  <code>2.17.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.22.4-0``,  ``2.22.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.21.1-0``,  ``2.19.0-0``,  ``2.18.0-0``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.14.3-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install smof

to add into an existing workspace instead, run::

    pixi add smof

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smof

Alternatively, to install into a new environment, run::

    conda create -n envname smof

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smof:<tag>

(see `smof/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smof| image:: https://img.shields.io/conda/dn/bioconda/smof.svg?style=flat
   :target: https://anaconda.org/bioconda/smof
   :alt:   (downloads)
.. |docker_smof| image:: https://quay.io/repository/biocontainers/smof/status
   :target: https://quay.io/repository/biocontainers/smof
.. _`smof/tags`: https://quay.io/repository/biocontainers/smof?tab=tags


.. raw:: html

    <script>
        var package = "smof";
        var versions = ["2.22.4","2.22.2","2.22.1","2.22.0","2.21.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smof/README.html