:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idba'
.. highlight: bash

idba
====

.. conda:recipe:: idba
   :replaces_section_title:
   :noindex:

   IDBA is a practical iterative De Bruijn Graph De Novo Assembler for sequence assembly in bioinformatics.

   :homepage: https://i.cs.hku.hk/~alse/hkubrg/projects/idba_ud
   :developer docs: https://github.com/loneknightpy/idba
   :license: GPL2
   :recipe: /`idba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba/meta.yaml>`_
   :links: biotools: :biotools:`idba`, usegalaxy-eu: :usegalaxy-eu:`idba_ud`, doi: :doi:`10.1007/978-3-642-12683-3_28`

   


.. conda:package:: idba

   |downloads_idba| |docker_idba|

   :versions:
      
      

      ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-2``,  ``1.1.1-1``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on python: 

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

    pixi global install idba

to add into an existing workspace instead, run::

    pixi add idba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install idba

Alternatively, to install into a new environment, run::

    conda create -n envname idba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/idba:<tag>

(see `idba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_idba| image:: https://img.shields.io/conda/dn/bioconda/idba.svg?style=flat
   :target: https://anaconda.org/bioconda/idba
   :alt:   (downloads)
.. |docker_idba| image:: https://quay.io/repository/biocontainers/idba/status
   :target: https://quay.io/repository/biocontainers/idba
.. _`idba/tags`: https://quay.io/repository/biocontainers/idba?tab=tags


.. raw:: html

    <script>
        var package = "idba";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idba/README.html