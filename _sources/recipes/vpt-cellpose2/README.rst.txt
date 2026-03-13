:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpt-cellpose2'
.. highlight: bash

vpt-cellpose2
=============

.. conda:recipe:: vpt-cellpose2
   :replaces_section_title:
   :noindex:

   Meta\-package for VPT with Cellpose 2 plugin

   :homepage: 
   :license: The license for this meta-package is MIT; VPT and its plugins are under the Apache-2.0 license
   :recipe: /`vpt-cellpose2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-cellpose2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-cellpose2/meta.yaml>`_

   


.. conda:package:: vpt-cellpose2

   |downloads_vpt-cellpose2| |docker_vpt-cellpose2|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on vpt: 
   :depends on vpt-plugin-cellpose2: 

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

    pixi global install vpt-cellpose2

to add into an existing workspace instead, run::

    pixi add vpt-cellpose2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vpt-cellpose2

Alternatively, to install into a new environment, run::

    conda create -n envname vpt-cellpose2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vpt-cellpose2:<tag>

(see `vpt-cellpose2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vpt-cellpose2| image:: https://img.shields.io/conda/dn/bioconda/vpt-cellpose2.svg?style=flat
   :target: https://anaconda.org/bioconda/vpt-cellpose2
   :alt:   (downloads)
.. |docker_vpt-cellpose2| image:: https://quay.io/repository/biocontainers/vpt-cellpose2/status
   :target: https://quay.io/repository/biocontainers/vpt-cellpose2
.. _`vpt-cellpose2/tags`: https://quay.io/repository/biocontainers/vpt-cellpose2?tab=tags


.. raw:: html

    <script>
        var package = "vpt-cellpose2";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpt-cellpose2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpt-cellpose2/README.html