:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ashlar'
.. highlight: bash

ashlar
======

.. conda:recipe:: ashlar
   :replaces_section_title:
   :noindex:

   Alignment by Simultaneous Harmonization of Layer\/Adjacency Registration

   :homepage: https://github.com/sorgerlab/ashlar
   :documentation: https://labsyspharm.github.io/ashlar/
   
   :license: MIT / MIT
   :recipe: /`ashlar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashlar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashlar/meta.yaml>`_

   


.. conda:package:: ashlar

   |downloads_ashlar| |docker_ashlar|

   :versions:
      
      

      ``1.19.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``

      

   
   :depends on blessed: ``>=1.17``
   :depends on matplotlib-base: ``>=3.1.2``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.18.1``
   :depends on pyjnius: ``>=1.2.1``
   :depends on python: ``<3.12``
   :depends on scikit-image: ``0.19``
   :depends on scikit-learn: ``>=0.21.1``
   :depends on scipy: ``>=1.4.1``
   :depends on tifffile: ``>=2022.4.8``
   :depends on zarr: 

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

    pixi global install ashlar

to add into an existing workspace instead, run::

    pixi add ashlar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ashlar

Alternatively, to install into a new environment, run::

    conda create -n envname ashlar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ashlar:<tag>

(see `ashlar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ashlar| image:: https://img.shields.io/conda/dn/bioconda/ashlar.svg?style=flat
   :target: https://anaconda.org/bioconda/ashlar
   :alt:   (downloads)
.. |docker_ashlar| image:: https://quay.io/repository/biocontainers/ashlar/status
   :target: https://quay.io/repository/biocontainers/ashlar
.. _`ashlar/tags`: https://quay.io/repository/biocontainers/ashlar?tab=tags


.. raw:: html

    <script>
        var package = "ashlar";
        var versions = ["1.19.0","1.18.0","1.17.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ashlar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ashlar/README.html