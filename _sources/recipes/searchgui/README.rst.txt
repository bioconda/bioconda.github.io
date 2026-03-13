:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'searchgui'
.. highlight: bash

searchgui
=========

.. conda:recipe:: searchgui
   :replaces_section_title:
   :noindex:

   User\-friendly graphical tool for using proteomics identification search engines.

   :homepage: https://github.com/compomics/searchgui
   :documentation: https://github.com/compomics/searchgui/blob/master/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`searchgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui/meta.yaml>`_
   :links: biotools: :biotools:`searchgui`, usegalaxy-eu: :usegalaxy-eu:`search_gui`, doi: :doi:`10.1002/pmic.201000595`

   SearchGUI is a user\-friendly open\-source graphical user interface for configuring and running proteomics identification search engines\, currently supporting X\!Tandem\, MS\-GF\+\, MetaMorpheus\, MS Amanda\, MyriMatch\, Comet\, Tide\, Andromeda and OMSSA.


.. conda:package:: searchgui

   |downloads_searchgui| |docker_searchgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.15-0</code>,  <code>4.3.14-0</code>,  <code>4.3.11-0</code>,  <code>4.3.9-0</code>,  <code>4.3.6-0</code>,  <code>4.3.5-0</code>,  <code>4.3.3-0</code>,  <code>4.3.1-0</code>,  <code>4.3.0-0</code>,  </span></summary>
      

      ``4.3.15-0``,  ``4.3.14-0``,  ``4.3.11-0``,  ``4.3.9-0``,  ``4.3.6-0``,  ``4.3.5-0``,  ``4.3.3-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.17-0``,  ``4.2.14-0``,  ``4.2.9-0``,  ``4.1.24-0``,  ``4.0.41-1``,  ``4.0.41-0``,  ``4.0.33-0``,  ``4.0.32-0``,  ``4.0.25-2``,  ``4.0.25-0``,  ``4.0.22-1``,  ``4.0.22-0``,  ``4.0.12-0``,  ``4.0.7-0``,  ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.1.alpha-0``,  ``3.3.10-0``,  ``3.3.9-1``,  ``3.3.9-0``,  ``3.3.6-1``,  ``3.3.5-1``,  ``3.3.3-1``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.2.26-0``,  ``3.2.24-0``,  ``3.2.20-0``,  ``3.2.13-1``,  ``3.2.13-0``,  ``3.2.11-1``,  ``3.2.11-0``,  ``3.2.8-1``,  ``3.2.8-0``,  ``3.2.7-1``,  ``3.2.7-0``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.5-1``,  ``3.2.5-0``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.1.4-2``,  ``3.1.4-1``,  ``3.1.4-0``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.16.0``
   :depends on fontconfig: 
   :depends on fonts-conda-ecosystem: 
   :depends on metamorpheus: ``1.1.0``
   :depends on mono: ``>=6.0.0``
   :depends on openjdk: ``>=21``
   :depends on python: 
   :depends on xtandem: ``15.12.15.2``

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

    pixi global install searchgui

to add into an existing workspace instead, run::

    pixi add searchgui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install searchgui

Alternatively, to install into a new environment, run::

    conda create -n envname searchgui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/searchgui:<tag>

(see `searchgui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_searchgui| image:: https://img.shields.io/conda/dn/bioconda/searchgui.svg?style=flat
   :target: https://anaconda.org/bioconda/searchgui
   :alt:   (downloads)
.. |docker_searchgui| image:: https://quay.io/repository/biocontainers/searchgui/status
   :target: https://quay.io/repository/biocontainers/searchgui
.. _`searchgui/tags`: https://quay.io/repository/biocontainers/searchgui?tab=tags


.. raw:: html

    <script>
        var package = "searchgui";
        var versions = ["4.3.15","4.3.14","4.3.11","4.3.9","4.3.6"];
    </script>





Notes
-----
SearchGUI is Java program that comes with a custom wrapper shell script. This shell wrapper is called \"opsin\" and is on \$PATH by default. By default \"\-Xms512m \-Xmx4g\" is set in the wrapper. If you want to overwrite it you can specify these values directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \"searchgui \-Xms512m \-Xmx8g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/searchgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/searchgui/README.html