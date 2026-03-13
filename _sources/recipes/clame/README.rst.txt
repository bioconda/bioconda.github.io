:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clame'
.. highlight: bash

clame
=====

.. conda:recipe:: clame
   :replaces_section_title:
   :noindex:

   CLAME is a binning software for metagenomic reads. It immplements a fm\-index search algorithm for nucleotide sequence alignment. Then it uses strongly connected component strategy to bin sequences with similar DNA composition.

   :homepage: https://github.com/andvides/CLAME
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`clame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clame/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-018-5191-y`

   


.. conda:package:: clame

   |downloads_clame| |docker_clame|

   :versions:
      
      

      ``1.0-3``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libopenlibm4: ``>=0.8.1,<1.0a0``
   :depends on libstdcxx: ``>=13``

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

    pixi global install clame

to add into an existing workspace instead, run::

    pixi add clame

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clame

Alternatively, to install into a new environment, run::

    conda create -n envname clame

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clame:<tag>

(see `clame/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clame| image:: https://img.shields.io/conda/dn/bioconda/clame.svg?style=flat
   :target: https://anaconda.org/bioconda/clame
   :alt:   (downloads)
.. |docker_clame| image:: https://quay.io/repository/biocontainers/clame/status
   :target: https://quay.io/repository/biocontainers/clame
.. _`clame/tags`: https://quay.io/repository/biocontainers/clame?tab=tags


.. raw:: html

    <script>
        var package = "clame";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clame/README.html