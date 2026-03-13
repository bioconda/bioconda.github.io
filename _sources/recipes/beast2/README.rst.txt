:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast2'
.. highlight: bash

beast2
======

.. conda:recipe:: beast2
   :replaces_section_title:
   :noindex:

   BEAST 2 is a cross\-platform program for Bayesian phylogenetic analysis of molecular sequences.

   :homepage: http://www.beast2.org
   :license: LGPL-2.1-or-later
   :recipe: /`beast2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2/meta.yaml>`_

   


.. conda:package:: beast2

   |downloads_beast2| |docker_beast2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-2</code>,  <code>2.6.3-1</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-4</code>,  <code>2.5.0-3</code>,  <code>2.5.0-2</code>,  </span></summary>
      

      ``2.6.3-2``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on beagle-lib: 
   :depends on font-ttf-ubuntu: 
   :depends on fontconfig: 
   :depends on freetype: 
   :depends on openjdk: ``8.0.* zulu8*``
   :depends on xorg-libxtst: 

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

    pixi global install beast2

to add into an existing workspace instead, run::

    pixi add beast2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beast2

Alternatively, to install into a new environment, run::

    conda create -n envname beast2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beast2:<tag>

(see `beast2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beast2| image:: https://img.shields.io/conda/dn/bioconda/beast2.svg?style=flat
   :target: https://anaconda.org/bioconda/beast2
   :alt:   (downloads)
.. |docker_beast2| image:: https://quay.io/repository/biocontainers/beast2/status
   :target: https://quay.io/repository/biocontainers/beast2
.. _`beast2/tags`: https://quay.io/repository/biocontainers/beast2?tab=tags


.. raw:: html

    <script>
        var package = "beast2";
        var versions = ["2.6.3","2.6.3","2.6.3","2.6.2","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast2/README.html