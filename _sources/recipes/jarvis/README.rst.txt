:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jarvis'
.. highlight: bash

jarvis
======

.. conda:recipe:: jarvis
   :replaces_section_title:
   :noindex:

   Efficient lossless compression of genomic sequences

   :homepage: https://github.com/cobilab/jarvis
   :license: GPL / GPL3
   :recipe: /`jarvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis/meta.yaml>`_

   


.. conda:package:: jarvis

   |downloads_jarvis| |docker_jarvis|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
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

    pixi global install jarvis

to add into an existing workspace instead, run::

    pixi add jarvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jarvis

Alternatively, to install into a new environment, run::

    conda create -n envname jarvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jarvis:<tag>

(see `jarvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jarvis| image:: https://img.shields.io/conda/dn/bioconda/jarvis.svg?style=flat
   :target: https://anaconda.org/bioconda/jarvis
   :alt:   (downloads)
.. |docker_jarvis| image:: https://quay.io/repository/biocontainers/jarvis/status
   :target: https://quay.io/repository/biocontainers/jarvis
.. _`jarvis/tags`: https://quay.io/repository/biocontainers/jarvis?tab=tags


.. raw:: html

    <script>
        var package = "jarvis";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jarvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jarvis/README.html