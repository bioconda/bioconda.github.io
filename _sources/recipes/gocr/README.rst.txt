:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gocr'
.. highlight: bash

gocr
====

.. conda:recipe:: gocr
   :replaces_section_title:
   :noindex:

   GOCR is an OCR \(Optical Character Recognition\) program.

   :homepage: https://jocr.sourceforge.net
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gocr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr/meta.yaml>`_

   


.. conda:package:: gocr

   |downloads_gocr| |docker_gocr|

   :versions:
      
      

      ``0.52-0``,  ``0.50-7``,  ``0.50-6``,  ``0.50-5``,  ``0.50-4``,  ``0.50-3``,  ``0.50-2``,  ``0.50-1``,  ``0.50-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install gocr

to add into an existing workspace instead, run::

    pixi add gocr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gocr

Alternatively, to install into a new environment, run::

    conda create -n envname gocr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gocr:<tag>

(see `gocr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gocr| image:: https://img.shields.io/conda/dn/bioconda/gocr.svg?style=flat
   :target: https://anaconda.org/bioconda/gocr
   :alt:   (downloads)
.. |docker_gocr| image:: https://quay.io/repository/biocontainers/gocr/status
   :target: https://quay.io/repository/biocontainers/gocr
.. _`gocr/tags`: https://quay.io/repository/biocontainers/gocr?tab=tags


.. raw:: html

    <script>
        var package = "gocr";
        var versions = ["0.52","0.50","0.50","0.50","0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gocr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gocr/README.html