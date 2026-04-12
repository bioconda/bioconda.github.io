:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knotinframe'
.. highlight: bash

knotinframe
===========

.. conda:recipe:: knotinframe
   :replaces_section_title:
   :noindex:

   Predicts \-1 frameshift sites with simple pseudoknots.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/knotinframe
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`knotinframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkn578`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: knotinframe

   |downloads_knotinframe| |docker_knotinframe|

   :versions:
      
      

      ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.14-1``,  ``2.2.14-0``

      

   
   :depends on bellmans-gapc: ``>=2020.12.08``
   :depends on bellmans-gapc: ``>=2024.1.12``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 

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

    pixi global install knotinframe

to add into an existing workspace instead, run::

    pixi add knotinframe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install knotinframe

Alternatively, to install into a new environment, run::

    conda create -n envname knotinframe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/knotinframe:<tag>

(see `knotinframe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_knotinframe| image:: https://img.shields.io/conda/dn/bioconda/knotinframe.svg?style=flat
   :target: https://anaconda.org/bioconda/knotinframe
   :alt:   (downloads)
.. |docker_knotinframe| image:: https://quay.io/repository/biocontainers/knotinframe/status
   :target: https://quay.io/repository/biocontainers/knotinframe
.. _`knotinframe/tags`: https://quay.io/repository/biocontainers/knotinframe?tab=tags


.. raw:: html

    <script>
        var package = "knotinframe";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knotinframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knotinframe/README.html