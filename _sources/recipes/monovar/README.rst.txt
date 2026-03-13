:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monovar'
.. highlight: bash

monovar
=======

.. conda:recipe:: monovar
   :replaces_section_title:
   :noindex:

   single cell joint genotyper

   :homepage: https://bitbucket.org/hamimzafar/monovar
   :license: MIT
   :recipe: /`monovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monovar/meta.yaml>`_
   :links: biotools: :biotools:`Monovar`, doi: :doi:`10.1038/nmeth.3835`

   


.. conda:package:: monovar

   |downloads_monovar| |docker_monovar|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``,  ``v0.0.1-2``,  ``v0.0.1-1``,  ``v0.0.1-0``

      

   
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install monovar

to add into an existing workspace instead, run::

    pixi add monovar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install monovar

Alternatively, to install into a new environment, run::

    conda create -n envname monovar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/monovar:<tag>

(see `monovar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_monovar| image:: https://img.shields.io/conda/dn/bioconda/monovar.svg?style=flat
   :target: https://anaconda.org/bioconda/monovar
   :alt:   (downloads)
.. |docker_monovar| image:: https://quay.io/repository/biocontainers/monovar/status
   :target: https://quay.io/repository/biocontainers/monovar
.. _`monovar/tags`: https://quay.io/repository/biocontainers/monovar?tab=tags


.. raw:: html

    <script>
        var package = "monovar";
        var versions = ["0.0.1","0.0.1","v0.0.1","v0.0.1","v0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monovar/README.html