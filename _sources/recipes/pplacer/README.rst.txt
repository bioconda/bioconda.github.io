:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pplacer'
.. highlight: bash

pplacer
=======

.. conda:recipe:: pplacer
   :replaces_section_title:
   :noindex:

   Pplacer places query sequences on a fixed reference phylogenetic tree to maximize phylogenetic likelihood or posterior probability according to a reference alignment.

   :homepage: http://matsen.fredhutch.org/pplacer/
   :developer docs: https://github.com/matsen/pplacer/
   :license: GPL / GPL-3.0
   :recipe: /`pplacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer/meta.yaml>`_

   


.. conda:package:: pplacer

   |downloads_pplacer| |docker_pplacer|

   :versions:
      
      

      ``1.1.alpha22-0``,  ``1.1.alpha20-0``,  ``1.1.alpha19-2``,  ``1.1.alpha19-1``,  ``1.1.alpha19-0``,  ``1.1.alpha17-3``,  ``1.1.alpha17-0``

      

   
   :depends on gsl: ``>=2.8,<2.9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install pplacer

to add into an existing workspace instead, run::

    pixi add pplacer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pplacer

Alternatively, to install into a new environment, run::

    conda create -n envname pplacer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pplacer:<tag>

(see `pplacer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pplacer| image:: https://img.shields.io/conda/dn/bioconda/pplacer.svg?style=flat
   :target: https://anaconda.org/bioconda/pplacer
   :alt:   (downloads)
.. |docker_pplacer| image:: https://quay.io/repository/biocontainers/pplacer/status
   :target: https://quay.io/repository/biocontainers/pplacer
.. _`pplacer/tags`: https://quay.io/repository/biocontainers/pplacer?tab=tags


.. raw:: html

    <script>
        var package = "pplacer";
        var versions = ["1.1.alpha22","1.1.alpha20","1.1.alpha19","1.1.alpha19","1.1.alpha19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pplacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pplacer/README.html