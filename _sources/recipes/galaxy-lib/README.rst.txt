:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-lib'
.. highlight: bash

galaxy-lib
==========

.. conda:recipe:: galaxy-lib
   :replaces_section_title:
   :noindex:

   Subset of Galaxy \(http\:\/\/galaxyproject.org\/\) core code base designed to be used a library.

   :homepage: https://github.com/galaxyproject/galaxy-lib
   :documentation: https://galaxy-lib.readthedocs.org
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`galaxy-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib/meta.yaml>`_

   


.. conda:package:: galaxy-lib

   |downloads_galaxy-lib| |docker_galaxy-lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>19.5.2-1</code>,  <code>19.5.2-0</code>,  <code>19.5.1-0</code>,  <code>18.9.2-0</code>,  <code>18.9.1-0</code>,  <code>18.5.13-2</code>,  <code>18.5.13-0</code>,  <code>18.5.5-0</code>,  <code>18.5.4-0</code>,  </span></summary>
      

      ``19.5.2-1``,  ``19.5.2-0``,  ``19.5.1-0``,  ``18.9.2-0``,  ``18.9.1-0``,  ``18.5.13-2``,  ``18.5.13-0``,  ``18.5.5-0``,  ``18.5.4-0``,  ``17.9.10-0``,  ``17.9.9-0``,  ``17.9.7-1``,  ``17.9.7-0``,  ``17.5.9-1``,  ``17.5.9-0``,  ``17.1.2-0``,  ``16.10.9-1``,  ``16.10.9-0``,  ``16.10.8-1``,  ``16.10.8-0``,  ``16.10.6-0``,  ``16.10.4-1``,  ``16.10.4-0``,  ``16.10.3-0``,  ``16.7.10-1``,  ``16.7.10-0``,  ``16.4.0-1``,  ``16.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boltons: 
   :depends on docutils: 
   :depends on markupsafe: 
   :depends on packaging: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on six: ``>=1.9.0``

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

    pixi global install galaxy-lib

to add into an existing workspace instead, run::

    pixi add galaxy-lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-lib

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-lib:<tag>

(see `galaxy-lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-lib| image:: https://img.shields.io/conda/dn/bioconda/galaxy-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-lib
   :alt:   (downloads)
.. |docker_galaxy-lib| image:: https://quay.io/repository/biocontainers/galaxy-lib/status
   :target: https://quay.io/repository/biocontainers/galaxy-lib
.. _`galaxy-lib/tags`: https://quay.io/repository/biocontainers/galaxy-lib?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-lib";
        var versions = ["19.5.2","19.5.2","19.5.1","18.9.2","18.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-lib/README.html