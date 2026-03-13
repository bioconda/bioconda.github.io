:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asciigenome'
.. highlight: bash

asciigenome
===========

.. conda:recipe:: asciigenome
   :replaces_section_title:
   :noindex:

   Command\-line genome browser running from terminal window and solely based on ASCII characters

   :homepage: https://github.com/dariober/ASCIIGenome
   :documentation: https://asciigenome.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`asciigenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome/meta.yaml>`_

   


.. conda:package:: asciigenome

   |downloads_asciigenome| |docker_asciigenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-2</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-2``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.6.4-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=17``
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

    pixi global install asciigenome

to add into an existing workspace instead, run::

    pixi add asciigenome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install asciigenome

Alternatively, to install into a new environment, run::

    conda create -n envname asciigenome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/asciigenome:<tag>

(see `asciigenome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_asciigenome| image:: https://img.shields.io/conda/dn/bioconda/asciigenome.svg?style=flat
   :target: https://anaconda.org/bioconda/asciigenome
   :alt:   (downloads)
.. |docker_asciigenome| image:: https://quay.io/repository/biocontainers/asciigenome/status
   :target: https://quay.io/repository/biocontainers/asciigenome
.. _`asciigenome/tags`: https://quay.io/repository/biocontainers/asciigenome?tab=tags


.. raw:: html

    <script>
        var package = "asciigenome";
        var versions = ["1.20.0","1.20.0","1.19.0","1.18.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asciigenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asciigenome/README.html