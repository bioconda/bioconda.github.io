:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chips'
.. highlight: bash

chips
=====

.. conda:recipe:: chips
   :replaces_section_title:
   :noindex:

   ChIPs is a tool for simulating ChIP\-sequencing experiments.

   :homepage: https://github.com/gymreklab/chips
   :license: GNU General Public License v3.0
   :recipe: /`chips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chips/meta.yaml>`_

   


.. conda:package:: chips

   |downloads_chips| |docker_chips|

   :versions:
      
      

      ``2.4-7``,  ``2.4-6``,  ``2.4-5``,  ``2.4-4``,  ``2.4-3``,  ``2.4-2``,  ``2.4-1``,  ``2.4-0``,  ``2.3-0``

      

   
   :depends on htslib: ``>=1.20,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
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

    pixi global install chips

to add into an existing workspace instead, run::

    pixi add chips

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chips

Alternatively, to install into a new environment, run::

    conda create -n envname chips

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chips:<tag>

(see `chips/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chips| image:: https://img.shields.io/conda/dn/bioconda/chips.svg?style=flat
   :target: https://anaconda.org/bioconda/chips
   :alt:   (downloads)
.. |docker_chips| image:: https://quay.io/repository/biocontainers/chips/status
   :target: https://quay.io/repository/biocontainers/chips
.. _`chips/tags`: https://quay.io/repository/biocontainers/chips?tab=tags


.. raw:: html

    <script>
        var package = "chips";
        var versions = ["2.4","2.4","2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chips/README.html