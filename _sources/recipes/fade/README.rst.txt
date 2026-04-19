:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fade'
.. highlight: bash

fade
====

.. conda:recipe:: fade
   :replaces_section_title:
   :noindex:

   fade is a D program that provides fast identification and removal of enzymatic fragmentation artifacts.

   :homepage: https://github.com/blachlylab/fade
   :license: MIT
   :recipe: /`fade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaa070`

   


.. conda:package:: fade

   |downloads_fade| |docker_fade|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.5-0``,  ``0.3.6-0``

      

   

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

    pixi global install fade

to add into an existing workspace instead, run::

    pixi add fade

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fade

Alternatively, to install into a new environment, run::

    conda create -n envname fade

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fade:<tag>

(see `fade/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fade| image:: https://img.shields.io/conda/dn/bioconda/fade.svg?style=flat
   :target: https://anaconda.org/bioconda/fade
   :alt:   (downloads)
.. |docker_fade| image:: https://quay.io/repository/biocontainers/fade/status
   :target: https://quay.io/repository/biocontainers/fade
.. _`fade/tags`: https://quay.io/repository/biocontainers/fade?tab=tags


.. raw:: html

    <script>
        var package = "fade";
        var versions = ["0.6.0","0.5.5","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fade/README.html