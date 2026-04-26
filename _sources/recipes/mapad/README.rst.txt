:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapad'
.. highlight: bash

mapad
=====

.. conda:recipe:: mapad
   :replaces_section_title:
   :noindex:

   An aDNA aware short\-read mapper

   :homepage: https://github.com/mpieva/mapAD
   :license: MIT
   :recipe: /`mapad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapad/meta.yaml>`_

   


.. conda:package:: mapad

   |downloads_mapad| |docker_mapad|

   :versions:
      
      

      ``0.45.0-1``,  ``0.45.0-0``,  ``0.44.1-0``,  ``0.43.0-1``,  ``0.43.0-0``,  ``0.42.1-2``,  ``0.42.1-1``,  ``0.42.1-0``,  ``0.41.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install mapad

to add into an existing workspace instead, run::

    pixi add mapad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mapad

Alternatively, to install into a new environment, run::

    conda create -n envname mapad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mapad:<tag>

(see `mapad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mapad| image:: https://img.shields.io/conda/dn/bioconda/mapad.svg?style=flat
   :target: https://anaconda.org/bioconda/mapad
   :alt:   (downloads)
.. |docker_mapad| image:: https://quay.io/repository/biocontainers/mapad/status
   :target: https://quay.io/repository/biocontainers/mapad
.. _`mapad/tags`: https://quay.io/repository/biocontainers/mapad?tab=tags


.. raw:: html

    <script>
        var package = "mapad";
        var versions = ["0.45.0","0.45.0","0.44.1","0.43.0","0.43.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapad/README.html