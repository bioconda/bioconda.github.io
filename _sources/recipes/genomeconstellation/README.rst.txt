:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomeconstellation'
.. highlight: bash

genomeconstellation
===================

.. conda:recipe:: genomeconstellation
   :replaces_section_title:
   :noindex:

   Fast\, accurate and versatile k\-mer based classification system.

   :homepage: https://bitbucket.org/berkeleylab/jgi-genomeconstellation
   :license: BSD
   :recipe: /`genomeconstellation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation/meta.yaml>`_
   :links: doi: :doi:`10.1101/812917`

   


.. conda:package:: genomeconstellation

   |downloads_genomeconstellation| |docker_genomeconstellation|

   :versions:
      
      

      ``0.21.1-7``,  ``0.21.1-6``,  ``0.21.1-5``,  ``0.21.1-4``,  ``0.21.1-3``,  ``0.21.1-2``,  ``0.21.1-1``,  ``0.21.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install genomeconstellation

to add into an existing workspace instead, run::

    pixi add genomeconstellation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomeconstellation

Alternatively, to install into a new environment, run::

    conda create -n envname genomeconstellation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomeconstellation:<tag>

(see `genomeconstellation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomeconstellation| image:: https://img.shields.io/conda/dn/bioconda/genomeconstellation.svg?style=flat
   :target: https://anaconda.org/bioconda/genomeconstellation
   :alt:   (downloads)
.. |docker_genomeconstellation| image:: https://quay.io/repository/biocontainers/genomeconstellation/status
   :target: https://quay.io/repository/biocontainers/genomeconstellation
.. _`genomeconstellation/tags`: https://quay.io/repository/biocontainers/genomeconstellation?tab=tags


.. raw:: html

    <script>
        var package = "genomeconstellation";
        var versions = ["0.21.1","0.21.1","0.21.1","0.21.1","0.21.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomeconstellation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomeconstellation/README.html