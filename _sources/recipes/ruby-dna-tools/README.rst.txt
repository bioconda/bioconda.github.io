:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruby-dna-tools'
.. highlight: bash

ruby-dna-tools
==============

.. conda:recipe:: ruby-dna-tools
   :replaces_section_title:
   :noindex:

   Various libraries containing useful functions for working with DNA sequences\, written in ruby. Some tools are not specific to DNA.

   :homepage: https://github.com/Carldeboer/Ruby-DNA-Tools
   :license: GPL-2.0
   :recipe: /`ruby-dna-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools/meta.yaml>`_

   


.. conda:package:: ruby-dna-tools

   |downloads_ruby-dna-tools| |docker_ruby-dna-tools|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on jemalloc: 
   :depends on python: 
   :depends on ruby: ``>=2.4``
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install ruby-dna-tools

to add into an existing workspace instead, run::

    pixi add ruby-dna-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ruby-dna-tools

Alternatively, to install into a new environment, run::

    conda create -n envname ruby-dna-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ruby-dna-tools:<tag>

(see `ruby-dna-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ruby-dna-tools| image:: https://img.shields.io/conda/dn/bioconda/ruby-dna-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/ruby-dna-tools
   :alt:   (downloads)
.. |docker_ruby-dna-tools| image:: https://quay.io/repository/biocontainers/ruby-dna-tools/status
   :target: https://quay.io/repository/biocontainers/ruby-dna-tools
.. _`ruby-dna-tools/tags`: https://quay.io/repository/biocontainers/ruby-dna-tools?tab=tags


.. raw:: html

    <script>
        var package = "ruby-dna-tools";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruby-dna-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruby-dna-tools/README.html