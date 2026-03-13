:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastme'
.. highlight: bash

fastme
======

.. conda:recipe:: fastme
   :replaces_section_title:
   :noindex:

   a comprehensive\, accurate and fast distance\-based phylogeny inference program.

   :homepage: http://www.atgc-montpellier.fr/fastme/binaries.php
   :documentation: http://www.atgc-montpellier.fr/fastme/usersguide.php
   
   :developer docs: https://gite.lirmm.fr/atgc/FastME/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fastme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme/meta.yaml>`_
   :links: biotools: :biotools:`fastme`, doi: :doi:`10.1093/molbev/msv150`

   


.. conda:package:: fastme

   |downloads_fastme| |docker_fastme|

   :versions:
      
      

      ``2.1.6.3-1``,  ``2.1.6.3-0``,  ``2.1.6.1-3``,  ``2.1.6.1-2``,  ``2.1.6.1-1``,  ``2.1.6.1-0``,  ``2.1.5-0``

      

   
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

    pixi global install fastme

to add into an existing workspace instead, run::

    pixi add fastme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastme

Alternatively, to install into a new environment, run::

    conda create -n envname fastme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastme:<tag>

(see `fastme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastme| image:: https://img.shields.io/conda/dn/bioconda/fastme.svg?style=flat
   :target: https://anaconda.org/bioconda/fastme
   :alt:   (downloads)
.. |docker_fastme| image:: https://quay.io/repository/biocontainers/fastme/status
   :target: https://quay.io/repository/biocontainers/fastme
.. _`fastme/tags`: https://quay.io/repository/biocontainers/fastme?tab=tags


.. raw:: html

    <script>
        var package = "fastme";
        var versions = ["2.1.6.3","2.1.6.3","2.1.6.1","2.1.6.1","2.1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastme/README.html