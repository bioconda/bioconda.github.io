:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crass'
.. highlight: bash

crass
=====

.. conda:recipe:: crass
   :replaces_section_title:
   :noindex:

   Crass \(The CRISPR Assembler\) is a program that searches through raw metagenomic reads for Clustered Regularly Interspersed Short Palindromic Repeats

   :homepage: https://github.com/ctSkennerton/crass
   :license: GPL-3.0-or-later
   :recipe: /`crass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crass/meta.yaml>`_

   


.. conda:package:: crass

   |downloads_crass| |docker_crass|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on graphviz: ``>=12.2.1,<13.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``

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

    pixi global install crass

to add into an existing workspace instead, run::

    pixi add crass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crass

Alternatively, to install into a new environment, run::

    conda create -n envname crass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crass:<tag>

(see `crass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crass| image:: https://img.shields.io/conda/dn/bioconda/crass.svg?style=flat
   :target: https://anaconda.org/bioconda/crass
   :alt:   (downloads)
.. |docker_crass| image:: https://quay.io/repository/biocontainers/crass/status
   :target: https://quay.io/repository/biocontainers/crass
.. _`crass/tags`: https://quay.io/repository/biocontainers/crass?tab=tags


.. raw:: html

    <script>
        var package = "crass";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crass/README.html