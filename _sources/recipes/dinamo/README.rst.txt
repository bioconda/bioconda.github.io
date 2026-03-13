:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinamo'
.. highlight: bash

dinamo
======

.. conda:recipe:: dinamo
   :replaces_section_title:
   :noindex:

   An exact and efficient method for IUPAC motif discovery in DNA sequences.

   :homepage: https://github.com/bonsai-team/DiNAMO
   :license: `GPL3 / GPL-3.0-or-later <https://raw.githubusercontent.com/bonsai-team/DiNAMO/V1.0/LICENSE>`_
   :recipe: /`dinamo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo/meta.yaml>`_
   :links: biotools: :biotools:`DiNAMO`, doi: :doi:`10.1186/s12859-018-2215-1`

   


.. conda:package:: dinamo

   |downloads_dinamo| |docker_dinamo|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install dinamo

to add into an existing workspace instead, run::

    pixi add dinamo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dinamo

Alternatively, to install into a new environment, run::

    conda create -n envname dinamo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dinamo:<tag>

(see `dinamo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dinamo| image:: https://img.shields.io/conda/dn/bioconda/dinamo.svg?style=flat
   :target: https://anaconda.org/bioconda/dinamo
   :alt:   (downloads)
.. |docker_dinamo| image:: https://quay.io/repository/biocontainers/dinamo/status
   :target: https://quay.io/repository/biocontainers/dinamo
.. _`dinamo/tags`: https://quay.io/repository/biocontainers/dinamo?tab=tags


.. raw:: html

    <script>
        var package = "dinamo";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinamo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinamo/README.html