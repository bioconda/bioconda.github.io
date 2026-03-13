:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minipolish'
.. highlight: bash

minipolish
==========

.. conda:recipe:: minipolish
   :replaces_section_title:
   :noindex:

   A tool for Racon polishing miniasm assemblies.

   :homepage: https://github.com/rrwick/Minipolish
   :documentation: https://github.com/rrwick/Minipolish/blob/v0.2.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`minipolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.21782.4`, biotools: :biotools:`minipolish`, usegalaxy-eu: :usegalaxy-eu:`minipolish`

   


.. conda:package:: minipolish

   |downloads_minipolish| |docker_minipolish|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on minimap2: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on racon: 

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

    pixi global install minipolish

to add into an existing workspace instead, run::

    pixi add minipolish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minipolish

Alternatively, to install into a new environment, run::

    conda create -n envname minipolish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minipolish:<tag>

(see `minipolish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minipolish| image:: https://img.shields.io/conda/dn/bioconda/minipolish.svg?style=flat
   :target: https://anaconda.org/bioconda/minipolish
   :alt:   (downloads)
.. |docker_minipolish| image:: https://quay.io/repository/biocontainers/minipolish/status
   :target: https://quay.io/repository/biocontainers/minipolish
.. _`minipolish/tags`: https://quay.io/repository/biocontainers/minipolish?tab=tags


.. raw:: html

    <script>
        var package = "minipolish";
        var versions = ["0.2.0","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minipolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minipolish/README.html