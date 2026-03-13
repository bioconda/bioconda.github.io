:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtfparse'
.. highlight: bash

gtfparse
========

.. conda:recipe:: gtfparse
   :replaces_section_title:
   :noindex:

   GTF Parsing

   :homepage: https://github.com/openvax/gtfparse
   :license: Apache / Apache-2.0
   :recipe: /`gtfparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse/meta.yaml>`_

   


.. conda:package:: gtfparse

   |downloads_gtfparse| |docker_gtfparse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=1.7``
   :depends on pandas: ``>=0.15``
   :depends on polars: ``>=0.20.2,<0.21.0``
   :depends on pyarrow: ``>=14.0.2``
   :depends on python: 

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

    pixi global install gtfparse

to add into an existing workspace instead, run::

    pixi add gtfparse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gtfparse

Alternatively, to install into a new environment, run::

    conda create -n envname gtfparse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gtfparse:<tag>

(see `gtfparse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gtfparse| image:: https://img.shields.io/conda/dn/bioconda/gtfparse.svg?style=flat
   :target: https://anaconda.org/bioconda/gtfparse
   :alt:   (downloads)
.. |docker_gtfparse| image:: https://quay.io/repository/biocontainers/gtfparse/status
   :target: https://quay.io/repository/biocontainers/gtfparse
.. _`gtfparse/tags`: https://quay.io/repository/biocontainers/gtfparse?tab=tags


.. raw:: html

    <script>
        var package = "gtfparse";
        var versions = ["2.5.0","2.4.1","2.4.0","2.3.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtfparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtfparse/README.html