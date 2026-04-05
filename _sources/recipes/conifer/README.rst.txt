:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conifer'
.. highlight: bash

conifer
=======

.. conda:recipe:: conifer
   :replaces_section_title:
   :noindex:

   Calculate confidence scores from Kraken2 output.

   :homepage: https://github.com/Ivarz/Conifer
   :license: BSD / BSD-2-Clause
   :recipe: /`conifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer/meta.yaml>`_

   


.. conda:package:: conifer

   |downloads_conifer| |docker_conifer|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install conifer

to add into an existing workspace instead, run::

    pixi add conifer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install conifer

Alternatively, to install into a new environment, run::

    conda create -n envname conifer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/conifer:<tag>

(see `conifer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_conifer| image:: https://img.shields.io/conda/dn/bioconda/conifer.svg?style=flat
   :target: https://anaconda.org/bioconda/conifer
   :alt:   (downloads)
.. |docker_conifer| image:: https://quay.io/repository/biocontainers/conifer/status
   :target: https://quay.io/repository/biocontainers/conifer
.. _`conifer/tags`: https://quay.io/repository/biocontainers/conifer?tab=tags


.. raw:: html

    <script>
        var package = "conifer";
        var versions = ["1.0.3","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conifer/README.html