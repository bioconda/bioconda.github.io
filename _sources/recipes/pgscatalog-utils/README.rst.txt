:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog-utils'
.. highlight: bash

pgscatalog-utils
================

.. conda:recipe:: pgscatalog-utils
   :replaces_section_title:
   :noindex:

   Utilities for working with PGS Catalog API and scoring files.

   :homepage: https://github.com/PGScatalog/pygscatalog
   :documentation: https://pygscatalog.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`pgscatalog-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog-utils/meta.yaml>`_

   


.. conda:package:: pgscatalog-utils

   |downloads_pgscatalog-utils| |docker_pgscatalog-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.4.4-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.4-0``,  ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pgscatalog.calc: ``>=0.3.0,<0.4.0``
   :depends on pgscatalog.core: ``>=0.3.3,<0.4.0``
   :depends on pgscatalog.match: ``>=0.3.3,<0.4.0``
   :depends on python: ``>=3.10.0``

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

    pixi global install pgscatalog-utils

to add into an existing workspace instead, run::

    pixi add pgscatalog-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgscatalog-utils

Alternatively, to install into a new environment, run::

    conda create -n envname pgscatalog-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgscatalog-utils:<tag>

(see `pgscatalog-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgscatalog-utils| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog-utils
   :alt:   (downloads)
.. |docker_pgscatalog-utils| image:: https://quay.io/repository/biocontainers/pgscatalog-utils/status
   :target: https://quay.io/repository/biocontainers/pgscatalog-utils
.. _`pgscatalog-utils/tags`: https://quay.io/repository/biocontainers/pgscatalog-utils?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog-utils";
        var versions = ["2.0.2","2.0.1","2.0.0","1.4.4","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog-utils/README.html