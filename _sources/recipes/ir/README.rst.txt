:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ir'
.. highlight: bash

ir
==

.. conda:recipe:: ir
   :replaces_section_title:
   :noindex:

   Program for Calculating the Repetitiveness of DNA Sequences

   :homepage: http://guanine.evolbio.mpg.de/cgi-bin/ir/ir.cgi.pl
   :license: GPL2 / GPL-2
   :recipe: /`ir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir/meta.yaml>`_

   


.. conda:package:: ir

   |downloads_ir| |docker_ir|

   :versions:
      
      

      ``2.8.0-8``,  ``2.8.0-7``,  ``2.8.0-6``,  ``2.8.0-5``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``

      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install ir

to add into an existing workspace instead, run::

    pixi add ir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ir

Alternatively, to install into a new environment, run::

    conda create -n envname ir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ir:<tag>

(see `ir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ir| image:: https://img.shields.io/conda/dn/bioconda/ir.svg?style=flat
   :target: https://anaconda.org/bioconda/ir
   :alt:   (downloads)
.. |docker_ir| image:: https://quay.io/repository/biocontainers/ir/status
   :target: https://quay.io/repository/biocontainers/ir
.. _`ir/tags`: https://quay.io/repository/biocontainers/ir?tab=tags


.. raw:: html

    <script>
        var package = "ir";
        var versions = ["2.8.0","2.8.0","2.8.0","2.8.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ir/README.html