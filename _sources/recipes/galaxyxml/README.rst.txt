:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxyxml'
.. highlight: bash

galaxyxml
=========

.. conda:recipe:: galaxyxml
   :replaces_section_title:
   :noindex:

   Galaxy XML generation library

   :homepage: https://github.com/hexylena/galaxyxml/
   :license: APACHE / Apache-2.0
   :recipe: /`galaxyxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxyxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxyxml/meta.yaml>`_

   


.. conda:package:: galaxyxml

   |downloads_galaxyxml| |docker_galaxyxml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.4.14-0</code>,  <code>0.4.13-0</code>,  <code>0.4.12-0</code>,  <code>0.4.11-0</code>,  <code>0.4.10-0</code>,  <code>0.4.9-1</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-1``,  ``0.4.9-0``,  ``0.4.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on galaxy-tool-util: 
   :depends on lxml: 
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

    pixi global install galaxyxml

to add into an existing workspace instead, run::

    pixi add galaxyxml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxyxml

Alternatively, to install into a new environment, run::

    conda create -n envname galaxyxml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxyxml:<tag>

(see `galaxyxml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxyxml| image:: https://img.shields.io/conda/dn/bioconda/galaxyxml.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxyxml
   :alt:   (downloads)
.. |docker_galaxyxml| image:: https://quay.io/repository/biocontainers/galaxyxml/status
   :target: https://quay.io/repository/biocontainers/galaxyxml
.. _`galaxyxml/tags`: https://quay.io/repository/biocontainers/galaxyxml?tab=tags


.. raw:: html

    <script>
        var package = "galaxyxml";
        var versions = ["0.5.5","0.5.4","0.5.3","0.4.14","0.4.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxyxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxyxml/README.html