:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntlink'
.. highlight: bash

ntlink
======

.. conda:recipe:: ntlink
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using long reads and minimizers

   :homepage: https://github.com/bcgsc/ntLink
   :license: GPL-3.0
   :recipe: /`ntlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink/meta.yaml>`_

   


.. conda:package:: ntlink

   |downloads_ntlink| |docker_ntlink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.11-1</code>,  <code>1.3.11-0</code>,  <code>1.3.10-2</code>,  <code>1.3.10-0</code>,  <code>1.3.9-4</code>,  <code>1.3.9-3</code>,  <code>1.3.9-2</code>,  <code>1.3.9-1</code>,  <code>1.3.9-0</code>,  </span></summary>
      

      ``1.3.11-1``,  ``1.3.11-0``,  ``1.3.10-2``,  ``1.3.10-0``,  ``1.3.9-4``,  ``1.3.9-3``,  ``1.3.9-2``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abyss: ``>=2.3.0``
   :depends on btllib: ``>=1.7.1``
   :depends on make: 
   :depends on numpy: 
   :depends on python: 
   :depends on python-igraph: 
   :depends on zlib: 

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

    pixi global install ntlink

to add into an existing workspace instead, run::

    pixi add ntlink

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntlink

Alternatively, to install into a new environment, run::

    conda create -n envname ntlink

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntlink:<tag>

(see `ntlink/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntlink| image:: https://img.shields.io/conda/dn/bioconda/ntlink.svg?style=flat
   :target: https://anaconda.org/bioconda/ntlink
   :alt:   (downloads)
.. |docker_ntlink| image:: https://quay.io/repository/biocontainers/ntlink/status
   :target: https://quay.io/repository/biocontainers/ntlink
.. _`ntlink/tags`: https://quay.io/repository/biocontainers/ntlink?tab=tags


.. raw:: html

    <script>
        var package = "ntlink";
        var versions = ["1.3.11","1.3.11","1.3.10","1.3.10","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntlink/README.html