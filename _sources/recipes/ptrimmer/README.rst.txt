:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptrimmer'
.. highlight: bash

ptrimmer
========

.. conda:recipe:: ptrimmer
   :replaces_section_title:
   :noindex:

   Used to trim off the primer sequence from mutiplex amplicon sequencing

   :homepage: https://github.com/DMU-lilab/pTrimmer
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ptrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-2854-x`

   


.. conda:package:: ptrimmer

   |downloads_ptrimmer| |docker_ptrimmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``

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

    pixi global install ptrimmer

to add into an existing workspace instead, run::

    pixi add ptrimmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ptrimmer

Alternatively, to install into a new environment, run::

    conda create -n envname ptrimmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ptrimmer:<tag>

(see `ptrimmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ptrimmer| image:: https://img.shields.io/conda/dn/bioconda/ptrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/ptrimmer
   :alt:   (downloads)
.. |docker_ptrimmer| image:: https://quay.io/repository/biocontainers/ptrimmer/status
   :target: https://quay.io/repository/biocontainers/ptrimmer
.. _`ptrimmer/tags`: https://quay.io/repository/biocontainers/ptrimmer?tab=tags


.. raw:: html

    <script>
        var package = "ptrimmer";
        var versions = ["1.4.0","1.4.0","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptrimmer/README.html