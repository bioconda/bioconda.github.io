:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcplib'
.. highlight: bash

dcplib
======

.. conda:recipe:: dcplib
   :replaces_section_title:
   :noindex:

   Modules shared among multiple Data Coordination Platform components.

   :homepage: http://github.com/HumanCellAtlas/dcplib
   :license: MIT / MIT
   :recipe: /`dcplib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib/meta.yaml>`_

   The Data Coordination Platform \(DCP\) comprises the infrastructure that 
   supports operation of the Human Cell Atlas \(HCA\). This package provides
   modules to DCP components\, including the HCA command line interface \(CLI\).



.. conda:package:: dcplib

   |downloads_dcplib| |docker_dcplib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-0</code>,  <code>3.11.0-0</code>,  <code>3.9.0-0</code>,  <code>3.8.0-0</code>,  <code>3.7.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  </span></summary>
      

      ``3.12.0-0``,  ``3.11.0-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.7.13``
   :depends on crc32c: 
   :depends on puremagic: ``1.4``
   :depends on python: ``>=3``
   :depends on requests: ``>=2.18.4,<3``

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

    pixi global install dcplib

to add into an existing workspace instead, run::

    pixi add dcplib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dcplib

Alternatively, to install into a new environment, run::

    conda create -n envname dcplib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dcplib:<tag>

(see `dcplib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dcplib| image:: https://img.shields.io/conda/dn/bioconda/dcplib.svg?style=flat
   :target: https://anaconda.org/bioconda/dcplib
   :alt:   (downloads)
.. |docker_dcplib| image:: https://quay.io/repository/biocontainers/dcplib/status
   :target: https://quay.io/repository/biocontainers/dcplib
.. _`dcplib/tags`: https://quay.io/repository/biocontainers/dcplib?tab=tags


.. raw:: html

    <script>
        var package = "dcplib";
        var versions = ["3.12.0","3.11.0","3.9.0","3.8.0","3.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcplib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcplib/README.html